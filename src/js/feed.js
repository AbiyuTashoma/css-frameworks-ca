const feedContainer = document.querySelector('.feed-content');
const sortContainer = document.querySelector('#orderby');
const searchContainer = document.querySelector('#search');
const searchForm = document.querySelector('.search-form');

const modalCTA = {};

const accessToken = localStorage.getItem('accessToken');

const feedOption = {
    method: 'GET',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${accessToken}`,
    },
};

async function feed(fURL = feedURL) {
    const apiJson = await apiRequest(fURL, feedOption);
    if (apiJson['output'] == 'json') {
        console.log('async', apiJson['json']);

        const cleanContent = contentClean(apiJson['json']);
        for (let i = 0; i < cleanContent.length; i++) {
            feedContainer.innerHTML += createHtml(cleanContent[i], cleanContent[i]['author']['name'], i);
        }

        modalCTA['update'] = document.querySelectorAll("#update");
        modalCTA['delete'] = document.querySelectorAll("#delete-btn");

        for (let i = 0; i < modalCTA['update'].length; i++) {
            modalCTA['update'][i].addEventListener('submit', updatePost);
        }

        for (let i = 0; i < modalCTA['delete'].length; i++) {
            modalCTA['delete'][i].addEventListener('click', deletePost);
        }
        // console.log(modalCTA['update']);
        // console.log(modalCTA['delete']);
    }

    else {
        console.log('error', apiJson['error']);
    }
}

sortContainer.onchange = function () {
    console.log(sortContainer.value);
    const sortURL = feedURL + `&sort=${sortContainer.value}`;
    feed(sortURL);
}

async function search() {
    event.preventDefault();
    const searchText = searchContainer.value.toLowerCase();
    console.log(searchText);

    const apiResponse = await apiRequest(feedURL, feedOption);
    const cleanJson = contentClean(apiResponse['json']);
    const searchResult = cleanJson.filter(({ title, body, media }) =>
        title.toLowerCase().includes(searchText) || body.toLowerCase().includes(searchText) || media.toLowerCase().includes(searchText)
    );
    console.log(searchResult);
    feedContainer.innerHTML = `<div class="container my-3 col-12 col-sm-8 col-xl-6">${searchResult.length} results found</div>`
    feedContainer.innerHTML += createHtml(searchResult);
}

//Load feed
feed();

//call search function
searchForm.addEventListener('submit', search);
