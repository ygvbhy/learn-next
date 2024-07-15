import Image from 'next/image';
import styles from './ProductInfo.module.css';
import { useRouter } from 'next/router';
import { createCartItem } from '@/api';

export default function ProductInfo({ productDetail }) {
	const router = useRouter();
	const { name, imageUrl, price } = productDetail;
	const addCart = async () => {
		await createCartItem(productDetail);
		alert('장바구니에 추가되었습니다.');
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
