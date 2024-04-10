"use client";
import { CldUploadButton } from "next-cloudinary";
import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { MdCancel } from "react-icons/md";

type FormType = {
	slug: string;
	title: string;
	description: string;
	prepTime: number;
	cookTime: number;
	servings: number;
	tags: string[];
	instructions: string[];
	ingredients: string[];
	tools: { name: string; link: string }[];
	image: string;
};

const RecipeForm = () => {
	const [formData, setFormData] = useState<FormType>({
		slug: "",
		title: "",
		description: "",
		prepTime: 0,
		cookTime: 0,
		servings: 0,
		tags: [],
		instructions: [],
		ingredients: [],
		tools: [{ name: "", link: "" }],
		image: "",
	});

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]:
				name === "tags" || name === "instructions" || name == "ingredients"
					? value.split(",")
					: value,
		}));
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		console.log(formData); // You can handle the form data submission here
		formData["slug"] = formData.title.split(" ").join("-").toLowerCase();
		const res = await fetch("/api/create", {
			method: "POST",
			body: JSON.stringify(formData),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await res.json();
		console.log(data);
	};

	return (
		<div className="w-[800px] mx-auto bg-white p-8 rounded-md shadow-md">
			<h2 className="text-2xl font-semibold mb-4">Add Recipe</h2>
			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<label htmlFor="title" className="block text-sm font-medium mb-1">
						Title:
					</label>
					<input
						type="text"
						id="title"
						name="title"
						value={formData.title}
						onChange={handleChange}
						required
						className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
					/>
				</div>

				<div>
					<label
						htmlFor="description"
						className="block text-sm font-medium mb-1"
					>
						Description:
					</label>
					<textarea
						id="description"
						name="description"
						value={formData.description}
						onChange={handleChange}
						required
						className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
					/>
				</div>

				<div className="grid grid-cols-2 gap-4">
					<div>
						<label
							htmlFor="prepTime"
							className="block text-sm font-medium mb-1"
						>
							Prep Time (minutes):
						</label>
						<input
							type="number"
							id="prepTime"
							name="prepTime"
							value={formData.prepTime}
							onChange={handleChange}
							required
							className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
						/>
					</div>

					<div>
						<label
							htmlFor="cookTime"
							className="block text-sm font-medium mb-1"
						>
							Cook Time (minutes):
						</label>
						<input
							type="number"
							id="cookTime"
							name="cookTime"
							value={formData.cookTime}
							onChange={handleChange}
							required
							className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
						/>
					</div>
				</div>

				<div>
					<label htmlFor="servings" className="block text-sm font-medium mb-1">
						Servings:
					</label>
					<input
						type="number"
						id="servings"
						name="servings"
						value={formData.servings}
						onChange={handleChange}
						required
						className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
					/>
				</div>

				<div>
					<label htmlFor="tags" className="block text-sm font-medium mb-1">
						Tags (comma-separated):
					</label>
					<input
						type="text"
						id="tags"
						name="tags"
						value={formData.tags.join(",")}
						onChange={handleChange}
						required
						className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
					/>
				</div>

				<div>
					<label
						htmlFor="instructions"
						className="block text-sm font-medium mb-1"
					>
						Instructions (comma-separated):
					</label>
					<input
						type="text"
						id="instructions"
						name="instructions"
						value={formData.instructions.join(",")}
						onChange={handleChange}
						required
						className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
					/>
				</div>

				<div>
					<label
						htmlFor="ingredients"
						className="block text-sm font-medium mb-1"
					>
						Ingredients (comma-separated):
					</label>
					<input
						type="text"
						id="ingredients"
						name="ingredients"
						value={formData.ingredients.join(",")}
						onChange={handleChange}
						required
						className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
					/>
				</div>

				<div>
					<label htmlFor="tools" className="block text-sm font-medium mb-1">
						Tools:
					</label>
					{formData.tools.map((tool, index) => (
						<div key={index} className="flex items-end gap-4">
							<div className=" grow">
								<label
									htmlFor="name"
									className="block text-sm font-medium mb-1"
								>
									Name:
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.tools[index].name}
									onChange={(e) => {
										const { name, value } = e.target;
										setFormData((prevData) => ({
											...prevData,
											tools: prevData.tools.map((tool, i) => {
												if (i === index) {
													return {
														...tool,
														[name]: value,
													};
												}
												return tool;
											}),
										}));
									}}
									required
									className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
								/>
							</div>

							<div className=" grow">
								<label
									htmlFor="link"
									className="block text-sm font-medium mb-1"
								>
									Link:
								</label>
								<input
									type="text"
									id="link"
									name="link"
									value={formData.tools[index].link}
									onChange={(e) => {
										const { name, value } = e.target;
										setFormData((prevData) => ({
											...prevData,
											tools: prevData.tools.map((tool, i) => {
												if (i === index) {
													return {
														...tool,
														[name]: value,
													};
												}
												return tool;
											}),
										}));
									}}
									required
									className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
								/>
							</div>

							{index < formData.tools.length - 1 ? (
								<div>
									<button
										type="button"
										className="text-red-500 hover:text-red-600 transition-colors duration-300 !bg-red-300"
										onClick={() =>
											setFormData((prevData) => ({
												...prevData,
												tools: prevData.tools.filter((_, i) => i !== index),
											}))
										}
									>
										<MdCancel />
									</button>
								</div>
							) : (
								<div>
									<button
										type="button"
										className="text-blue-500 hover:text-blue-600 transition-colors duration-300 !bg-blue-300"
										onClick={() =>
											setFormData((prevData) => ({
												...prevData,
												tools: [...prevData.tools, { name: "", link: "" }],
											}))
										}
									>
										<IoIosAddCircle />
									</button>
								</div>
							)}
						</div>
					))}
				</div>
				<div>
					<div>
						<CldUploadButton
							uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME}
							onSuccess={(res) => {
								const data = res.info;

								setFormData((prevData) => ({
									...prevData,
									//@ts-ignore
									image: data.secure_url,
								}));
							}}
						>
							<span>Upload</span>
						</CldUploadButton>
					</div>
				</div>
				<button
					type="submit"
					className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
					onClick={handleSubmit}
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default RecipeForm;
