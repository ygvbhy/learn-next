import React from 'react';

export default function CartList({ carts }) {
	return (
		<>
			<div>
				<ul>
					{carts.map(cart => {
						return <li key={cart.id}>{cart.name}</li>;
					})}
				</ul>
			</div>
			<div>
				<p>총 가격 : </p>
				<p>총 수량 : </p>
			</div>
		</>
	);
}
