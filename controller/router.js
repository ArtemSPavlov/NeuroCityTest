const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('Get')
})

routes.post('/', (req, res) => {
    res.send('Create')
})

module.exports = routes;