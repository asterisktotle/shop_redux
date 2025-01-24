import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from './store/slices/Cart-Slice';

const ProductTile = ({ product }) => {
	const dispatch = useDispatch();
	const { cart } = useSelector((state) => state);

	const handleAddToCart = () => {
		dispatch(addToCart(product));
	};

	const handleRemoveFromCart = () => {
		dispatch(removeFromCart(product));
		console.log('remove cart');
	};

	return (
		<div className="flex flex-col items-center w-[20rem] sm:w-full border-black border-2 p-2 rounded-lg gap-2">
			<div className="w-fit ">
				<Image
					src={product.images[0]}
					width={150}
					height={150}
					alt="product"
					quality={10}
					className="overflow-hidden object-cover h-[10rem] "
				/>
			</div>
			<p>{product.title}</p>
			<div className="flex gap-10">
				<p>${product.price}</p>
				<button
					onClick={
						cart.some((item) => item.id === product.id)
							? handleRemoveFromCart
							: handleAddToCart
					}
					className=" hover:bg-yellow-400 p-2 rounded-lg bg-yellow-300 font-semibold"
				>
					{cart.some((item) => item.id === product.id)
						? 'Remove from Cart'
						: 'Add to Cart'}
				</button>
			</div>
		</div>
	);
};

export default ProductTile;
