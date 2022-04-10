import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import ProductList from '../components/ProductList'
import { ProductType } from '../types/Product'
import Footer from '../components/Footer'


type HomePagesProps = {
    products: ProductType[];
}


const HomePages = (props: HomePagesProps) => {

return (
    
    <div >
    {<Banner />}
    <ProductList />
    </div>


)
}

export default HomePages;