import React from "react";
import { Link } from "react-router-dom";

function Products(props) {
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
                    <p>數量: {props.number}</p>
                    <p>金額: ${props.sumPrice}</p>
                </div>
            )}
        </div>
    )
};

export default Products;