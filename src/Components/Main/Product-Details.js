import React, { useState, useEffect } from 'react';
import { fetchProduct } from '../../Utils/Fetch-Data';
import { cartQuantityChecker } from '../../Utils/Quantity';
import '../../Styles/Product-Details.css';

export default function ProductDetails({ match, cart, addToCart }) {
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        window.scrollTo(0,0);

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
        if(cartQuantityChecker(cart, match, quantity + 1) ===  true) return;
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
        else if (value <= 0 || value > 100) return;
        if(cartQuantityChecker(cart, match, value) ===  true) return;
        setQuantity(prevQuantity => prevQuantity = parseInt(value));
    }

    return(
        <div className="product" >
            <div className="productDetailImageContainer">
                <img src={product.image} alt={product.title} className={`productDetailImage ${product.category}DetailImage`}/>
            </div>
            <div className="productDetails">
                <h2 className='productDetailName'>{product.title}</h2>
                <p className='productDetailPrice'>${product.price}</p>
                <p className="productDescription">{product.description}</p>
                <div className="productForm">
                    <div className="productFormQuantity">
                        <button type='button' className="decrementButton quantityButton" onClick={decrementQuantity}>-</button>
                        <input type="number" className="productQuantity" min='1' value={quantity} onChange={inputQuantity} />
                        <button type='button' className="incrementButton quantityButton" onClick={incrementQuantity}>+</button>
                    </div>
                    <button type='button' className='addToCart' data-id={product.id} data-quantity={quantity} onClick={addToCart}>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}