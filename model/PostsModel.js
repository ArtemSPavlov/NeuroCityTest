class PostsModel{
    _posts = [];

    setPosts(posts){
        this._posts = posts;
    }

    getPosts(){
        return this._posts;
    }

    findPostById(id){
        return this._posts.find(el => el.id === id)
    }

    deletePost(id){
        this._posts.filter(el => el.id !== id)
    }

    updatePost(id, post){
        this._posts = this._posts.forEach(el => {
            if(el.id === id){
                return post
            }
        })
    }
}

module.exports = new PostsModel()