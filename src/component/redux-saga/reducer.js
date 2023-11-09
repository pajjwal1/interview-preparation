export const cartData = (data = [], action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            console.warn("ADD_TO_CART condition ", action)
            return [action.data, ...data]
        case "REMOVE_TO_CART":
            console.warn("REMOVE_TO_CART condition ", action.data)
            const originalData = data.filter((item) => item.id !== action.data)
            return [...originalData];
        case "CLEAR_CART":
            data = [];
            return [...data];
        default:
            return data
    }
} 