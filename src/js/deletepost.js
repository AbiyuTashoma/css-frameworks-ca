/**
 * deletes a post
 * @param {*} event 
 */
async function deletePost(event) {
    event.preventDefault();

    const noteDeleteContainer = document.querySelector('.show .note-delete');
    const deleteID = parseInt(document.querySelector('.show .delete').id);
    const deleteURL = postURL + `/${deleteID}`;

    const deleteOption = {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            Authorization: `Bearer ${accessToken}`,
        },
    }

    const deleteResponse = await apiRequest(deleteURL, deleteOption);
    console.log(deleteResponse);

    if (deleteResponse['output'] == 'json') {
        if (deleteResponse['json']['errors']) {
            setFeedback(noteDeleteContainer, noteDeleteContainer, deleteResponse['json']['errors'][0]['message'], "text-danger");
            setTimeout(refresh, 3000);
        }
        else {
            setFeedback(noteDeleteContainer, noteDeleteContainer, "Post deleted successfuly!", "text-success");
            setTimeout(refresh, 3000);
        }
    }
    else {
        setFeedback(noteDeleteContainer, noteDeleteContainer, "Update failed, try again!", "text-danger");
        setTimeout(refresh, 3000);
    }
}
