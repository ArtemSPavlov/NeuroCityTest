const express = require('express');
const https = require('https');

const PORT = 3000;
const DATA_URL = 'https://jsonplaceholder.typicode.com/posts';
const app = express();

https.get(DATA_URL, (res) => {

    res.on('data', (data) => {
        console.log('Data: ', data.toString());
    })

    res.on('close', () => {
        app.listen(PORT, () => console.log('Server start!!'));
    })

}).on('error', (e) => {

    console.error(e);
    console.log('Posts not loaded!');
    process.exit(1);

});
