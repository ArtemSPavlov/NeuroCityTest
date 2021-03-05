const postsModel = require('../model/PostsModel');
const isValid = require('./formValidator');

class Controller{

    showPostsList(req, res){

        const sortedPosts = req.query.sortBy ? postsModel.getSortedPosts(req.query.sortBy) : postsModel.getPosts();
        res.render('list.ejs', {posts: sortedPosts, sortBy: req.query.sortBy});
    }

    removePost(req, res){
        if(postsModel.deletePost(req.query.userId)){
            res.status(200).send();
        }
        res.status(500).send();
    }

    newPostForm(req, res){
        res.render('add-post.ejs', {post: {userId: '', title: '', body: ''}, error: false});
    }

    createPost(req, res){
        if(isValid(req.body)){
            const newPostId = postsModel._addNewPostId();
            postsModel.addNewPost({...req.body, id: newPostId});
            res.redirect('/');
        } else {
            res.render('add-post.ejs', {post: {...req.body}, error: true});
        }
    }
}

module.exports = new Controller;