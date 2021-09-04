import React, { useEffect, useState } from 'react';
import { fetchCategories } from '../../Utils/Fetch-Data';
import { Link } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../Utils/String-Manipulation';
import uniqid from 'uniqid';

export default function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories().then(category => setCategories(category));
    },[])

    return(
        <div className="categories">
            <h1 className="categoryHeader">Categories</h1>
            <div className="categoryContainer">
            {
                categories.map(category => {
                    const image = require(`../../Assets/${category}.jpg`).default;
                    return(
                        <div className={`category ${category}`} key={uniqid()}>
                        <Link className='categoryLink' to={`/The-Imitation-Store/products/${category}`}>
                            <img className='categoryImage' src={image} alt={category} />
                            <span className="categoryName">{capitalizeFirstLetter(category)}</span>
                        </Link>
                        </div>
                    )
                })
            }
            </div>
        </div>
    );
}