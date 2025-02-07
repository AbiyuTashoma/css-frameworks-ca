const profileFeedContainer = document.querySelector('.feed-profile');
const nameContainer = document.querySelector('.profile-name');

const postsContainer = document.querySelector('.posts');
const followersContainer = document.querySelector('.followers');
const followingContainer = document.querySelector('.following');
const followBtnContainer = document.querySelector('.follow-btn');
const followBtnTextContainer = document.querySelector('.follow-btn span');

const queryString = document.location.search;
const param = new URLSearchParams(queryString);
let profileName = param.get("profile_name");

if (!profileName) {
    profileName = currentUser;
}

//Set document title
document.title = profileName;

const profileURL = BASE_URL + `/profiles/${profileName}?_posts=true&_followers=true`;
const followURL = BASE_URL + `/profiles/${profileName}/follow`;
const unfollowURL = BASE_URL + `/profiles/${profileName}/unfollow`;
nameContainer.innerHTML = profileName;

const feedOption = {
    method: 'GET',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${accessToken}`,
    },
};

const followOption = {
    method: 'PUT',
    headers: {
        Authorization: `Bearer ${accessToken}`,
    },
};

profileFeedContainer.innerHTML = loading;

followBtnContainer.disabled = true;
followBtnTextContainer.innerHTML = loadingProfile;

/**
 * creates feed posts of the user/profile
 * @param {URL} fURL 
 */
async function feedProfile(fURL) {

    const apiJson = await apiRequest(fURL, feedOption);
    profileFeedContainer.innerHTML = "";
    if (apiJson['output'] == 'json') {
        const cleanContent = contentClean(apiJson['json']['posts']);

        postsContainer.innerHTML = apiJson['json']['_count']['posts'];
        followersContainer.innerHTML = apiJson['json']['_count']['followers'];
        followingContainer.innerHTML = apiJson['json']['_count']['following'];

        if (apiJson['json']['_count']['posts'] == 0) {
            setFeedback(profileFeedContainer, profileFeedContainer, "You have not posted yet", "text-center");
        }

        const isFollower = apiJson['json']['followers'].find(({ name }) => name === currentUser);
        if (isFollower) {
            followBtnTextContainer.innerHTML = 'following';
            followBtnContainer.disabled = false;
        }

        else {
            followBtnTextContainer.innerHTML = 'follow';
            followBtnContainer.disabled = false;
        }

        if (profileName === currentUser) {
            followBtnContainer.disabled = true;
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

//follow or unfollow a profile
async function followProfile() {

    const followState = followBtnTextContainer.innerHTML;

    switch (followState) {
        case 'follow':
            const followResponse = await apiRequest(followURL, followOption);

            if (followResponse['json']['name']) {
                followBtnTextContainer.innerHTML = 'following';
                followersContainer.innerHTML = parseInt(followersContainer.innerText) + 1;
            }
            break;

        case 'following':
            const unfollowResponse = await apiRequest(unfollowURL, followOption);

            if (unfollowResponse['json']['name']) {
                followBtnTextContainer.innerHTML = 'follow';
                followersContainer.innerHTML = parseInt(followersContainer.innerText) - 1;
            }
            break;
    }
}

followBtnContainer.addEventListener('click', followProfile);

feedProfile(profileURL);