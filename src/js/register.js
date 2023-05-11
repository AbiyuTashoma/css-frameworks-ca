const registerNameContainer = document.querySelector("#register-name");
const registerEmailContainer = document.querySelector("#register-email");
const registerPasswordContainer = document.querySelector("#register-password");

const noteNameContainer = document.querySelector(".note-name");
const noteEmailContainer = document.querySelector(".note-email");
const notePasswordContainer = document.querySelector(".note-password")

const registerFormContainer = document.querySelector(".register");

const registerURL = BASE_URL + '/auth/register';

//Clear error oninput
registerNameContainer.oninput = function() {
    clearError(noteNameContainer, registerNameContainer);
}
registerEmailContainer.oninput = function() {
    clearError(noteEmailContainer, registerEmailContainer);
}
registerPasswordContainer.oninput = function() {
    clearError(notePasswordContainer, registerPasswordContainer);
}

//validate input
function validate(event) {

    event.preventDefault();

    let validLogin = true;

    const userName = registerNameContainer.value;
    const email = registerEmailContainer.value;
    const password = registerPasswordContainer.value;

    // console.log('name '+userName)
    // console.log('email '+email)
    // console.log('password '+password)

    const validName = validateText(userName, 5);
    const validEmail = validateEmail(email);
    const validPassword = validateText(password, 8);

    if (!validName) {
        validLogin = false;
        setError(noteNameContainer, registerNameContainer, "Username should atleast be 5 characters");
    }

    if (!validEmail) {
        validLogin = false;
        setError(noteEmailContainer, registerEmailContainer, "Enter valid email");
    }

    if (!validPassword) {
        validLogin = false;
        setError(notePasswordContainer, registerPasswordContainer, "Password should atleast be 8 characters");
    }

    if (validLogin) {
        

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
    }

}

async function registerUser (option) {

    console.log(option);
    
}

registerFormContainer.addEventListener("submit", validate);