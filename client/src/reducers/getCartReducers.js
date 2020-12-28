import { ADD_ITEM_NUM, ADD_TO_CART, REDUCE_ITEM_NUM } from "../constants/getCartConstants";
import { loadState } from "../localStorage";

const initialState = { ...loadState() };

export const getCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const itemID = action.product._id;
            const existItem = state.cartItem.find((x) => x.product._id === itemID);
            if (existItem) {
                return {
                    ...state,
                    cartItem: state.cartItem.map((x) =>
                        x.product._id === existItem.product._id ?
                            { product: action.product, number: Number(x.number) + Number(action.number) } : x
                    )
                }
            }
            else {
                return {
                    ...state,
                    cartItem: [
                        ...state.cartItem,
                        {
                            product: action.product,
                            number: action.number
                        }
                    ]
                }
            }
        case ADD_ITEM_NUM:
            const addItemID = action.productID;
            const addExistItem = state.cartItem.find((x) => x.product._id === addItemID);
            if (addExistItem) {
                return {
                    ...state,
                    cartItem: state.cartItem.map((x) =>
                        x.product._id === addExistItem.product._id ?
                            { product: addExistItem.product, number: Number(x.number) + action.number } : x
                    )
                }
            }
            else {
                return state;
            }
        case REDUCE_ITEM_NUM:
            const reduceItemID = action.productID;
            const reduceExistItem = state.cartItem.find((x) => x.product._id === reduceItemID);
            if (reduceExistItem) {
                return (
                    reduceExistItem.number === 1 ?
                        {
                            ...state,
                            cartItem: state.cartItem.filter((x) =>
                                x.product._id !== reduceExistItem.product._id
                            )
                        }
                        :
                        {
                            ...state,
                            cartItem: state.cartItem.map((x) =>
                                x.product._id === reduceExistItem.product._id ?
                                    { product: reduceExistItem.product, number: Number(x.number) - action.number } : x
                            )
                        }
                )
            }
            else {
                return state;
            }
        default: return state
    }
};


