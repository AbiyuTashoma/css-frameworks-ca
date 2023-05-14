const postTitleContainer = document.querySelector('#post-title');
const postBodyContainer = document.querySelector('#post-body');
const postMediaContainer = document.querySelector('#post-media');
const postBtnContainer = document.querySelector('#post-btn');
const postFormContainer = document.querySelector('#createContent');
const noteTitleContainer = document.querySelector('.note-title');

// const BASE_URL = 'https://nf-api.onrender.com/api/v1/social';
const postURL = BASE_URL + '/posts';

async function postPost(event) {
    event.preventDefault();

    const postTitle = postTitleContainer.value;
    const postBody = postBodyContainer.value;
    const postMedia = postMediaContainer.value;
    
    const validTitle = validateText(postTitle, 1, 100);

    if (!validTitle) {
        setFeedback(noteTitleContainer, postTitleContainer, "Title is required", "text-danger");
    }

    else {
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
    
}

postTitleContainer.oninput = function() {
    clearFeedback(noteTitleContainer, postTitleContainer);
}

postFormContainer.addEventListener('submit', postPost);