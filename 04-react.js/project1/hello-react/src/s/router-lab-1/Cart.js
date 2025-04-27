import React from 'react'

export default function Cart({ cartItems }) {
    console.log(cartItems)
    return (
        <div>
            <h3>Your Cart</h3>
            {
                cartItems.length === 0 ? (<p>Your cart is empty.</p>) : (
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index}>
                                {item.name} - ${item.price}
                            </li>
                        ))}
                    </ul>
                )}
        </div>
    )
}
