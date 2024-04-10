import { Inter } from "next/font/google";
import { NavBar } from "@/components";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Next-Recipe",
	description: "Find your next recipe!",
};

export default function RootLayout({
	children,
}) {
	return (
		<html lang="en">
			<head>
			<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8267694389286905"
     crossorigin="anonymous"></script>
			</head>
			<body className={`${inter.className}`}>
				<NavBar />
				{children}
			</body>
		</html>
	);
}
