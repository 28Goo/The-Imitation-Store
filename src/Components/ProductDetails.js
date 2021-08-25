import React, { useState, useEffect } from 'react'

export default function ProductDetails({ match, addToCart }) {
    const [product, setProduct] = useState({});

    useEffect(() => {
        (async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${match.params.id}`);
            const product = await response.json();
            setProduct(product);
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
                        <button className='addToCart' data-id={product.id} onClick={addToCart}>Add To Cart</button>
                    </div>
                </div>
            }
        </div>
    )
}