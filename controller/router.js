const express = require('express');

const controller = require('./controller');

const routes = express.Router();

routes.get('/', controller.showPostsList);

routes.delete('/', controller.removePost);

routes.post('/', controller.createPost);

routes.put('/', controller.editPost);

routes.get('/add-post', controller.newPostForm);

routes.get('/edit-post', controller.editPostForm);

module.exports = routes;