const postsModel = require('../model/PostsModel');

class Controller{

    showPostsList(req, res){

        const sortedPosts = req.query.sortBy ? postsModel.getSortedPosts(req.query.sortBy) : postsModel.getPosts();
        res.render('../views/list.ejs', {posts: sortedPosts, sortBy: req.query.sortBy});
    }

    removePost(req, res){
        if(postsModel.deletePost(req.query.userId)){
            res.status(200).send();
        }
        res.status(500).send();
    }
}

module.exports = new Controller;