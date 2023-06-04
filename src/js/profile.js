const profileFeedContainer = document.querySelector('.feed-profile');
const nameContainer = document.querySelector('.profile-name');

const modalCTA = {};

const accessToken = localStorage.getItem('accessToken');
const profileName = localStorage.getItem('profileName');

nameContainer.innerHTML = profileName;

const profileURL = BASE_URL + `/profiles/${profileName}/posts`;

const feedOption = {
    method: 'GET',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${accessToken}`,
    },
};

async function feedProfile(fURL) {
    const apiJson = await apiRequest(fURL, feedOption);
    if (apiJson['output'] == 'json') {
        const cleanContent = contentClean(apiJson['json']);
        console.log('async', apiJson['json']);

        for (let i = 0; i < cleanContent.length; i++) {
            profileFeedContainer.innerHTML += createHtml(cleanContent[i], profileName, i);
        }

        modalCTA['update'] = document.querySelectorAll("#update");
        modalCTA['delete'] = document.querySelectorAll("#delete-btn");

        for (let i = 0; i < modalCTA['update'].length; i++) {
            modalCTA['update'][i].addEventListener('submit', updatePost);
        }

        for (let i = 0; i < modalCTA['delete'].length; i++) {
            modalCTA['delete'][i].addEventListener('click', deletePost);
        }
    }

    else {
        console.log('error', apiJson['error']);
    }
}

feedProfile(profileURL);