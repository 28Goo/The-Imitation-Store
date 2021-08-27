import React from 'react'
import { Link } from 'react-router-dom'


export default function Nav({ cartLength }) {
    return(
        <nav>
            <Link to='/'> <h2 className='logo'>Logo</h2> </Link>
            <ul>
                <Link to='/products'> <li>Products</li> </Link>
                <Link to='/cart'> <li><span className="material-icons">shopping_bag</span></li> <span className='cartLength'>{cartLength}</span> </Link>
            </ul>
        </nav>
    )
}