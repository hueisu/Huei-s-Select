import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAction } from "../actions/getCartActions";
import { getProductAction } from "../actions/getProductActions";


function ProductScreen(props) {
    const productID = props.match.params.id;
    const dispatch = useDispatch();
    const getproduct = useSelector(state => state.product);
    const { loading, error, product } = getproduct;
    const [number, setNumber] = useState("1");


    useEffect(() => {
        dispatch(getProductAction(productID))
    }, [dispatch, productID]);


    function handleNum(e) {
        setNumber(e.target.value)
    }

    function submitNum(p, n) {
        dispatch(addToCartAction(p, n))
    }

    return (
        loading ? (<i className="fas fa-spinner"></i>)
            :
            error ? (<div>{error.data}</div>)
                :
                <div className="row">
                    <div className="col-2">
                        <img className="large" src={`${product.image}`} alt={product.name} />
                    </div>
                    <div className="col-1">
                        <h2>{product.name}</h2>
                        <div>${product.price}</div>
                        {product.stock > 0 ? (
                            <div className="instock">剩餘數量：{product.stock}</div>
                        ) : (
                                <div className="soldout">已售完</div>
                            )}
                    </div>
                    {product.stock > 0 &&
                        <div className="col-1">
                            <label>數量：</label>
                            <select type="number" onChange={handleNum}>
                                {
                                    [...Array(product.stock).keys()].map(x => {
                                        return <option key={x + 1} value={x + 1}>{x + 1}</option>
                                    })
                                }
                            </select>
                            <button onClick={() => submitNum(product.name, number)}>加入購物車</button>
                        </div>
                    }
                </div>
    )
}

export default ProductScreen;