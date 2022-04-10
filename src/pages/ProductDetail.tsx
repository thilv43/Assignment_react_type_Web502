import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { read } from "../api/Product";
import { useCart } from "react-use-cart";



const ProductDetail = () => {
    const {addItem} = useCart();
    const {id} = useParams();
    const [product, setProduct] = useState();
    useEffect(() => {
        const getProduct = async() => {
            const {data} = await read(id);
            setProduct(data);
            console.log(data)
        }
        getProduct();
    },[id])
    return (

        <div>
            <div className="row">
                <div className="col-6">
                    <img src={product?.img} alt="" />
                    <h2>{product?.name}</h2>
                    <span>{product?.price}</span>
                    {/* <Link to={`/products/${product?.id}/cart`}> */}
                        <button type="button" className="btn btn-primary" onClick={() => addItem(product?.id)}>Add to cart</button>
                    {/* </Link> */}
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;