const userNameContainer = document.querySelector("#username");
const passwordContainer = document.querySelector("#password");

const feedbackErrorContainer = document.querySelector(".feedback-error");
const feedbackNameContainer = document.querySelector(".feedback-name");
const feedbackPasswordContainer = document.querySelector(".feedback-password");

const formContainer = document.querySelector(".login-form");

//clear error message oninput
userNameContainer.oninput = function() {
    clearError(feedbackNameContainer, userNameContainer);
}

passwordContainer.oninput = function () {
    clearError(feedbackPasswordContainer, passwordContainer);
}

//validate input
function validate(event) {

    let validLogin = true;

    const name = userNameContainer.value;
    const password = passwordContainer.value;

    const validName = validateText(name, 5);
    const validPassword = validateText(password, 8);

    if (!validName) {
        event.preventDefault()
        validLogin = false;
        setError(feedbackNameContainer, userNameContainer, "Name should be atleast be 5 characters");
    }

    if (!validPassword) {
        event.preventDefault()
        validLogin = false;
        setError(feedbackPasswordContainer, passwordContainer, "Password should atleast be 8 characters");
    }

    if (validLogin) {
        event.preventDefault()

        const loginData = {
            "email": `${name}`,
            "password": `${password}`, //"theusualcode"
        };

        loginUser (loginData);
    }

}

formContainer.addEventListener("submit", validate);

//
const BASE_URL = 'https://nf-api.onrender.com/api/v1/social';

//Endpoints
const registerURL = BASE_URL + '/auth/register';
const loginURL = BASE_URL + '/auth/login';
//Get: /posts

async function loginUser (data) {

    const loginOption = {
        method: 'POST',
        body: JSON.stringify(data),
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
            setError(feedbackErrorContainer, feedbackErrorContainer, 'Invalid email or password');
        }
        console.log(json);
    }

    catch (error) {
        console.log(error);
        console.log('failed');
    }
}

// const loginData = {
//     "email": "profile_name@stud.noroff.no",
//     "password": "theusualcode", //"theusualcode"
// };

// loginUser(loginData);
// formContainer.addEventListener("submit", loginUser);
