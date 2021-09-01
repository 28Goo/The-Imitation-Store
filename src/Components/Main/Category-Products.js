import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchCategoryProduct } from '../../Utils/Fetch-Data';
import { capitalizeFirstLetter } from '../../Utils/String-Manipulation';

export default function CategoryProduct({ match }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const { category } = match.params;
        fetchCategoryProduct(category).then(products => setProducts(products));
    },[match]);

    return(
        <div className="categoryProducts">
            <h1 className="categoryTitle">{capitalizeFirstLetter(match.params.category)}</h1>
            {
                products.map(product => {
                    return(
                        <div className="categoryProduct" key={product.id}>
                            <Link to={`${product.category}/${product.id}`} >
                                <img src={product.image} alt={product.title} />
                                <p>{product.title}</p>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    );
}
