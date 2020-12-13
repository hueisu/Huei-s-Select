import React, { useState } from "react";
import data from "../data";

function ProductScreen(props) {
    const product = data.products.find((x) => { return (x._id === props.match.params.id) });

    const productStockArray = [];
    for (let i = 1; i < product.stock + 1; i++) {
        productStockArray.push(i)
    }


    if (product === undefined) {
        return <div>無此商品</div>;
    }
    else {
        return (
            <div className="row">
                <div className="col-2">
                    <img className="large" src={`..${product.image}`} alt={product.name} />
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
                {product.stock > 0 && <div className="col-1">
                    <label>數量：</label>
                    <select type="number">
                        {productStockArray.map((x) => {
                            return <option key={x} value={x}>{x}</option>
                        })}
                    </select>
                    <button>加入購物車</button>
                </div>}
            </div>
        )
    };
}

export default ProductScreen;