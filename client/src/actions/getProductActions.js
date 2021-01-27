import Axios from "axios";
import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_ERROR } from "../constants/getProductConstant";
import { PRODUCT_REQUEST, PRODUCT_SUCCESS, PRODUCT_ERROR } from "../constants/getProductConstant";

export const getProductsAction = () =>
    async (dispatch) => {
        dispatch({
            type: PRODUCT_LIST_REQUEST
        });
        try {
            const { data } = await Axios.get("https://hueis-data.herokuapp.com/api/products")
            dispatch({
                type: PRODUCT_LIST_SUCCESS,
                payload: data
            })
        }
        catch (error) {
            dispatch({
                type: PRODUCT_LIST_ERROR,
                payload: error.message
            })
        }
    };



export const getProductAction = (productID) =>
    async (dispatch) => {
        dispatch({
            type: PRODUCT_REQUEST
        });
        try {
            const { data } = await Axios.get(`https://hueis-data.herokuapp.com/api/products/${productID}`);
            dispatch({
                type: PRODUCT_SUCCESS,
                payload: data
            })
        }
        catch (error) {
            dispatch({
                type: PRODUCT_ERROR,
                payload: error.response
            })
        }
    }

