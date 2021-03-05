const express = require('express');

const controller = require('./controller');

const routes = express.Router();

routes.get('/', controller.showPostsList)

routes.delete('/', controller.removePost)

routes.post('/', (req, res) => {
    res.send('Create')
})

module.exports = routes;