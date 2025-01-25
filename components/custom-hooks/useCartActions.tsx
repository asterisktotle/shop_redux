import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../store/slices/Cart-Slice';

export const useCartActions = () => {
	const dispatch = useDispatch();

	const handleAddToCart = (product) => {
		dispatch(addToCart(product));
		console.log('cart item added: ', product);
	};
	const handleRemoveFromCart = (product) => {
		dispatch(removeFromCart(product));
		console.log('cart item remove: ', product);
	};

	return {
		addToCart: handleAddToCart,
		removeFromCart: handleRemoveFromCart,
	};
};
