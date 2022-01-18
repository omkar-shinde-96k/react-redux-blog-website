let posts = []
let id = 0;

const PostReducer = (state = [], action) => {
    switch (action.type) {
        case "ADDPOST": {
            console.log("add post");
            let add = { id, ...action.payload }
            posts.push(add);
            console.log("one data added", posts);
            id++
            return posts
        }

        default: return posts;
    }
}

export default PostReducer;