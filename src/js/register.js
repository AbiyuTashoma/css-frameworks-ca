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
}
registerEmailContainer.oninput = function() {
    clearFeedback(noteEmailContainer, registerEmailContainer);
}
registerPasswordContainer.oninput = function() {
    clearFeedback(notePasswordContainer, registerPasswordContainer);
}

//validate input
/**
 * validates registration values
 * @param {event} event 
 */
function validate(event) {

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
        setFeedback(noteNameContainer, registerNameContainer, "Username should atleast be 5 characters", "text-danger");
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
            "username": `${userName}`,
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
        setFeedback(successContainer, successContainer, "Registration successful, login above!", "text-success");
        registerFormContainer.reset();
    }

}

/**
 * Registers user
 * @param {Request} option user data
 */
async function registerUser (option) {

    console.log(option);
    
}

registerFormContainer.addEventListener("submit", validate);