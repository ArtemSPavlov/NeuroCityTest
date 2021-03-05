const express = require('express');
const bp  = require('body-parser');
const https = require('https');

const postsModel = require('./model/PostsModel');
const routes = require('./controller/router');

const PORT = 3000;
const DATA_URL = 'https://jsonplaceholder.typicode.com/posts';
const app = express();

app.set('view engine', 'ejs');
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use(express.static('static'));
app.use(routes);
app.use(express.json())

https.get(DATA_URL, (res) => {

    let posts = '';

    res.setEncoding('utf8');

    res.on('data', (chunk) => {
        posts += chunk;
    })

    res.on('end', () => {
        postsModel.setPosts(JSON.parse(posts));
        app.listen(PORT, () => console.log('Server start!!'));
    })

}).on('error', (err) => {

    console.error(err);
    console.log('Posts not loaded!');
    process.exit(1);

});
