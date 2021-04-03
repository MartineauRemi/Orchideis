import React, {useState} from 'react'
import "../styles/Cart.css"

export default function Cart({cart, emptyCart}) {
    return (
        <ul className="cart">
            <h2>Panier</h2>
            <button onClick={emptyCart}>Vider le panier</button>
            {cart.map(item => <li>{item.name} x{item.quantity}</li>)}
            <li>Total: 0€</li>
        </ul>
    )
}
