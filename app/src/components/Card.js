import React from "react";

function Card(props) {
    return (
        <div className="card">
            <div>
                <a href="product1.html"><img src={`.${props.img}`} alt="product1" /></a>
            </div>
            <div>
                <a href="product1.html">
                    <h2>{props.name}</h2>
                </a>
            </div>
            <div className="price">
                ${props.price}
            </div>
        </div>
    )
};

export default Card;