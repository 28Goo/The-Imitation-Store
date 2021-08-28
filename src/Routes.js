import React, { useReducer } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Components/Boilerplate/Nav';
import Home from './Components/Main/Home';
import Products from './Components/Main/Products';
import Cart from './Components/Cart/Cart';
import ProductDetails from './Components/Main/ProductDetails';
import ACTIONS from './Reducers/Actions';
import { reducer } from './Reducers/Cart-Reducer';
import { fetchProduct } from './Components/Utils/Fetch-Data'

export default function Routes() {
	const [cart, dispatch] = useReducer(reducer, []);

	const addToCart = async (e) => {
		const { id, quantity } = e.target.dataset;
		const product = await fetchProduct(id);
		dispatch({type: ACTIONS.ADD_TO_CART, payload: {product: product, quantity: parseInt(quantity)}});
	}

	const removeFromCart = async (e) => {
		const { id } = e.target.dataset;
		dispatch({type: ACTIONS.REMOVE_FROM_CART, payload: {id: parseInt(id)}});
	}

	const incrementQuantity = (e) => {
		const { id } = e.target.dataset;
		dispatch({type: ACTIONS.INCREMENT_QUANTITY, payload: {id: parseInt(id)}});
	}

	const inputQuantity = (e) => {
		let { value } = e.target;
		const { id } = e.target.dataset;
		dispatch({type: ACTIONS.INPUT_QUANTITY, payload: {quantity: parseInt(value), id: parseInt(id)}});
	}

	return(
		<div className="routes">
			<Router>
				<Nav cartLength={cart.length}/>
				<Cart cart={cart}
					removeFromCart={removeFromCart}
					inputQuantity={inputQuantity}
					incrementQuantity={incrementQuantity}
				/>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/products' component={Products} />
					<Route exact path='/products/:id'
						render={(props) => <ProductDetails {...props}
						addToCart={addToCart}
						/>}
					/>
				</Switch>
			</Router>
		</div>
    )
}