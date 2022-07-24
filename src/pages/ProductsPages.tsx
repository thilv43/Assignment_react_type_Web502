import React from 'react'
import ProductList from '../components/ProductList'
import { ProductType } from '../types/Product'

type Props = {
  products : ProductType[]
}

const ProductsPages = (props: Props) => {
  return (
    <div>
      <ProductList/>
      
    </div>
  )
}

export default ProductsPages;