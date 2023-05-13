const BASE_URL = 'https://nf-api.onrender.com/api/v1/social';
const feedURL = BASE_URL + '/posts?';
const feedLimit = feedURL + 'limit=20';
//GET
const accessToken = localStorage.getItem('accessToken');
console.log(accessToken);

const feedOption = {
    method: 'GET',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${accessToken}`,
    },
};

async function getFeed() {
    try {
        const response = await fetch(feedLimit, feedOption);
        const json = await response.json();

        console.log(json);
    }

    catch (error) {
        console.log(error);
    }
}

getFeed();