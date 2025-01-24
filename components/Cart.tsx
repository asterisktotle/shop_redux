'use client';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

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

	return <div>Total Price: {totalCart}</div>;
};

export default Cart;
