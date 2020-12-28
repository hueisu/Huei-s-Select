import { ADD_ITEM_NUM, ADD_TO_CART, REDUCE_ITEM_NUM } from "../constants/getCartConstants";

export const addToCartAction = (selectedProduct, selectedNumber) => {
    return {
        type: ADD_TO_CART,
        product: selectedProduct,
        number: selectedNumber
    }
};

export const addItemNumAction = (selectedProductID) => {
    return {
        type: ADD_ITEM_NUM,
        productID: selectedProductID,
        number: 1
    }
};

export const reduceItemNumAction = (selectedProductID) => {
    return {
        type: REDUCE_ITEM_NUM,
        productID: selectedProductID,
        number: 1
    }
}