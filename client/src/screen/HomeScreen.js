import React, { useEffect } from "react";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAction } from "../actions/getProductActions";


function HomeScreen() {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(getProductsAction())
    }, [dispatch]);

    return (
        loading ? (<i className="fas fa-spinner fa-pulse"></i>)
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