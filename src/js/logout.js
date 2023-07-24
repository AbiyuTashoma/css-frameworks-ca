const logoutContainer = document.querySelector('.logout');

/**
 * clears local storage during log out
 */
function logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('currentUser');
}

if (!accessToken || !currentUser) {
    window.open("index.html", '_self');
}

logoutContainer.addEventListener('click', logout);