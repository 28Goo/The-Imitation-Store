import React, { useState, useEffect } from 'react'

export default function ProductDetails({ match }) {
    const [details, setDetails] = useState({})
    
    useEffect(() => {
        (async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${match.params.id}`);
            const details = await response.json();
            setDetails(details);
        })();
    },[match])

    return(
        <div>
            {
                <div className="productDetails">
                <h1>{details.title}</h1>
                <img src={details.image} alt={details.title} />
                </div>
            }
        </div>
    )
}