//HTTP request methods
url = 'https://jsonplaceholder.typicode.com/posts';

//GET
fetch(url + '/1')
.then((response) => response.json())
.then((json) => console.log(json));

//POST
fetch(url, {
    method: 'POST',
    body: JSON.stringify({
        'title': 'foo',
        'body': 'bar',
        'userId': 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    },
})
.then((response) => response.json())
.then((json) => console.log(json));

//PUT
fetch(url + '/2', {
    method: 'PUT',
    body: JSON.stringify({
        'id': 2,
        'title': 'foo put',
        'body': 'put body',
        'userId': 2,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    },
})
.then((response) => response.json())
.then((json) => console.log(json));

//PATCH
fetch(url + '/6', {
    method: 'PATCH',
    body: JSON.stringify({
        'body': 'patched body',
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    },
})
.then((response) => response.json())
.then((json) => console.log(json));

//DELETE
fetch(url + '/7', {
    method: 'DELETE',
})
.then((response) => console.log(response));

//URL parameters/ Query string

// const parameterString = window.location.search;
// const searchParameter = new URLSearchParams(parameterString);
// console.log(searchParameter);
// console.log(searchParameter.toString());

// const ID = searchParameter.get('id');
// searchParameter.set('country', 'Norway');

//JWT Token
console.log('JWT token');

const BASE_URL = 'https://nf-api.onrender.com/api/v1/social';

//Endpoints
//Register: /auth/register
//Login: /auth/login
//Get: /posts

//Register user
async function registerUser (url, userData) {
    const regOption = {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
    };

    try {
        const response = await fetch(url, regOption);
        const json = await response.json();
        console.log(json);
    }
    catch(error) {
        console.log(error);
    }
}

const registerURL = `${BASE_URL}/auth/register`;
const data = {
    "name": "profile_name",
    "email": "profile_name@stud.noroff.no",
    "password": "theusualcode", 
}

// registerUser (registerURL, data); registration complete

//login and accessToken
async function loginUser (url, loginCredential) {
    const loginOption = {
        method: 'POST',
        body: JSON.stringify(loginCredential),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
    }
    try {
        const response = await fetch(url, loginOption);
        const json = await response.json();
        console.log(json);
        localStorage.setItem('accessToken', json.accessToken);
    }
    catch(error) {
        console.log(error);
    }
}

const loginURL = `${BASE_URL}/auth/login`;
const loginData = {
    "email": "profile_name@stud.noroff.no",
    "password": "theusualcode",
}

// loginUser (loginURL, loginData);

//Request with JWT token
async function getData (url) {
    const accessToken = localStorage.getItem('accessToken');
    const getOption = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            Authorization: `Bearer ${accessToken}`,
        },
    }

    const response = await fetch(url, getOption);
    const json = await response.json();
    console.log(json);
}

const getURL = `${BASE_URL}/posts`;

getData (getURL);