//HTTP request methods
url = 'https://jsonplaceholder.typicode.com/posts';

//GET
fetch(url + '/1')
.then((response) => response.json())
.then((json) => console.log(json));

//POST
fetch(url, {
    method: 'POST',
    body: JSON.stringify({
        'title': 'foo',
        'body': 'bar',
        'userId': 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    },
})
.then((response) => response.json())
.then((json) => console.log(json));