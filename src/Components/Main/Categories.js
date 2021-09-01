import React, { useEffect, useState } from 'react';
import { fetchCategories } from '../../Utils/Fetch-Data';
import uniqid from 'uniqid';
import { Link } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../Utils/String-Manipulation';

export default function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories().then(category => setCategories(category));
    },[])

    return(
        <div className="categories">
            {
                categories.map(category => {
                    return(
                        <div className="category" key={uniqid()}>
                            <Link to={`products/${category}`}>
                                <h1 className="categoryName">{capitalizeFirstLetter(category)}</h1>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    );
}