'use client';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartTile from './CartTile';

const Cart = () => {
	const [totalCart, setTotalCart] = useState(0);

	const { cart } = useSelector((state) => state);

	useEffect(() => {
		const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
		const formattedTotalPrice =
			Math.round((totalPrice + Number.EPSILON) * 100) / 100;
		setTotalCart(formattedTotalPrice);
	}, [cart]);

	console.log('cart item is: ', cart, 'total amount: ', totalCart);

	return (
		<div className="sm:grid sm:grid-flow-col items-center flex flex-col">
			<div className="p-5 flex flex-col gap-1">
				{cart && cart.length ? (
					cart.map((item) => (
						<CartTile key={item.id} product={item} cart={cart} />
					))
				) : (
					<p> It's empty here </p>
				)}
			</div>
			<div className="border-2 w-full p-2 sm:h-[15rem]">
				Total Price: $ {totalCart}
			</div>
		</div>
	);
};

export default Cart;
