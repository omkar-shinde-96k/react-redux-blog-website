export const addPost = (payload) => {
    console.log("addpostt", payload);
    return {
        type: 'ADDPOST',
        payload: payload
    }
}

export const deletePost = (payload) => {
    console.log("delete", payload);
    return {
        type: 'DELETE',
        payload: payload
    }
}

