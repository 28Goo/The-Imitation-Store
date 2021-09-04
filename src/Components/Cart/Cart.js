import React, { useEffect, useState } from 'react';
import CartForm from './Cart-Form';
import '../../Styles/Cart.css';

export default function Cart({ cart, incrementQuantity, removeFromCart, inputQuantity, checkout }) {
    const [total, setTotal] = useState();

    useEffect(() => {
        let computation = 0;
        if (cart.length === 0) {
            setTotal(0);
            return;
        }
        cart.forEach(product => {
            computation += product.price * product.quantity;
            setTotal(parseFloat(computation.toFixed(2)));
        });
    },[cart]);

    return(
        <div className="cart">
            <h1 className='cartHeader'>Cart</h1>
            {
                cart.map(product => {
                    return(
                        <div className="cartProducts" key={product.id}>
                            <div className="productCartImageContainer">
                                <img src={product.image} alt={product.title} className={`productCartImage ${product.category}CartImage`}/>
                            </div>
                            <div className="cartDetails">
                                <p className='productCartName'>{product.title}</p>
                                <div className="priceFormContainer">
                                    <p className='productCartPrice'>${(product.price * product.quantity).toFixed(2)}</p>
                                    <CartForm product={product}
                                        incrementQuantity={incrementQuantity}
                                        removeFromCart={removeFromCart}
                                        inputQuantity={inputQuantity}
                                    />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <div className="totalCheckout">
                <span className="total">Total: ${total}</span>
                <button className="checkout" onClick={checkout}>Checkout</button>
            </div>
        </div>
    )
}