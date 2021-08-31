import React, { useEffect, useState } from 'react'
import CartForm from './Cart-Form'
import '../../Styles/Cart.css';

export default function Cart({ cart, incrementQuantity, removeFromCart, inputQuantity, checkout }) {
    const [total, setTotal] = useState();

    useEffect(() => {
        let computation = 0;
        if (cart.length === 0) setTotal(0);
        cart.forEach(product => {
            computation += product.price * product.quantity;
            setTotal(parseFloat(computation.toFixed(2)));
        });
    },[cart]);

    return(
        <div className="cart">
            <h1>Cart</h1>
            {
                cart.map(product => {
                    return(
                        <div className="cartProducts" key={product.id}>
                            <h1>{product.title}</h1>
                            <h1>${(product.price * product.quantity).toFixed(2)}</h1>
                            <CartForm product={product}
                                incrementQuantity={incrementQuantity}
                                removeFromCart={removeFromCart}
                                inputQuantity={inputQuantity}
                            />
                        </div>
                    )
                })
            }
            <h1 className="total">${total}</h1>
            <button className="checkout" onClick={checkout}>Checkout</button>
        </div>
    )
}