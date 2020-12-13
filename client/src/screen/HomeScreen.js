import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import axios from "axios";

function HomeScreen() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get("http://localhost:3000/api/products")
            .then(res => {
                const data = res.data;
                setProducts(data);
            })
            .catch((err) => {
                setError(true);
            })
            .then(() => { setIsLoading(false) });
    }, []);


    return (
        isLoading ? (<i className="fas fa-spinner"></i>)
            :
            error ? (<div>error</div>)
                :
                (
                    <main>
                        <div className="row center">
                            {products.map((product) => {
                                return (
                                    <Product
                                        key={product._id}
                                        id={product._id}
                                        img={product.image}
                                        name={product.name}
                                        price={product.price}
                                    />
                                )
                            })}
                        </div>
                    </main>
                )
    )
}




export default HomeScreen;