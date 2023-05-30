// const updateFormContainer = document.querySelector("#update");
// const updateBtnContainer = document.querySelector("#update-btn");
// const editBtnContainer = document.querySelector("#edit-btn");

function updatePost (event) {
    event.preventDefault();

    const updatedTitle = document.querySelector(".show #edit-title").value;
    const updatedBody = document.querySelector(".show #edit-body").value;
    const updatedMedia = document.querySelector(".show #edit-media").value;

    console.log(updatedTitle);
    console.log(updatedBody);
    console.log(updatedMedia);

}

window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    // const editBtnContainer = document.querySelector("#edit-btn");
    // console.log(editBtnContainer);
  });

// updateFormContainer.addEventListener('submit', updatePost);
// editBtnContainer.addEventListener('click', updatePost);