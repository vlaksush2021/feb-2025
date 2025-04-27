import React from 'react'
import { productList } from './data'
import { Link } from '@reach/router'


export default function Products({ addToCart }) {
    return (
        <div>
            <h3>Products Page</h3>
            <ul>
                {
                    productList.map(product => (
                        <li key={product.id}>
                            <p>{product.name} - ${product.price} &nbsp;&nbsp;

                                <Link to={`/products/${product.id}`} > details </Link>
                                &nbsp;&nbsp;
                                <button onClick={() => addToCart(product)}>Add to Cart</button>

                            </p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
