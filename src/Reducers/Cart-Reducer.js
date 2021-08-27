import ACTIONS from './Actions'

function reducer(cart, action) {
	switch (action.type) {
		case ACTIONS.ADD_TO_CART:
			if (cart.length !== 0) {
				let duplicate = false;
				for(let item = 0; item < cart.length; item++) {
					if(cart[item].id === action.payload.product.id) {
						duplicate = true;
						cart[item].quantity += 1;
						return [...cart];
					}
				}
				if(duplicate === false) {
					action.payload.product.quantity = 1;
					return[...cart, action.payload.product];
				}
			}
			else {
				action.payload.product.quantity = 1;
				return[action.payload.product];
			}
			break;

		case ACTIONS.REMOVE_FROM_CART:
			cart.forEach(item => {
				if(item.id === action.payload.product.id) {
					if(item.quantity === 1) {
						const index = cart.indexOf(item);
						cart.splice(index, 1)
					}
					else {
						item.quantity -= 1;
					}
				}
			});
			return [...cart];

		case ACTIONS.INPUT_QUANTITY:
			const { quantity } = action.payload;
			return[...cart]

		default:
			return [...cart];
	}
}

const fetchProduct =  async (e) => {
	const { id } = e.target.dataset;
	const data = await fetch(`https://fakestoreapi.com/products/${id}`);
	const product = await data.json();
	return product
}

export { reducer, fetchProduct };