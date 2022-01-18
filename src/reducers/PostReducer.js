let posts = []
let id = 0;

const PostReducer = (state = [], action) => {
    switch (action.type) {
        case "ADDPOST": {
            console.log("add post");
            let add = { id, ...action.payload }
            posts.push(add);
            console.log("one data added", posts);
            id++;
            return posts
        }
        case "DELETE": {
            console.log("delete reducer", action.payload);
            posts = posts.filter((curr) => curr.id !== action.payload) 
        }

        default: return posts;
    }
}

export default PostReducer;