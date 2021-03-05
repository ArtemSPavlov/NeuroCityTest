const express = require('express');

const controller = require('./controller');

const routes = express.Router();

routes.get('/', controller.showPostsList)

routes.delete('/', controller.removePost)

routes.get('/add-post', controller.newPostForm)

routes.post('/', controller.createPost)

module.exports = routes;