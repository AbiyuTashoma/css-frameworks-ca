const BASE_URL = 'https://nf-api.onrender.com/api/v1/social';
const postURL = BASE_URL + '/posts';
const feedURL = BASE_URL + '/posts?' + '_author=true';
const feedLimit = feedURL + 'limit=20';
const feedTag = feedURL + '_tag=SoMeABT';
const loginURL = BASE_URL + '/auth/login';
const registerURL = BASE_URL + '/auth/register';
