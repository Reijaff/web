const fetch = require('node-fetch');
const url = "https://www.reddit.com/search.json?q=haha";
fetch(url)
    .then(res => res.json())
    .then(body => console.log(body.data.children[0]));
