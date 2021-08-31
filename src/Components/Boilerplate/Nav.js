import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Nav({ cartLength }) {
    return(
        <nav>
            <NavLink to='/'> <h2 className='logo'>Logo</h2> </NavLink>
            <ul>
                <NavLink to='/products'> <li>Products</li> </NavLink>
                <NavLink to='/cart'> <li><span className="material-icons">shopping_bag</span></li></NavLink>
                <span className='cartLength'>{cartLength}</span>
            </ul>
        </nav>
    )
}