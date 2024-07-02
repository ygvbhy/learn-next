import ProductHeader from '@/components/ProductHeader';
import React from 'react';

export default function ProductDetailPage({ message }) {
	const headerTitle = '상품 상세 페이지';

	return (
		<>
			<ProductHeader title={headerTitle} />
			<div>ProductDetailPage {message} </div>
		</>
	);
}

export async function getServerSideProps(context) {
	console.log('## product id : ', context.params.productId);
	return {
		props: { message: '서버에서 보내준 데이터' },
	};
}
