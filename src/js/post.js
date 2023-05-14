const postTitleContainer = document.querySelector('#post-title');
const postBodyContainer = document.querySelector('#post-body');
const postMediaContainer = document.querySelector('#post-media');
const postBtnContainer = document.querySelector('#post-btn');
const postFormContainer = document.querySelector('#createContent');

// const BASE_URL = 'https://nf-api.onrender.com/api/v1/social';
const postURL = BASE_URL + '/posts';

// const postTitle = postTitleContainer.value;
// const postBody = postBodyContainer.value;
// const postMedia = postMediaContainer.value;

// const postData = {
//     "title": `${postTitle}`,
//     "body": `${postBody}`,
//     "tags": ['SoMeABT'],
//     "media": `${postMedia}`
// };

// const postOption = {
//     method: 'POST',
//     body: JSON.stringify(postData),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//         Authorization: `Bearer ${accessToken}`,
//     },
// }

async function postPost(event) {
    event.preventDefault();

    const postTitle = postTitleContainer.value;
    const postBody = postBodyContainer.value;
    const postMedia = postMediaContainer.value;
    
    const postData = {
        "title": `${postTitle}`,
        "body": `${postBody}`,
        "tags": ['SoMeABT'],
        "media": `${postMedia}`
    };
    
    const postOption = {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            Authorization: `Bearer ${accessToken}`,
        },
    }

    try {
        const response = await fetch (postURL, postOption);
        const json = await response.json();
        console.log(json);
    }

    catch(error) {
        console.log(error);
    }
    
}

postFormContainer.addEventListener('submit', postPost);