import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './Components/Boilerplate/Nav'
import Home from './Components/Home'
import Products from './Components/Products'
import Cart from './Components/Cart'
import ProductDetails from './Components/ProductDetails'

export default function Routes() {
    const [cart, setCart] = useState([]);

	useEffect((e) => {
		checkCart(e, cart)
	},[cart])

	const addToCart = async (e) => {
		const { id } = e.target.dataset;
        const data = await fetch(`https://fakestoreapi.com/products/${id}`);
        const product = await data.json();
		setCart(prevCart => [...prevCart, product]);
    }
	
	const checkCart = (e, cart) => {
		console.log(e);
		cart.forEach(product => {
			console.log(product);
		});
	}

	return(
		<div className="routes">
			<Router>
				<Nav />
				<Cart cart={cart} />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/products' component={Products} />
					<Route exact path='/products/:id'render={(props) => <ProductDetails {...props} addToCart={addToCart} />}/>
				</Switch>
			</Router>
		</div>
    )
}