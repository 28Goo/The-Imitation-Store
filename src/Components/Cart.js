import React, { useEffect } from 'react'

export default function Cart({ cart }) {
    useEffect(() => {
        console.log(cart);
    },[cart]);

    return(
        <div className="cart">
            <h1>Cart</h1>
            {
                cart.map(product => {
                    return(
                        <div className="cartProducts" key={product.id}>
                            <h1>{product.title}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}