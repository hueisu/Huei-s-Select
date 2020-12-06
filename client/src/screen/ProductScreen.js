import React, { useState, useEffect } from "react";
import axios from "axios";

function ProductScreen(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/api/products")
            .then(res => {
                const data = res.data;
                setProducts(data);
            })
    }, []);

    const product = products.find((x) => { return (x._id === props.match.params.id) });

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
                <div className="col-1">
                    <input type="number"></input>
                    <button>加入購物車</button>
                </div>

            </div>
        )
    };
}

export default ProductScreen;