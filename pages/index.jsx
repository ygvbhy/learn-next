import ProductHeader from '@/components/ProductHeader';
import ProductList from '@/components/product-list/ProductList';

function ProductPage() {
	// 이렇게 넣어도 되고 그냥 변경되지 않는 값이라면 string 값
	// 그대로 넣어도 됨
	const headerTitle = '상품 목록 페이지';

	return (
		<div>
			<ProductHeader title={headerTitle} />
			<ProductList />
		</div>
	);
}

export default ProductPage;
