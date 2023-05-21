/**
 * creates html object from json objects
 * @param {object} jasonArray 
 * @returns html object
 */
function createHtml (jasonArray) {
    let html = "";

    for (let i = 0; i < jasonArray.length; i++) {
    
        html += `<div class="container my-5 col-12 col-sm-8 col-xl-6">
            <div class="d-flex align-items-center gap-2">
                <a href="profile.html" class="text-decoration-none text-dark">
                    <img src="src/image/user.png" class="rounded-circle post-userimage me-2" alt="profile picture">
                    <span>Profile Name</span>
                </a>
            </div>
            <a class="btn p-0 my-2" data-bs-toggle="modal" data-bs-target="#modal${i}">
                <div class="my-2">
                    <p class="flex-fill">${jasonArray[i]['title']}</p>
                    <p class="flex-fill">${jasonArray[i]['body']}</p>
                    <img src="${jasonArray[i]['media']}" class="col-12">
                </div>
            </a>
            <div class="modal" id="modal${i}" tabindex="-1" aria-labelledby="exmodal" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body p-3">
                            <p class="flex-fill">${jasonArray[i]['title']}</p>
                            <p class="flex-fill">${jasonArray[i]['body']}</p>
                            <img src="${jasonArray[i]['media']}" class="col-12">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <img src="src/image/icons/comment-dots.png" class="post-icon" alt="comment">
                <img src="src/image/icons/share.png" class="post-icon" alt="share">
                <img src="src/image/icons/heart.png" class="post-icon" alt="like">
            </div>
        </div>`;
    }

    return html;
}