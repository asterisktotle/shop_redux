import Header from '@/components/Header';
import './globals.css';
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="box-border m-2  sm:mx-[30px] sm:bg-green-300 lg:bg-blue-400 xl:bg-red-300">
				<Header />
				{children}
			</body>
		</html>
	);
}
