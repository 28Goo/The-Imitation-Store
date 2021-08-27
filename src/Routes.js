import React, { useReducer } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './Components/Boilerplate/Nav'
import Home from './Components/Home'
import Products from './Components/Products'
import Cart from './Components/Cart'
import ProductDetails from './Components/ProductDetails'
import ACTIONS from './Reducers/Actions'
import { reducer, fetchProduct } from './Reducers/Cart-Reducer'

export default function Routes() {
	const [cart, dispatch] = useReducer(reducer, []);

	const addToCart = async (e) => {
		const product = await fetchProduct(e);
		dispatch({type: ACTIONS.ADD_TO_CART, payload: {product: product}});
	}

	const removeFromCart = async (e) => {
		const product = await fetchProduct(e);
		dispatch({type: ACTIONS.REMOVE_FROM_CART, payload: {product: product}});
	}

	const inputQuantity = (e) => {
		if(isNaN(e.target.value)) return e.target.value = e.target.value.slice(e.target.value.length);
	}


	return(
		<div className="routes">
			<Router>
				<Nav cartLength={cart.length}/>
				<Cart cart={cart} />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/products' component={Products} />
					<Route exact path='/products/:id'
						render={(props) => <ProductDetails {...props} 
						addToCart={addToCart} 
						removeFromCart={removeFromCart}
						inputQuantity={inputQuantity}
						/>}/>
				</Switch>
			</Router>
		</div>
    )
}