const postsModel = require('../model/PostsModel');
const isValid = require('./formValidator');

class Controller{

    showPostsList(req, res){

        const sortedPosts = req.query.sortBy ? postsModel.getSortedPosts(req.query.sortBy) : postsModel.getPosts();
        res.render('list.ejs', {posts: sortedPosts, sortBy: req.query.sortBy});
    }

    removePost(req, res){
        if(postsModel.deletePost(req.query.postId)){
            res.status(200).send();
        }
        res.status(500).send();
    }

    newPostForm(req, res){
        res.render('add-post.ejs', {post: {userId: '', title: '', body: ''}, error: false});
    }

    createPost(req, res){
        req.body.title = req.body.title.trim();
        req.body.body = req.body.body.trim();

        if(isValid(req.body)){
            const newPostId = postsModel._addNewPostId();
            postsModel.addNewPost({...req.body, id: newPostId});
            res.redirect('/');
        } else {
            res.render('add-post.ejs', {post: {...req.body}, error: true});
        }
    }

    editPostForm(req, res){
        const editingPost = postsModel.findPostById(req.query.postId);
        res.render('edit-post.ejs', {post: editingPost, error: true});
    }

    editPost(req, res){
        req.body.title = req.body.title.trim();
        req.body.body = req.body.body.trim();

        if(isValid(req.body)){
            postsModel.updatePost(req.query.postId, {...req.body});
            res.status(200).send();
        } else {
            res.status(400);
            res.send();
        }
    }
}

module.exports = new Controller;