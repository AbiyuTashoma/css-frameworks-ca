/**
 * creates html object from json array
 * @param {Array} jasonArray 
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
            <div class="my-2">
                <p class="flex-fill">${jasonArray[i]['title']}</p>
                <p class="flex-fill">${jasonArray[i]['body']}</p>
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