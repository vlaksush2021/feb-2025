import { Link, navigate, Router } from '@reach/router'
import React, { useState } from 'react'
import Home from './Home'
import Products from './Products'
import Cart from './Cart'
import ProductDetails from './ProductDetails'

export default function RouterApp() {
    const [cart,setCart] = useState([])
    const addToCart = (product) => {
        setCart([...cart,product]);
        console.log(cart)
        alert(`${product.name} added to cart!`)
        navigate('/cart')
    }
    return (
        <div>
            <nav>
                <Link to="/">Home</Link> |
                <Link to="/products">Products</Link> |
                <Link to="/cart">Cart</Link>
            </nav>
            <Router>
                <Home path="/" />
                <Products path="/products" addToCart={addToCart} />
                <Cart path="/cart" cartItems={cart} />
                <ProductDetails path="/products/:productId" />
            </Router>
        </div>
    )
}
