const BASE_URL = 'https://nf-api.onrender.com/api/v1/social';

//Endpoints
// const registerURL = BASE_URL + '/auth/register';
const loginURL = BASE_URL + '/auth/login';
//Get: /posts

const userNameContainer = document.querySelector("#email");
const passwordContainer = document.querySelector("#password");

const feedbackErrorContainer = document.querySelector(".feedback-error");

const loginFormContainer = document.querySelector(".login-form");

//clear error message oninput
userNameContainer.oninput = function() {
    clearFeedback(feedbackErrorContainer, feedbackErrorContainer);
}

passwordContainer.oninput = function () {
    clearFeedback(feedbackErrorContainer, feedbackErrorContainer);
}

/**
 * authenticates and logs in user
 * @param {event} event 
 */
async function loginUser (event) {

    event.preventDefault();

    const name = userNameContainer.value;
    const password = passwordContainer.value;

    const loginData = {
        "email": `${name}`, //"profile_name@stud.noroff.no"
        "password": `${password}`, //"theusualcode"
    };

    const loginOption = {
        method: 'POST',
        body: JSON.stringify(loginData),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
    }
    
    try {
        const response = await fetch(loginURL, loginOption);
        const json = await response.json();
        if (json.accessToken) {
            console.log('Login successful');
            window.open("feed.html", '_self');
        }

        else {
            console.log('Invalid email or password');
            setFeedback(feedbackErrorContainer, feedbackErrorContainer, 'Invalid email or password', "text-danger");
        }

        console.log(json);
    }

    catch (error) {
        console.log(error);
        console.log('failed');
    }
}

loginFormContainer.addEventListener("submit", loginUser);