import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../Styles/Products.css'
import { fetchProducts } from '../../Utils/Fetch-Data'

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts().then(products => setProducts(products));
    },[]);
    
    return(
        <div className="products">
            <h1>Products</h1>
            {
                products.map(product => {
                    return(
                        <div className="productOverview" key={product.id}>
                            <Link to={`products/${product.category}/${product.id}`}>
                                <img className='productImage' src={product.image} alt={product.title} />
                                <p>{product.title}</p> 
                            </Link>
                            <span className='productPrice'>${product.price}</span>
                        </div>
                        
                    )
                })
            }
        </div>
    )
}