"use client";
import React, { useState } from "react";

type FormType = {
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
		title: "",
		description: "",
		prepTime: 0,
		cookTime: 0,
		servings: 0,
		tags: [],
		instructions: [],
		ingredients: [],
		tools: [],
		image: "",
	});

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: name === "tags" ? value.split(",") : value,
		}));
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		console.log(formData); // You can handle the form data submission here
	};

	return (
		<div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
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
						Tools (comma-separated):
					</label>
					<input
						type="text"
						id="tools"
						name="tools"
						value={formData.tools.map((tool) => tool.name).join(",")}
						onChange={handleChange}
						required
						className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
					/>
				</div>

				<button
					type="submit"
					className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default RecipeForm;
