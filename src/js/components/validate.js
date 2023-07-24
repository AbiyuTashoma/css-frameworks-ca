/**
 * validates text length trimming spaces
 * @param {Text} stringValue 
 * @param {Number} [minLenText] text length
 * @returns {boolean}
 */
function validateText(stringValue, minLenText = 1, maxLenText = 20) {
    const textLen = stringValue.trim().length;
    if (textLen >= minLenText && textLen <= maxLenText) {
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
function validateEmail(emailValue) {
    const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const match = regEx.test(emailValue);
    return match;
}