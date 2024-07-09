import ProductHeader from '@/components/ProductHeader';
import ProductList from '@/components/product-list/ProductList';
import { useState } from 'react';

function Counter() {
	const [counter, setCounter] = useState(0);
	const increaseCounter = () => {
		setCounter(counter + 1);
	};
	const decreaseCounter = () => {
		setCounter(counter - 1);
	};

	return (
		<div>
			<p data-cy="counter">{counter}</p>
			<button onClick={increaseCounter} data-cy="add-button">
				+
			</button>
			<button onClick={decreaseCounter} data-cy="minus-button">
				-
			</button>
		</div>
	);
}

function ProductPage() {
	// 이렇게 넣어도 되고 그냥 변경되지 않는 값이라면 string 값
	// 그대로 넣어도 됨
	const headerTitle = '상품 목록 페이지';

	return (
		<div>
			{/* <ProductHeader title={headerTitle} /> */}
			{/* <ProductList /> */}
			<Counter></Counter>
		</div>
	);
}

export default ProductPage;
