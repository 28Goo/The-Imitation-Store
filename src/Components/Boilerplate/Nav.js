import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../Styles/Nav.css';


export default function Nav({ cartLength }) {
    return(
        <nav>
            <NavLink to='/'> <h2 className='logo'>The Imitation Store</h2> </NavLink>
            <ul>
                <NavLink to='/products'> <li className='navProducts'>Products</li> </NavLink>
                <NavLink to='/cart'> <li><span className="material-icons cartLogo">shopping_bag</span></li></NavLink>
                <span className='cartLength'>({cartLength})</span>
            </ul>
        </nav>
    )
}