const fetchProducts = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        return products
    }
    catch(error) {
        console.log(error);
    }
}

const fetchProduct =  async (id) => {
    try{
        const data = await fetch(`https://fakestoreapi.com/products/${id}`);
        const product = await data.json();
        return product
    }
	catch(error) {
        console.log(error);
    }
}



export { fetchProducts, fetchProduct }