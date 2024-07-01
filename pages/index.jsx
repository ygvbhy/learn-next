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

	return (
		<div>
			<h1>상품 목록 페이지</h1>
			<ul>
				{products &&
					products.map(product => {
						return <li key={product.id}>{product.name}</li>;
					})}
			</ul>
		</div>
	);
}

export default ProductPage;
