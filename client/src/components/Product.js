import React from "react";
import { Link } from "react-router-dom";

function Products(props) {
    return (
        <div className="card">
            <div>
                <Link to={`/product/${props.id}`}><img src={`.${props.img}`} alt={`product${props.id}`} /></Link>
            </div>
            <div>
                <Link to={`/product/${props.id}`}>
                    <h2>{props.name}</h2>
                </Link>
            </div>
            <div className="price">
                ${props.price}
            </div>
        </div>
    )
};

export default Products;