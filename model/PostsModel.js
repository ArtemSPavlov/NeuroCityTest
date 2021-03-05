class PostsModel{
    _posts = [];

    setPosts(posts){
        this._posts = posts;
    }

    getPosts(){
        return this._posts;
    }

    getSortedPosts(column){
        const sortableColumns = ['id', 'title', 'body'];

        if(!sortableColumns.includes(column)){
            return [...this._posts];
        }

        return [...this._posts].sort((a, b) => {
            if (a[column] > b[column]) {
              return 1;
            }
            if (a[column] < b[column]) {
              return -1;
            }
            return 0;
          })
    }

    findPostById(id){
        return this._posts.find(el => el.id === id)
    }

    deletePost(id){
        this._posts = this._posts.filter(el => el.id !== +id);
        return true;
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