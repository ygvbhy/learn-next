import Image from 'next/image';
import React from 'react';
import styles from './CartList.module.css';
// import { removeCartsItem } from '@/api';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function CartList({ carts }) {
	const router = useRouter();

	const totalPrice = carts.reduce((acc, cur) => {
		return acc + +cur.price;
	}, 0);

	const removeCart = async id => {
		const { data } = await axios.post('/api/carts', {
			id,
		});
		alert(data);
		router.replace(router.asPath);
	};

	return (
		<>
			<div>
				<ul>
					{carts.map(cart => {
						return (
							<li key={cart.id} className={styles.item}>
								<div>
									<Image
										src={cart.imageUrl}
										width={75}
										height={75}
										alt={cart.name}
									></Image>
								</div>
								<div className={styles.dexcription}>
									<div>{cart.name}</div>
									<div>${cart.price}</div>
									<button onClick={() => removeCart(cart.id)}>삭제하기</button>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
			<div>
				<p>총 가격 : {totalPrice}</p>
				<p>총 수량 : {carts.length}</p>
			</div>
		</>
	);
}
