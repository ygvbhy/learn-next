import Image from 'next/image';
import styles from './ProductInfo.module.css';
import { useRouter } from 'next/router';

export default function ProductInfo({ productDetail }) {
	const router = useRouter();
	const addCart = () => {
		router.push('/cart');
	};

	return (
		<div className={styles.container}>
			<div>
				<Image
					src={productDetail.imageUrl}
					alt={productDetail.name}
					width={300}
					height={300}
				/>
			</div>
			<div className={styles.description}>
				<p>{productDetail.name}</p>
				<p>${productDetail.price}</p>
				<button onClick={addCart}>장바구니 담기</button>
			</div>
		</div>
	);
}
