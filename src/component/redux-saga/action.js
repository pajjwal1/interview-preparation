export const addtoCart = (data) =>{
    return {
        type: "ADD_TO_CART",
        data
    }
}
export const removetoCart = (data) =>{
    return {
        type: "REMOVE_TO_CART",
        data
    }
}
export const clearCart = () =>{
    return {
        type: "CLEAR_CART"
    }
}