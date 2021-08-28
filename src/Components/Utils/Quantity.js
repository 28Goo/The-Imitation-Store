const quantityChecker = (prevQuantity, addedQuantity) => {
    const quantity =  prevQuantity + addedQuantity;
    if(quantity > 100) return true;
    else return false;
}

export { quantityChecker }