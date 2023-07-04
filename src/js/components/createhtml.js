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
                                        ${like512}
                                        ${comment512}
                                        ${share512}
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
                        ${like512}
                        ${comment512}
                        ${share512}
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
                                    ${like512}
                                    ${comment512}
                                    ${share512}
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