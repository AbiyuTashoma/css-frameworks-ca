
async function updatePost(event) {
    event.preventDefault();

    const updatedTitleContainer = document.querySelector(".show #edit-title");
    const updatedBodyContainer = document.querySelector(".show #edit-body");
    const updatedMediaContainer = document.querySelector(".show #edit-media");

    const updatedTitle = updatedTitleContainer.value;
    const updatedBody = updatedBodyContainer.value;
    const updatedMedia = updatedMediaContainer.value;

    const noteUpdateContainer = document.querySelector('.show .note-update');
    const noteUpdateTitle = document.querySelector('.show .note-edittitle');
    const postID = parseInt(document.querySelector('.show #update').name);
    const updateURL = postURL + `/${postID}`;

    updatedTitleContainer.oninput = function () {
        clearFeedback(noteUpdateTitle, updatedTitleContainer);
    }

    const validTitle = validateText(updatedTitle, 1, 100);

    if (!validTitle) {
        setFeedback(noteUpdateTitle, updatedTitleContainer, "Title is required", "text-danger");
    }

    else {
        const updateData = {
            "title": `${updatedTitle}`,
            "body": `${updatedBody}`,
            "tags": ['SoMeABT'],
            "media": `${updatedMedia}`
        };

        const updateOption = {
            method: 'PUT',
            body: JSON.stringify(updateData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                Authorization: `Bearer ${accessToken}`,
            },
        }

        const updateResponse = await apiRequest(updateURL, updateOption);

        // console.log(updateResponse);
        if (updateResponse['output'] == 'json') {
            if (updateResponse['json']['title']) {
                setFeedback(noteUpdateContainer, noteUpdateContainer, "Update successful!", "text-success");
                setTimeout(refresh, 3000);
            }
            else {
                setFeedback(noteUpdateContainer, noteUpdateContainer, updateResponse['json']['errors'][0]['message'], "text-danger");
                setTimeout(refresh, 3000);
            }
        }
        else {
            setFeedback(noteUpdateContainer, noteUpdateContainer, "Update failed, try again!", "text-danger");
            setTimeout(refresh, 3000);
        }
    }
}
