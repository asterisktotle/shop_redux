'use client';

import { useEffect, useState } from 'react';
import ProductTile from './ProductTile';

const AllProducts = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);

	const fetchProducts = async () => {
		try {
			setLoading(true);
			const response = await fetch('https://dummyjson.com/products');

			if (!response.ok) {
				throw new Error('cannot fetch');
			}
			const data = await response.json();
			setProducts(data.products);
		} catch (error) {
			console.error('cant fetch, ', error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);
	console.log(products);

	return (
		<div>
			AllProducts
			<div>
				{!loading ? (
					<div>
						{products && products.length ? (
							products.map((productItem) => (
								<ProductTile key={productItem.id} product={productItem} />
							))
						) : (
							<p>No product available</p>
						)}
					</div>
				) : (
					<p>Pls wait</p>
				)}
			</div>
		</div>
	);
};

export default AllProducts;
