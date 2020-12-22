import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
    const getCart = useSelector(state => state.cartList);
    const cartNum = (getCart.cartItem.length === 0) ?
        false
        :
        getCart.cartItem.map(x => parseInt(x.number)).reduce((x, y) => x + y)
        ;

    return (
        <header className="row">
            <div>
                <Link to="/" className="brand">Huei's</Link>
            </div>
            <div className="nav">
                <Link to="/signup">註冊</Link>
                <Link to="/signin">登入會員</Link>
                <Link to="/cart">購物車
                {cartNum &&
                        <span className="cartNum">
                            {cartNum}
                        </span>
                    }
                </Link>
            </div>
        </header>
    )
}

export default Header;