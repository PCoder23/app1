import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });


export async function generateMetadata({ params }) {
  const {slug} = params;

    var res = await fetch(`${process.env.APP_URL}/api/recipe/${slug}`);
    if (!res.ok) {
      return <h1>Not Found</h1>
    }
    var recipe = await res.json();

  return {
    title: recipe.title,
    description: recipe.description,
    tags: recipe.tags.join(', '), // Convert tags array to string
    tools: recipe.tools.map(tool => `${tool.name}: ${tool.link}`).join(', '), // Format tools with links
    image: recipe.image
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}