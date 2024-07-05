import Image from 'next/image';
import styles from './ProductInfo.module.css';
import { useRouter } from 'next/router';
import { createCartItem } from '@/api';

export default function ProductInfo({ productDetail }) {
	const router = useRouter();
	const { name, imageUrl, price } = productDetail;
	const addCart = async () => {
		const response = await createCartItem(productDetail);
		console.log(response);
		alert('장바구니에 추가되었습니다.');
		router.push('/cart');
	};

	return (
		<div className={styles.container}>
			<div>
				<Image src={imageUrl} alt={name} width={300} height={300} />
			</div>
			<div className={styles.description}>
				<p>{name}</p>
				<p>${price}</p>
				<button onClick={addCart}>장바구니 담기</button>
			</div>
		</div>
	);
}
