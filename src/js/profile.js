const profileFeedContainer = document.querySelector('.feed-profile');
const nameContainer = document.querySelector('.profile-name');

const postsContainer = document.querySelector('.posts');
const followersContainer = document.querySelector('.followers');
const followingContainer = document.querySelector('.following');

const modalCTA = {};

const accessToken = localStorage.getItem('accessToken');
const currentUser = localStorage.getItem('currentUser');

const queryString = document.location.search;
const param = new URLSearchParams(queryString);
let profileName = param.get("profile_name");

if (!profileName) {
    console.log('no profile');
    console.log(currentUser);
    profileName = currentUser;
}

const profileURL = BASE_URL + `/profiles/${profileName}?_posts=true`;
nameContainer.innerHTML = profileName;

const feedOption = {
    method: 'GET',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${accessToken}`,
    },
};

async function feedProfile(fURL) {
    profileFeedContainer.innerHTML = loading;
    const apiJson = await apiRequest(fURL, feedOption);
    profileFeedContainer.innerHTML = "";
    if (apiJson['output'] == 'json') {
        const cleanContent = contentClean(apiJson['json']['posts']);
        console.log('async', apiJson['json']['posts']);

        postsContainer.innerHTML = apiJson['json']['_count']['posts'];
        followersContainer.innerHTML = apiJson['json']['_count']['followers'];
        followingContainer.innerHTML = apiJson['json']['_count']['following'];

        if (apiJson['json']['_count']['posts'] == 0) {
            setFeedback(profileFeedContainer, profileFeedContainer, "You have not posted yet", "text-center");
        }

        for (let i = 0; i < cleanContent.length; i++) {
            let dropdownButtonState = 'disabled';
            if (profileName === currentUser) {
                dropdownButtonState = 'enabled';
            }

            profileFeedContainer.innerHTML += createHtml(cleanContent[i], profileName, i, dropdownButtonState);
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