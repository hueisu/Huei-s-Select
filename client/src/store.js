import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import { getProductReducer, getProductsReducer } from "./reducers/getProductsReducer";
import { getCartReducer } from "./reducers/getCartReducers";
import { saveState } from "./localStorage";


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
    productList: getProductsReducer,
    product: getProductReducer,
    cartList: getCartReducer
})

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunk))
);

store.subscribe(() => saveState(store.getState().cartList))



export default store;