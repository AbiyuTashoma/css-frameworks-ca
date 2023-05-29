const updateFormContainer = document.querySelector("#update");
const updateBtnContainer = document.querySelector("#edit-btn");

function updatePost (event) {
    event.preventDefault();

    const updatedTitle = document.querySelector(".show #edit-title").value;
    const updatedBody = document.querySelector(".show #edit-body").value;
    const updatedMedia = document.querySelector(".show #edit-media").value;

    console.log(updatedTitle);
    console.log(updatedBody);
    console.log(updatedMedia);

}

// updateFormContainer.addEventListener('submit', updatePost);
updateBtnContainer.addEventListener('click', updatePost);