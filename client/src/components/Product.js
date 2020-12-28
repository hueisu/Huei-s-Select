import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addItemNumAction, reduceItemNumAction } from "../actions/getCartActions";

function Products(props) {
    const dispatch = useDispatch();
    const product = useSelector(state => state.cartList).cartItem;

    //購物車畫面操作
    function addItemNum(productID) {
        const selectedItem = product.find(x => x.product._id === productID);
        if (selectedItem.product.stock > selectedItem.number) {
            dispatch(addItemNumAction(props.id));
        }
        else {
            alert(selectedItem.product.name + "庫存不足")
        }
    }

    function reduceItemNum(productID) {
        const selectedItem = product.find(x => x.product._id === productID);
        if (selectedItem.number > 0) {
            dispatch(reduceItemNumAction(props.id));
        }
    }
    return (
        <div className={"card" + (props.class ? " " + props.class : "")}>
            <div>
                <Link to={`/product/${props.id}`}><img src={`${props.img}`} alt={`product${props.id}`} /></Link>
            </div>
            <div>
                <Link to={`/product/${props.id}`}>
                    <h2>{props.name}</h2>
                </Link>
            </div>
            <div className="price">
                ${props.price}
            </div>
            {props.number && (
                <div>
                    <div className="row">
                        <button onClick={() => reduceItemNum(props.id)}>-</button>
                        <p>數量: {props.number}</p>
                        <button onClick={() => addItemNum(props.id)}>+</button>
                    </div>
                    <p>金額: ${props.sumPrice}</p>
                </div>
            )}
        </div>
    )
};

export default Products;