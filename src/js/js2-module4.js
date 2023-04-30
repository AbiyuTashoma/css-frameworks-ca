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