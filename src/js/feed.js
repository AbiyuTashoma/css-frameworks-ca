const BASE_URL = 'https://nf-api.onrender.com/api/v1/social';
const feedURL = BASE_URL + '/posts';
const feedLimit = feedURL + '?limit=20';
const feedTag = feedURL + '?_tag=SoMeABT';

const feedContainer = document.querySelector('.feed-content');

const accessToken = localStorage.getItem('accessToken');

const feedOption = {
    method: 'GET',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${accessToken}`,
    },
};

async function feed() {
    const apiJson = await apiRequest(feedTag, feedOption);
    if (apiJson['json']) {
        feedContainer.innerHTML = createHtml (apiJson['json']);
        console.log('async', apiJson['json']);
    }

    if (apiJson['error']) {
        console.log('error', apiJson['error']);
    }
}

feed();
