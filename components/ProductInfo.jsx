import Image from 'next/image';
import styles from './ProductInfo.module.css';

export default function ProductInfo({ productDetail }) {
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
				<button>장바구니 담기</button>
			</div>
		</div>
	);
}
