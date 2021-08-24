import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Products.css'

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        setProducts(products);
        console.log(products);
    }
    
    return(
        <div className="products">
            <h1>Products</h1>
            {
                products.map(product => {
                    return(
                        <div className="productOverview" key={product.id}>
                            <img src={product.image} alt={product.title} />
                            <Link to={`products/${product.id}`}>
                                <h2>{product.title}</h2> 
                            </Link>
                            <span className='productPrice'>${product.price}</span>
                        </div>
                        
                    )
                })
            }
        </div>
    )
}