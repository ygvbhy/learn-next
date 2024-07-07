import Image from 'next/image';
import React from 'react';
import styles from './CartList.module.css';

export default function CartList({ carts }) {
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
								</div>
							</li>
						);
					})}
				</ul>
			</div>
			<div>
				<p>총 가격 : </p>
				<p>총 수량 : {carts.length}</p>
			</div>
		</>
	);
}
