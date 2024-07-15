import Image from 'next/image';
import styles from './ProductInfo.module.css';
import { useRouter } from 'next/router';
import { createCartItem } from '@/api';

// 다른 파일에도 이 문구를 사용 할 수 있게 만들어줌
export const ALERT_MESSAGE = '장바구니에 추가되었습니다.';

export default function ProductInfo({ productDetail }) {
	const router = useRouter();
	const { name, imageUrl, price } = productDetail;
	const addCart = async () => {
		await createCartItem(productDetail);
		alert(ALERT_MESSAGE);
		router.push('/cart');
	};

	return (
		<div className={styles.container}>
			<div>
				<Image
					data-cy="product-image"
					src={imageUrl}
					alt={name}
					width={300}
					height={300}
				/>
			</div>
			<div className={styles.description}>
				<p data-cy="product-name">{name}</p>
				<p data-cy="product-price">${price}</p>
				<button data-cy="cart-button" onClick={addCart}>
					장바구니 담기
				</button>
			</div>
		</div>
	);
}
