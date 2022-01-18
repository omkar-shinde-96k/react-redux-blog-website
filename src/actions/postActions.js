export const addPost = (payload) => {
    console.log("addpostt", payload);
    return {
        type: 'ADDPOST',
        payload: payload
    }
}

export const deleteTodo = (payload) => {
    return {
        type: 'DELETE',
        payload: payload
    }
}

export const iscomplete = (payload) => {
    return {
        type: 'ISCOMPLETE',
        payload: payload
    }
}

export const updateTodo = (payload) => {
    return {
        type: 'UPDATETODO',
        payload: payload
    }
}


