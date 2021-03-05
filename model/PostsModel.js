class PostsModel{
    _posts = [];

    setPosts(posts){
        this._posts = posts;
    }

    getPosts(){
        return this._posts;
    }

    addNewPost(post){
        this._posts.push(post);
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
        // console.log('Post ID: ', id);
        return this._posts.find(el => el.id === +id)
    }

    deletePost(id){
        this._posts = this._posts.filter(el => el.id !== +id);
        return true;
    }

    updatePost(id, post){

        this._posts = this._posts.map(el => {
            if(el.id === +id){
                return {...el, ...post};
            }
            return el;
        })
    }

    _addNewPostId(){
        const postsSortedById = this._posts.sort((a, b) => b.id - a.id);
        return postsSortedById[0].id + 1;
    }
}

module.exports = new PostsModel()