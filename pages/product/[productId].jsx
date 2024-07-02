import React from 'react';

export default function ProductDetailPage({ message }) {
	return <div>ProductDetailPage {message} </div>;
}

export async function getServerSideProps(context) {
	console.log('## product id : ', context.params.productId);
	return {
		props: { message: '서버에서 보내준 데이터' },
	};
}
