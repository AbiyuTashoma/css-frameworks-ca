function validateText (stringValue, minLenText = 1) {
    if (stringValue.trim().length >= minLenText) {
        return true;
    }

    else {
        return false;
    }
}

function validateEmail (emailValue) {
    const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const match = regEx.test(emailValue);
    return match;   
}

function setError(noteContainer, inputContainer, errorMessage) {
    noteContainer.innerHTML = `<div>${errorMessage}</div>`;
    inputContainer.style.borderColor = "red";
}

function clearError(noteContainer, inputContainer) {
    noteContainer.innerHTML = "";
    inputContainer.style.borderColor = "";
}