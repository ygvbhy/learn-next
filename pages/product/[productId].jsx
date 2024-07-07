import { fetchProductsItem } from '@/api';
import ProductHeader from '@/components/ProductHeader';
import ProductInfo from '@/components/product-detail/ProductInfo';
import React from 'react';

export default function ProductDetailPage({ productDetail }) {
	const headerTitle = '상품 상세 정보 페이지';

	return (
		<div>
			<ProductHeader title={headerTitle} />
			<ProductInfo productDetail={productDetail}></ProductInfo>
		</div>
	);
}

export async function getServerSideProps(context) {
	const id = context.params.productId;
	const { data } = await fetchProductsItem(id);

	return {
		props: {
			productDetail: data,
		},
	};
}
