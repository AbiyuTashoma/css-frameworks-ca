
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

  console.log(updateURL);
  // console.log(noteUpdateTitle);
  console.log(updatedTitle);
  console.log(updatedBody);
  console.log(updatedMedia);

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

    console.log(updateResponse);
    if (updateResponse['output'] == 'json') {
      if (updateResponse['json']['title']) {
        // updateFormContainer.reset();
        // updateFormContainer.className = "collapse";
        setFeedback(noteUpdateContainer, noteUpdateContainer, "Update successful!", "text-success");
        setTimeout(clearFeedback, 5000, noteUpdateContainer, noteUpdateContainer);
        const modalShow = document.querySelector('.modal');
        console.log(modalShow);
        modalShow.classList.remove('show');
        // feed();
      }
      else {
        setFeedback(noteUpdateContainer, noteUpdateContainer, updateResponse['json']['errors'][0]['message'], "text-danger");
      }
    }
    else {
      setFeedback(noteUpdateContainer, noteUpdateContainer, "Update failed, try again!", "text-danger");
    }
  }
}
