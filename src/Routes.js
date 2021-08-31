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
		try {
			const { id, quantity } = e.target.dataset;
			const product = await fetchProduct(id);
			dispatch({type: ACTIONS.ADD_TO_CART, payload: {product: product, quantity: parseInt(quantity)}});
		}
		catch(error) {
			console.log(error);
		}
	}

	const removeFromCart = async (e) => {
		try{
			const { id } = e.target.dataset;
			dispatch({type: ACTIONS.REMOVE_FROM_CART, payload: {id: parseInt(id)}});
		}
		catch(error) {
			console.log(error);
		}
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

	const checkout = () => {
		dispatch({type: ACTIONS.CHECKOUT});
	}

	return(
		<Router>
			<Nav cartLength={cart.length}/>
			<Cart cart={cart}
				removeFromCart={removeFromCart}
				inputQuantity={inputQuantity}
				incrementQuantity={incrementQuantity}
				checkout={checkout}
			/>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/products' component={Products} />
				<Route exact path='/products/:id'
					render={(props) => <ProductDetails {...props}
					cart={cart}
					addToCart={addToCart}
					/>}
				/>
			</Switch>
		</Router>
    )
}