"use client";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
export default function Home() {
	const [searchKey, setSearchKey] = React.useState("pizza");
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="flex items-center gap-3">
				<input
					type="text"
					value={searchKey}
					onChange={(e) => setSearchKey(e.target.value)}
					placeholder="Search"
					className="w-full px-4 py-2 border border-gray-300 rounded-md"
				/>
				<Link href={`/recipe/${searchKey}`}>
					<FaArrowRight className=" cursor-pointer " />
				</Link>
			</div>
		</main>
	);
}
