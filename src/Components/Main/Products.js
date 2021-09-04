import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../../Utils/Fetch-Data';

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts().then(products => setProducts(products));
    },[]);
    
    return(
        <div className="products">
            <h1 className='productsHeader'>Products</h1>
            <div className="productsContainer allProducts">
            {
                products.map(product => {
                    return(
                        <Link to={`/The-Imitation-Store/products/${product.category}/${product.id}`} className='productLink' key={product.id}>
                            <div className="productOverview">
                                <div className="productImageContainer">
                                    <img className={`productImage ${product.category}Image`} src={product.image} alt={product.title} />
                                </div>
                                <div className="productNamePrice">
                                    <span className='productName'>{product.title}</span> 
                                    <span className='productPrice'>${product.price}</span>
                                </div>
                            </div>
                        </Link>
                        
                    )
                })
            }
            </div>
        </div>
    );
}