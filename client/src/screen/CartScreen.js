import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Products from "../components/Product";

function CartScreen() {
    const getCartProduct = useSelector(state => state.cartList.cartItem);
    const totalPrice =
        (getCartProduct.length === 0) ?
            null
            : (getCartProduct.length === 1) ?
                getCartProduct[0].product.price * getCartProduct[0].number
                :
                getCartProduct.reduce((x, y) => { return x.product.price * x.number + y.product.price * y.number });

    return (
        <div className="column cart">
            {
                getCartProduct.map((cartProduct, index) => {
                    return (
                        <Products
                            key={index}
                            class={"row small"}
                            id={cartProduct.product._id}
                            img={cartProduct.product.image}
                            name={cartProduct.product.name}
                            price={cartProduct.product.price}
                            number={cartProduct.number}
                            sumPrice={cartProduct.number * cartProduct.product.price}
                        />
                    )
                })
            }
            {
                totalPrice
                    ?
                    <div>
                        <p>總金額：{totalPrice}</p>
                        <button>結帳去<i className="fas fa-shopping-cart" /></button>
                    </div>
                    :
                    <div className="center">
                        <p>購物車尚無商品</p>
                        <Link to="/" style={{ "color": "green" }}>繼續購物</Link>
                    </div>
            }

        </div>
    )
}

export default CartScreen;