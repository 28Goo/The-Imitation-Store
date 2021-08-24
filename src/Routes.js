import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './Components/Boilerplate/Nav'
import Home from './Components/Home'
import Products from './Components/Products'
import Cart from './Components/Cart'
import ProductDetails from './Components/ProductDetails'

export default function Routes() {
	return(
		<div className="routes">
			<Router>
				<Nav />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/products' component={Products} />
					<Route exact path='/cart' component={Cart} />
					<Route exact path='/products/:id' component={ProductDetails} />
				</Switch>
			</Router>
		</div>
    )
}