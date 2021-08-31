const quantityChecker = (prevQuantity, addedQuantity) => {
    const quantity =  prevQuantity + addedQuantity;
    if(quantity > 100) return true;
    else return false;
}

const cartQuantityChecker = (cart, match, addedQuantity) => {
    let checker = false
    cart.forEach(product => {
        if(parseInt(match.params.id) === product.id) {
            if(product.quantity + parseInt(addedQuantity) > 100) checker = true;
        }
    });
    return checker;
}

export { quantityChecker, cartQuantityChecker }