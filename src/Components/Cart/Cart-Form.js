import React from 'react';

export default function CartForm({ product, removeFromCart, inputQuantity, incrementQuantity }) {
    return(
        <div className="cartButtons">
            <button type='button' className="decrementProduct" data-id={product.id} onClick={removeFromCart}>-</button>
            <input type="number" className="productQuantity" data-id={product.id} value={product.quantity} onChange={inputQuantity} />
            <button type='button' className="incrementProduct" data-id={product.id} onClick={incrementQuantity}>+</button>
        </div>
    )
}