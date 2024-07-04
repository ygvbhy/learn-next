import { fetchProductsItem } from '@/api';
import ProductHeader from '@/components/ProductHeader';
import axios from 'axios';
import React from 'react';

export default function ProductDetailPage({ message, productInfo }) {
	const headerTitle = '상품 상세 정보 페이지';

	return (
		<>
			<ProductHeader title={headerTitle} />
			<div>ProductDetailPage {message} </div>
			<p>{productInfo.name}</p>
		</>
	);
}

export async function getServerSideProps(context) {
	console.log('## product id : ', context.params.productId);
	const id = context.params.productId;
	const response = await fetchProductsItem(id);

	return {
		props: {
			message: '서버에서 보내준 데이터',
			productInfo: response.data,
		},
	};
}
