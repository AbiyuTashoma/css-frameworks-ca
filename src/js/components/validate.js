/**
 * Validates string value
 * @param {string} stringValue value to be validated
 * @param {number} [minLenText = 1] minimum length required for validation
 * @returns {boolean} true if valid and false otherwise
 * @example
 * ```js
 * // validate string length
 * const inputValue = "name";
 * const requiredLength = 2;
 * const validity = validateText (inputValue, requiredLength);
 * // Expected result true
 * ```
 */
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