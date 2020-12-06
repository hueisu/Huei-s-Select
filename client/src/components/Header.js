import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="row">
            <div>
                <Link to="/" className="brand">Huei's</Link>
            </div>
            <div className="nav">
                <Link to="/signup">註冊</Link>
                <Link to="/signin">登入會員</Link>
                <Link to="/cart">購物車</Link>
            </div>
        </header>
    )
}

export default Header;