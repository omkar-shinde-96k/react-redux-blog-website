export const addCategory = (payload) => {

    console.log("ADDCATEGORY action run", payload);
    return {
        type: 'ADDCATEGORY',
        payload: payload
    }
}