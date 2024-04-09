"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import image from "../../public/images/bgImage.jpg";
import { FaArrowRight } from "react-icons/fa";
export default function Home() {
	const [searchKey, setSearchKey] = React.useState("pizza");
	return (
		<main className="flex flex-col items-center justify-between p-6 gap-6 relative">
			<div>
				<h1 className="text-5xl font-bold text-center text-gray-800">
					Welcome to Recipe App
				</h1>
				<p className="text-center text-gray-600">Search your favorite recipe</p>
			</div>

			<div className="relative w-full h-80 overflow-hidden rounded-md shadow-md flex flex-col items-center justify-center">
				<Image
					src={image}
					alt="bgImage"
					width={1800}
					height={1200}
					className="absolute -z-10 overflow-hidden"
				/>
				<h2 className="text-3xl font-semibold text-white">Find Your Recipe</h2>
				<div className="flex justify-center items-center gap-6">
					<input
						type="text"
						value={searchKey}
						onChange={(e) => setSearchKey(e.target.value)}
						placeholder="Search"
						className=" w-64 px-4 py-2 border border-gray-300 rounded-md"
					/>
					<button
						disabled={searchKey.length === 0}
						className=" bg-transparent border-0 outline-none"
					>
						<Link href={`/recipe/${searchKey}`} className="group">
							<FaArrowRight
								className=" cursor-pointer text-green-600 shadow-md rounded-full bg-white p-2 group-hover:bg-green-600 group-hover:text-white transition duration-300 ease-in-out"
								size={40}
							/>
						</Link>
					</button>
				</div>
			</div>
		</main>
	);
}
