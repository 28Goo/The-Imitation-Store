import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../Styles/Nav.css';


export default function Nav({ cartLength }) {
    return(
        <nav>
            <ul>
                <NavLink to='/products'> <li className='navProducts'>Shop</li> </NavLink>
                <NavLink to='/'> <h2 className='logo'>The Imitation Store</h2> </NavLink>
                <NavLink to='/cart'> <li className='cartLogoContainer'>
                    <span className="material-icons cartLogo">shopping_bag</span>
                    <span className='cartLength'>({cartLength})</span>
                    </li></NavLink>
            </ul>
        </nav>
    )
}