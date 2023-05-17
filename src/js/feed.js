const BASE_URL = 'https://nf-api.onrender.com/api/v1/social';
const feedURL = BASE_URL + '/posts';
const feedLimit = feedURL + '?limit=20';
const feedTag = feedURL + '?_tag=SoMeABT';

const feedContainer = document.querySelector('.feed-content');

//GET
const accessToken = localStorage.getItem('accessToken');
// console.log(accessToken);

const feedOption = {
    method: 'GET',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${accessToken}`,
    },
};

async function result () {
    const apiJson = await apiRequest(feedTag, feedOption);
    feedContainer.innerHTML = createHtml (apiJson['json']);
    console.log('async', apiJson['json']);
}

result();
