import React from "react";
import { useSelector } from "react-redux";

function CartScreen() {
    const getCartProduct = useSelector(state => state.cartList.cartItem);
    return (
        <div>
            {
                getCartProduct.map((x, index) => {
                    return (
                        <div key={index} className="row">
                            <h3>{x.name}</h3>
                            <p>{x.number}</p>
                        </div>
                    )
                })
            }
            <button>
                結帳去<i className="fas fa-shopping-cart" />
            </button>
        </div>
    )
}

export default CartScreen;