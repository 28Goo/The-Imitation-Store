import React, { useState, useEffect } from 'react'
import { fetchProduct } from '../Utils/Fetch-Data'

export default function ProductDetails({ match, addToCart }) {
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        (async () => {
            try {
                const { id } = match.params;
                const product = await fetchProduct(id);
                setProduct(product);
            }
            catch(error) {
                console.log(error);
            }
        })();
    },[match]);

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    }

    const decrementQuantity = () => {
        if (quantity === 1) return;
        setQuantity(prevQuantity => prevQuantity - 1);
    }

    const inputQuantity = (e) => {
        let { value } = e.target;
        if (isNaN(value)) return;
        else if(value.length === 0) value = 1;
        else if (value <= 0) return;
        setQuantity(prevQuantity => prevQuantity = parseInt(value));
    }

    return(
        <div className="product" >
            <img src={product.image} alt={product.title} />
            <div className="productDetails">
                <h2 className='productTitle'>{product.title}</h2>
                <p className='productPrice'>${product.price}</p>
                <p className="productDescription">{product.description}</p>
                <div className="productForm">
                    <button type='button' className="decrementQuantity" onClick={decrementQuantity}>-</button>
                    <input type="number" className="productQuantity" min='1' value={quantity} onChange={inputQuantity} />
                    <button type='button' className="incrementQuantity" onClick={incrementQuantity}>+</button>
                    <button type='button' className='addToCart' data-id={product.id} data-quantity={quantity} onClick={addToCart}>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}