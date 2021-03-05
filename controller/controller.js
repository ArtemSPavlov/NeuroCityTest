const postsModel = require('../model/PostsModel');

class Controller{

    showPostsList(req, res){

        const sortedPosts = req.query.sortBy ? postsModel.getSortedPosts(req.query.sortBy) : postsModel.getPosts();
        res.render('../views/list.ejs', {posts: sortedPosts, sortBy: req.query.sortBy});
    }
}

module.exports = new Controller;