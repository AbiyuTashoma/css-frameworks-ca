const registerNameContainer = document.querySelector("#register-name");
const registerEmailContainer = document.querySelector("#register-email");
const registerPasswordContainer = document.querySelector("#register-password");

const noteNameContainer = document.querySelector(".note-name");
const noteEmailContainer = document.querySelector(".note-email");
const notePasswordContainer = document.querySelector(".note-password");
const successContainer = document.querySelector(".feedback-success");

const registerFormContainer = document.querySelector(".register");

const registerURL = BASE_URL + '/auth/register';

//Clear error oninput
registerNameContainer.oninput = function() {
    clearFeedback(noteNameContainer, registerNameContainer);
    clearFeedback(successContainer, successContainer);
}
registerEmailContainer.oninput = function() {
    clearFeedback(noteEmailContainer, registerEmailContainer);
    clearFeedback(successContainer, successContainer);
}
registerPasswordContainer.oninput = function() {
    clearFeedback(notePasswordContainer, registerPasswordContainer);
    clearFeedback(successContainer, successContainer);
}

//validate input
/**
 * validates registration values
 * @param {event} event 
 */
async function validate(event) {

    event.preventDefault();

    let validRegister = true;

    const userName = registerNameContainer.value;
    const email = registerEmailContainer.value;
    const password = registerPasswordContainer.value;

    const validName = validateText(userName, 5);
    const validEmail = validateEmail(email);
    const validPassword = validateText(password, 8);

    if (!validName) {
        validRegister = false;
        setFeedback(noteNameContainer, registerNameContainer, "Username should be between 5 and 20 characters", "text-danger");
    }

    if (!validEmail) {
        validRegister = false;
        setFeedback(noteEmailContainer, registerEmailContainer, "Enter valid email", "text-danger");
    }

    if (!validPassword) {
        validRegister = false;
        setFeedback(notePasswordContainer, registerPasswordContainer, "Password should atleast be 8 characters", "text-danger");
    }

    if (validRegister) {

        const registerData = {
            "name": `${userName}`,
            "email": `${email}`,
            "password": `${password}`, //"theusualcode"
        };

        const registerOption = {
            method: 'POST',
            body: JSON.stringify(registerData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
        }

        registerUser(registerOption);

        //refactoring register user
        // const registerResponse = await apiRequest (registerURL, registerOption);
        // if (registerResponse['json'].statusCode === 200 || registerResponse['json'].statusCode === 201) {
        //     setFeedback(successContainer, successContainer, "Registration successful, login above!", "text-success");
        //     registerFormContainer.reset();
        //     registerFormContainer.className = "collapse";
        // }
        // if (registerResponse['json'].errors[0]) {
        //     console.log(registerResponse['json'].errors[0]['message']);
        //     setFeedback(successContainer, successContainer, registerResponse['json'].errors[0]['message'], "text-danger");
        // }
        // if (registerResponse['error']) {
        //     setFeedback(successContainer, successContainer, "Unknown error, please try again", "text-danger");
        // }
    }
}

/**
 * Registers user
 * @param {Request} option user data
 */
async function registerUser (option) {

    // console.log(option);
    try {
        const response = await fetch(registerURL, option);
        const json = await response.json();
        console.log(json);
        if (json.statusCode === 200) {
            setFeedback(successContainer, successContainer, "Registration successful, login above!", "text-success");
            registerFormContainer.reset();
        }
        else {
            console.log(json.errors[0]['message']);
            setFeedback(successContainer, successContainer, json.errors[0]['message'], "text-danger");
        }
    }
     catch(error) {
        setFeedback(successContainer, successContainer, "Unknown error, please try again", "text-danger");
        console.log(error);
        console.log("failed");
     }
    
}

registerFormContainer.addEventListener("submit", validate);