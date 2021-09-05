import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchCategoryProduct } from '../../Utils/Fetch-Data';
import { capitalizeFirstLetter } from '../../Utils/String-Manipulation';

export default function CategoryProduct({ match }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        window.scrollTo(0,0);
        const { category } = match.params;
        fetchCategoryProduct(category).then(products => setProducts(products));
    },[match]);

    return(
        <div className="products">
            <h1 className="productsHeader">{capitalizeFirstLetter(match.params.category)}</h1>
            <div className="productsContainer">
            {
                products.map(product => {
                    return(
                        <Link to={`${product.category}/${product.id}`} className='productLink' key={product.id}>
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
