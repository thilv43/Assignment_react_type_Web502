import React, { useEffect, useState } from 'react'
import { list } from '../api/Product';
import ProductDetail from '../pages/ProductDetail';


type ProductListProps = {
    products: ProductListProps[];j
}
const ProductList = () => {
    const  [products, setProducts] = useState<ProductListProps[]>([]);

    useEffect(() =>{
        const fetchProducts = async()=>{
            const {data} = await list()
            console.log(data);
            setProducts(data);
        }
        fetchProducts();
    }, [])

    console.log(products);
    return(
    <div className="grid grid-cols-4 gap-4 m-[2rem]">
        {products?.map( result => { 
            return(
                <div className="flex">
                <div className="rounded-lg shadow-lg bg-white max-w-sm">
                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                    <img className="rounded-t-lg" src={result.img} alt />
                    </a>
                    <div className="p-6">
                    <h5 className="text-gray-900 text-2xl font-medium mb-2">{result.name}</h5>
                    <p className="text-gray-700 text-base mb-4">
                        Some quick example text to build on the card title and make up the bulk of the card's
                        content.
                    </p>
                    <a href={`/products/${result.id}`}>
                        <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                    </a>
                    </div>
                </div>
                </div>

            )})}
    </div>
) 
}

export default ProductList;