let category = [];
let id = 0;

const CategoryData = (state = [], action) => {
    console.log("action", action.type);
    switch (action.type) {
        case "ADDCATEGORY": {
            console.log("add category", action.payload);
            let add = { id, ...action.payload };
            category.push(add);
            console.log("One category added", category);
            id++;
            return category
        }
        default: return category
    }
}

export default CategoryData;