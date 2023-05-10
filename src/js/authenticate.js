

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
        event.preventDefault();

        const loginData = {
            "email": `${name}`,
            "password": `${password}`, //"theusualcode"
        };

        // loginUser (loginData);
    }

}

// formContainer.addEventListener("submit", validate);