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

const fetchCategories = async () => {
    try{
        const data = await fetch('https://fakestoreapi.com/products/categories');
        const categories = await data.json();
        return categories;
    }
    catch(error) {
        console.log(error);
    }
}

const fetchCategoryProduct = async (category) => {
    try{
        const data = await fetch(`https://fakestoreapi.com/products/category/${category}`);
        const products = await data.json();
        return products;
    }
    catch(error) {
        console.log(error);
    }
}


export { fetchProducts, fetchProduct, fetchCategories, fetchCategoryProduct }