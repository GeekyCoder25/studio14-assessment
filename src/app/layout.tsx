import type {Metadata} from 'next';
import './globals.css';
import {Provider} from '@/components/ui/provider';

export const metadata: Metadata = {
	title: 'Studio14',
	description: 'Studio14 Assessment',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`antialiased`}>
				<Provider>{children}</Provider>
			</body>
		</html>
	);
}
