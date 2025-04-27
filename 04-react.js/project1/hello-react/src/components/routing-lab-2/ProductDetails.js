import React from 'react'
import { productList } from './data'

export default function ProductDetails({productId}) {
    const product = productList.find( p => p.id === Number(productId) );
 

        if(!product){
            return <p>Product not found!</p>
        }
        return(
            <div>
                <h3>Product Details </h3>
                <p>{product.name} - ${product.price} - {product.DOM} </p>
            </div>
        )
  
}
