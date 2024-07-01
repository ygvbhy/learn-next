import axios from 'axios';
import { useEffect, useState } from 'react';

function ProductPage() {
	const [products, setProducts] = useState();

	useEffect(() => {
		axios.get('http://localhost:4000/products').then(response => {
			setProducts(response.data);
		});
	}, []);

	console.log(products);

	return <div style={{ color: 'blue' }}>hello next</div>;
}

export default ProductPage;
