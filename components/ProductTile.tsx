const ProductTile = ({ product }) => {
	return (
		<div>
			<p>{product.title}</p>
			<p>{product.price}</p>
		</div>
	);
};

export default ProductTile;
