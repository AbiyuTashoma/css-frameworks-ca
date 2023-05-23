const BASE_URL = 'https://nf-api.onrender.com/api/v1/social';
const feedURL = BASE_URL + '/posts?';
const feedLimit = feedURL + 'limit=20';
const feedTag = feedURL + '_tag=SoMeABT';

const feedContainer = document.querySelector('.feed-content');
const sortContainer = document.querySelector('#orderby');
const searchContainer = document.querySelector('#search');
const searchForm = document.querySelector('.search-form');

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
        feedContainer.innerHTML = createHtml (apiJson['json']);
        console.log('async', apiJson['json']);
    }

    else {
        console.log('error', apiJson['error']);
    }
}

feed();

sortContainer.onchange = function() {
    console.log(sortContainer.value);
    const sortURL = feedURL + `&sort=${sortContainer.value}`;
    feed(sortURL);
}

function search() {
    event.preventDefault();
    console.log(searchContainer.value);
    feed();
}

searchForm.addEventListener('submit', search);