const profileFeedContainer = document.querySelector('.feed-profile');
const nameContainer = document.querySelector('.profile-name');

const modalCTA = {};

const accessToken = localStorage.getItem('accessToken');
const currentUser = localStorage.getItem('currentUser');

const queryString = document.location.search;
const param = new URLSearchParams(queryString);
const profileName = { name: param.get("profile_name") };

if (!profileName) {
    console.log('no profile');
    profileName = { name: currentUser };
}

const profileURL = BASE_URL + `/profiles/${profileName['name']}/posts`;
nameContainer.innerHTML = profileName['name'];

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
            profileFeedContainer.innerHTML += createHtml(cleanContent[i], profileName['name'], i);
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