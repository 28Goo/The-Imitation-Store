import React from 'react'
import CartForm from './Cart-Form'

export default function Cart({ cart, incrementQuantity, removeFromCart, inputQuantity }) {
    return(
        <div className="cart">
            <h1>Cart</h1>
            {
                cart.map(product => {
                    return(
                        <div className="cartProducts" key={product.id}>
                            <h1>{product.title}</h1>
                            <h1>{product.quantity}</h1>
                            <CartForm product={product}
                                incrementQuantity={incrementQuantity}
                                removeFromCart={removeFromCart}
                                inputQuantity={inputQuantity}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}