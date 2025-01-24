'use client';

import Link from 'next/link';

const Header = () => {
	return (
		<div className="flex justify-between items-center">
			<h1 className="font-bold text-red-800 text-[2rem] sm:text-[2.5rem]">
				ONLINE UKAY UKAY
			</h1>
			<ul className="flex gap-3">
				<li className="list-none">
					<Link href={'/'}>Home</Link>
				</li>
				<li>
					<Link href={'/Cart'}> Cart</Link>
				</li>
			</ul>
		</div>
	);
};

export default Header;
