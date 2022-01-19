let posts = [{ id: '999', title: 'BCB plans to launch   Bangla Tigers   programme during AFG series', discription: "Bangladesh Cricket Board is planning to launch the shadow National Team programme named 'Bangladesh Tiger' during the upcoming home series against Afghanistan to prepare the Test squad for the forthcoming tour of South Africa", category: 'cricket' }]
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