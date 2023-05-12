/**
 * validates text length excluding space
 * @param {Text} stringValue 
 * @param {Number} [minLenText] text length
 * @returns {boolean}
 */
function validateText (stringValue, minLenText = 1) {
    if (stringValue.trim().length >= minLenText) {
        return true;
    }

    else {
        return false;
    }
}

/**
 * validates email
 * @param {Text} emailValue 
 * @returns {boolean}
 */
function validateEmail (emailValue) {
    const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const match = regEx.test(emailValue);
    return match;   
}

/**
 * Highlights error field and displays error message
 * @param {HTMLElement} noteContainer 
 * @param {HTMLElement} inputContainer 
 * @param {Text} errorMessage 
 */
function setError(noteContainer, inputContainer, errorMessage) {
    noteContainer.innerHTML = `<div>${errorMessage}</div>`;
    inputContainer.style.borderColor = "red";
}

/**
 * Clears error message and border highlight
 * @param {HTMLElement} noteContainer 
 * @param {HTMLElement} inputContainer 
 */
function clearError(noteContainer, inputContainer) {
    noteContainer.innerHTML = "";
    inputContainer.style.borderColor = "";
}