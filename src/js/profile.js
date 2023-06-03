const profileFeedContainer = document.querySelector('.feed-profile');
const nameContainer = document.querySelector('.profile-name');

const modalCTA = {};

const accessToken = localStorage.getItem('accessToken');
const profileName = localStorage.getItem('profileName');

nameContainer.innerHTML = profileName;

//profiles/<name>/posts
const profileURL = BASE_URL + `/profiles/${profileName}/posts`;
// console.log(profileURL);

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
        profileFeedContainer.innerHTML = createHtml(cleanContent);
        console.log('async', apiJson['json']);

        modalCTA['update'] = document.querySelectorAll("#update");
        modalCTA['delete'] = document.querySelectorAll("#delete-btn");

        for (let i = 0; i < modalCTA['update'].length; i++) {
            modalCTA['update'][i].addEventListener('submit', updatePost);
        }

        for (let i = 0; i < modalCTA['delete'].length; i++) {
            modalCTA['delete'][i].addEventListener('click', deletePost);
        }
        // console.log(modalCTA['update']);
        // console.log(modalCTA['delete']);
    }

    else {
        console.log('error', apiJson['error']);
    }
}

feedProfile(profileURL);