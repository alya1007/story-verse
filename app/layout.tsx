import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Header from "@/components/shared/Header";

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["100", "400", "700", "900"],
});

export const metadata: Metadata = {
	title: "Writers application",
	description: "Post your essays and stories",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${roboto.className} flex h-screen bg-bg max-h-screen text-text`}
			>
				<Navbar />
				<div className="flex-1 flex flex-col">
					<Header title="black" />
					<main className="flex-1">{children}</main>
				</div>
			</body>
		</html>
	);
}
