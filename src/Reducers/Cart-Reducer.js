import ACTIONS from './Actions'

function reducer(cart, action) {
	switch (action.type) {
		case ACTIONS.ADD_TO_CART:
			if (cart.length !== 0) {
				let duplicate = false;
				for(let item = 0; item < cart.length; item++) {
					if(cart[item].id === action.payload.product.id) {
						duplicate = true;
						cart[item].quantity += action.payload.quantity;
						return [...cart];
					}
				}
				if(duplicate === false) {
					action.payload.product.quantity = action.payload.quantity;
					return[...cart, action.payload.product];
				}
			}
			else {
				action.payload.product.quantity = action.payload.quantity;
				return[action.payload.product];
			}
			break;

		case ACTIONS.REMOVE_FROM_CART:
			cart.forEach(item => {
				if(item.id === action.payload.id) {
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

		case ACTIONS.INCREMENT_QUANTITY:
			cart.forEach(item => {
				if (item.id === action.payload.id) {
					item.quantity += 1;
				}
			})
			return[...cart];

		case ACTIONS.INPUT_QUANTITY:
			cart.forEach(item => {
				if(item.id === action.payload.id) {
					if(action.payload.quantity <= 0 || isNaN(action.payload.quantity)) return;
					item.quantity = action.payload.quantity;
				}
			})
			return[...cart]

		default:
			return [...cart];
	}
}

export { reducer }