const { default: axios } = require('axios');

const instance = axios.create({
	baseURL: 'http://localhost:4000',
});

function fetchProducts() {
	return instance.get('/products');
}

function fetchProductsItem(id) {
	return instance.get(`/products/${id}`);
}

function createCartItem(id, name) {
	return instance.post(`/carts`, {
		id,
		name,
	});
}

export { fetchProducts, fetchProductsItem, createCartItem };
