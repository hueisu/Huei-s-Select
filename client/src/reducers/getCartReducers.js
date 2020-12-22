import { ADD_TO_CART, DELETE_CART } from "../constants/getCartConstants";
import { loadState } from "../localStorage";

const initialState = { ...loadState() };

export const getCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartItem: [
                    ...state.cartItem,
                    {
                        name: action.product,
                        number: action.number
                    }
                ]
            }
        case DELETE_CART: return {
            ...state,
        }
        default: return state
    }
};


