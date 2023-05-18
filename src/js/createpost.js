const postTitleContainer = document.querySelector('#post-title');
const postBodyContainer = document.querySelector('#post-body');
const postMediaContainer = document.querySelector('#post-media');
const postBtnContainer = document.querySelector('#post-btn');
const postFormContainer = document.querySelector('#createContent');
const noteTitleContainer = document.querySelector('.note-title');

const notePostContainer = document.querySelector(".note-post");

// const BASE_URL = 'https://nf-api.onrender.com/api/v1/social';
const postURL = BASE_URL + '/posts';

/**
 * creates a content post from the form fields
 * @param {event} event 
 */
async function createPost(event) {
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

        const postResponse = await apiRequest (postURL, postOption);

        if (postResponse['json']['title']) {
            postFormContainer.reset();
            postFormContainer.className = "collapse";
            setFeedback(notePostContainer, notePostContainer, "Post successful!", "text-success");
            setTimeout(clearFeedback, 5000, notePostContainer, notePostContainer);
            feed();
        }
        else {
            setFeedback(notePostContainer, notePostContainer, "Posting failed, try again!", "text-danger");
        }
    }
}

postTitleContainer.oninput = function() {
    clearFeedback(noteTitleContainer, postTitleContainer);
}

postFormContainer.addEventListener('submit', createPost);