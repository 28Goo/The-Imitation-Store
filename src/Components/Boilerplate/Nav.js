import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../../Styles/Nav.css';


export default function Nav({ cartLength }) {
    useEffect(() => {
        const cartLogo = document.querySelector('.cartLogoContainer');
        const cart = document.querySelector('.cart');
        const backdrop = document.querySelector('.backdrop');
        
        cartLogo.addEventListener('click', () => {
            cart.style.transform = 'translateX(0%)';
            cart.style.zIndex = '2';
            backdrop.style.transform = 'translateX(0%)';
            backdrop.style.zIndex = '1';
        });

        backdrop.addEventListener('click', () => {
            cart.style.transform = 'translateX(100%)';
            backdrop.style.transform = 'translateX(-100%)';
        });
    },[]);

    return(
        <nav className='navbar'>
            <ul>
                <NavLink to='/The-Imitation-Store/products'> <li className='navProducts'>Shop</li> </NavLink>
                <NavLink to='/The-Imitation-Store'> <h2 className='logo'>The Imitation Store</h2> </NavLink>
                <li className='cartLogoContainer'>
                    <span className="material-icons cartLogo">shopping_bag</span>
                    <span className='cartLength'>({cartLength})</span>
                </li>
            </ul>
        </nav>
    )
}