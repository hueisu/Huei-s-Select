import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_ERROR, PRODUCT_REQUEST, PRODUCT_SUCCESS, PRODUCT_ERROR } from "../constants/getProductConstant";


const productstInitialState = {
    loading: false,
    products: [],
    error: false,
};


export const getProductsReducer = (state = productstInitialState, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST: return {
            ...state,
            loading: true
        };
        case PRODUCT_LIST_SUCCESS: return {
            ...state,
            loading: false,
            products: action.payload,
        };
        case PRODUCT_LIST_ERROR: return {
            ...state,
            loading: false,
            error: action.payload
        };
        default: return state;
    }
};


const productInitialState = {
    loading: false,
    product: [],
    error: false,
};

export const getProductReducer = (state = productInitialState, action) => {
    switch (action.type) {
        case PRODUCT_REQUEST: return {
            ...state,
            loading: true
        };
        case PRODUCT_SUCCESS: return {
            ...state,
            loading: false,
            product: action.payload
        }
        case PRODUCT_ERROR: return {
            ...state,
            loading: false,
            error: action.payload
        }
        default: return state;
    }
};