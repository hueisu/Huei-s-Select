import React from "react";

function Header() {
    return (
        <header className="row">
            <div>
                <a href="index.html" className="brand">Huei's</a>
            </div>
            <div className="nav">
                <a href="signup.html">註冊</a>
                <a href="signin.html">登入會員</a>
                <a href="cart.html">購物車</a>
            </div>
        </header>
    )
}

export default Header;