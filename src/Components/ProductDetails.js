import React, { useState, useEffect } from 'react'

export default function ProductDetails({ match, addToCart, removeFromCart, inputQuantity }) {
    const [product, setProduct] = useState({});

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${match.params.id}`);
                const product = await response.json();
                setProduct(product);
            }
            catch(error) {
                console.log(error);
            }
        })();
    },[match]);

    return(
        <div>
            {
                <div className="product" >
                    <img src={product.image} alt={product.title} />
                    <div className="productDetails">
                        <h2 className='productTitle'>{product.title}</h2>
                        <p className='productPrice'>${product.price}</p>
                        <p className="productDescription">{product.description}</p>
                        <div className="cartButtons">
                            <button type='button' className="decrementProduct" data-id={product.id} onClick={removeFromCart}>-</button>
                            <input type="text" className="productQuantity" minLength='1' onChange={inputQuantity} />
                            <button type='button' className="incrementProduct" data-id={product.id} onClick={addToCart}>+</button>
                            <button type='button' className='addToCart' data-id={product.id} onClick={addToCart}>Add To Cart</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}