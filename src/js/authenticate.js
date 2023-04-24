const userNameContainer = document.querySelector("#username");
const passwordContainer = document.querySelector("#password");

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

    const validName = validateText(name);
    const validPassword = validateText(password, 8);

    if (!validName) {
        event.preventDefault()
        validLogin = false;
        setError(feedbackNameContainer, userNameContainer, "Name should be atleast be a character");
    }

    if (!validPassword) {
        event.preventDefault()
        validLogin = false;
        setError(feedbackPasswordContainer, passwordContainer, "Password should atleast be 8 characters");
    }

}

formContainer.addEventListener("submit", validate);
