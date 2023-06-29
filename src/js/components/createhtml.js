/**
 * creates html object from json objects
 * @param {object} jasonArray 
 * @returns html object
 */
function createHtml(jasonArray, postAuthor, cnt, btnState = 'disabled') {
    let html = "";

    html = `<div class="container my-5 col-12 col-sm-8 col-xl-6">
                <div class="d-flex align-items-center gap-2">
                    <a href="profile.html?profile_name=${postAuthor}" class="text-decoration-none text-dark">
                        <img src="src/image/user.png" class="rounded-circle post-userimage me-2" alt="profile picture">
                        <span>${postAuthor}</span>
                    </a>
                </div>
                <a class="btn text-start p-0 my-2" data-bs-toggle="modal" data-bs-target="#modal${cnt}">
                    <div class="my-2">
                        <p class="fw-semibold mb-1">${jasonArray['title']}</p>
                        <p>${jasonArray['body']}</p>
                        <img src="${jasonArray['media']}" class="col-12">
                    </div>
                </a>
                <div class="modal fade" id="modal${cnt}" tabindex="-1" aria-labelledby="exmodal" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn-close btn-sm" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                            <div class="modal-body p-3">
                                <p class="fw-semibold mb-1">${jasonArray['title']}</p>
                                <p>${jasonArray['body']}</p>
                                <img src="${jasonArray['media']}" class="col-12">
                                <div class="d-flex align-items-center justify-content-between mt-2">
                                    <div>
                                        <img src="src/image/icons/heart.png" class="post-icon" alt="like">
                                        <img src="src/image/icons/comment-dots.png" class="post-icon" alt="comment">
                                        <img src="src/image/icons/share.png" class="post-icon" alt="share">
                                    </div>
                                    <div class="dropdown">
                                        <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            &#8226;&#8226;&#8226;
                                        </button>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li><button class="dropdown-item" data-bs-toggle="modal" data-bs-target="#modal-edit${cnt}" ${btnState}>Edit</button></li>
                                            <li><button class="dropdown-item" data-bs-toggle="modal" data-bs-target="#modal-delete${cnt}" ${btnState}>Delete</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                    <div>
                        <svg viewBox="0 0 1024 1024" class="svg-fill" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="M725.333333 192c-89.6 0-168.533333 44.8-213.333333 115.2C467.2 236.8 388.266667 192 298.666667 192 157.866667 192 42.666667 307.2 42.666667 448c0 253.866667 469.333333 512 469.333333 512s469.333333-256 469.333333-512c0-140.8-115.2-256-256-256z"></path>
                            </g>
                        </svg>
                        <svg viewBox="0 0 24 24" class="svg-fill" xmlns="http://www.w3.org/2000/svg">
                            <g><defs><style>.cls-1{stroke:rgb(1, 84, 158);stroke-miterlimit:10;stroke-width:1.91px;}</style></defs><path class="cls-1" d="M1.5,5.3v9.54a3.82,3.82,0,0,0,3.82,3.82H7.23v2.86L13,18.66h5.73a3.82,3.82,0,0,0,3.82-3.82V5.3a3.82,3.82,0,0,0-3.82-3.82H5.32A3.82,3.82,0,0,0,1.5,5.3Z"></path><line class="cls-1" x1="15.82" y1="10.07" x2="17.73" y2="10.07"></line><line class="cls-1" x1="11.05" y1="10.07" x2="12.95" y2="10.07"></line><line class="cls-1" x1="6.27" y1="10.07" x2="8.18" y2="10.07"></line></g>
                        </svg>
                        <svg viewBox="0 0 1024 1024" class="svg-fill" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="M725.333333 192c-89.6 0-168.533333 44.8-213.333333 115.2C467.2 236.8 388.266667 192 298.666667 192 157.866667 192 42.666667 307.2 42.666667 448c0 253.866667 469.333333 512 469.333333 512s469.333333-256 469.333333-512c0-140.8-115.2-256-256-256z"></path>
                            </g>
                        </svg>
                    </div>
                    <div class="dropdown">
                        <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            &#8226;&#8226;&#8226;
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><button class="dropdown-item" data-bs-toggle="modal" data-bs-target="#modal-edit${cnt}" ${btnState}>Edit</button></li>
                            <li><button class="dropdown-item" data-bs-toggle="modal" data-bs-target="#modal-delete${cnt}" ${btnState}>Delete</button></li>
                        </ul>
                    </div>
                </div>
                <div class="modal fade" id="modal-edit${cnt}" tabindex="-1" aria-labelledby="editmodal" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-body p-3">
                                <div class="note-update"></div>             
                                <form id="update" name="${jasonArray['id']}">
                                    <div class="input-group my-2">
                                        <input type="text" id="edit-title" class="form-control" aria-label="edit title" value='${jasonArray['title']}'>
                                    </div>
                                    <div class="note-edittitle mb-2"></div>             
                                    <div class="input-group my-2">
                                        <textarea id="edit-body" class="form-control" aria-label="edit text content">${jasonArray['body']}</textarea>
                                    </div>
                                    <div type="url" class="input-group my-2">
                                        <input id="edit-media" class="form-control" aria-label="edit media url" value='${jasonArray['media']}'>
                                    </div>
                                    <div class="d-flex justify-content-center gap-2 mt-2">
                                        <input type="submit" id="update-btn" class="custom-btn btn-primary" value="Update post">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">Close</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="modal-delete${cnt}" tabindex="-1" aria-labelledby="deletemodal" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Are you sure you want to delete this post?</h5>
                            <button type="button" class="btn-close btn-sm" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                            <div class="modal-body p-3">
                                <div class="note-delete"></div>             

                                <p class="fw-semibold mb-1 delete" id="${jasonArray['id']}">${jasonArray['title']}</p>
                                <p>${jasonArray['body']}</p>
                                <img src="${jasonArray['media']}" class="col-12">
                                <div class="d-flex align-items-center mt-2">
                                    <img src="src/image/icons/heart.png" class="post-icon" alt="like">
                                    <img src="src/image/icons/comment-dots.png" class="post-icon" alt="comment">
                                    <img src="src/image/icons/share.png" class="post-icon" alt="share">
                                </div>
                                <div class="d-flex justify-content-center gap-2 mt-2">
                                    <input type="submit" id="delete-btn" class="custom-btn btn-primary" value="Delete post">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;

    return html;
}