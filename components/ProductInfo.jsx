import React from 'react';

export default function ProductInfo({ productDetail }) {
	return (
		<>
			<div>
				<img src={productDetail.imageUrl} alt="" />
			</div>
			<div>
				<p>{productDetail.name}</p>
				<p>${productDetail.price}</p>
			</div>
		</>
	);
}
