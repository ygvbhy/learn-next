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

function createCartItem(obj) {
	return instance.post(`/carts`, obj);
}

function fetchCarts() {
	return instance.get(`/carts`);
}

function removeCartsItem(id) {
	return instance.delete(`/carts/${id}`);
}

export {
	fetchProducts,
	fetchProductsItem,
	createCartItem,
	fetchCarts,
	removeCartsItem,
};
