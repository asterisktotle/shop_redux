import Image from 'next/image';
import { useCartActions } from './custom-hooks/useCartActions';

const CartTile = ({ product, cart }) => {
	const { removeFromCart } = useCartActions();

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
				<button onClick={() => removeFromCart(product)}>
					{cart.some((item) => item.id === product.id) && 'remove from cart'}
				</button>
			</div>
		</div>
	);
};

export default CartTile;
