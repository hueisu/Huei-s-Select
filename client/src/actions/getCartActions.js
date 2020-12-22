import { ADD_TO_CART, DELETE_CART } from "../constants/getCartConstants";

export const addToCartAction = (selectedProduct, selectedNumber) => {
    return {
        type: ADD_TO_CART,
        product: selectedProduct,
        number: selectedNumber
    }
};

export const deleteCartAction = () => {
    return {
        type: DELETE_CART
    }
};