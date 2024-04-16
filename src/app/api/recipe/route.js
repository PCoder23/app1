import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    try {
        const pageSize = 10;
        const page = 1;
        const skip = (page - 1) * pageSize;
        const totalRecipes = await prisma.recipe.count();
        const totalPages = Math.ceil(totalRecipes / pageSize);
        const recipe = await prisma.recipe.findMany({
            include: {
                tools: true
            },
            skip,
            take: parseInt(pageSize)
        });
        return new NextResponse(JSON.stringify({ recipe, totalPages }));
    } catch (e) {
        console.log(e);
        return new NextResponse(JSON.stringify({ error: e.message }), { status: 500 });
    }
}

export const POST = async (req) => {
    try {
        const pageSize = 10;
        const { searchTerm, page = 1 } = await req.json();
        const skip = (page - 1) * pageSize;
        const totalRecipes = await prisma.recipe.count({
            where: {
                OR: [
                    { slug: { contains: searchTerm } },
                    { title: { contains: searchTerm } },
                    { description: { contains: searchTerm } },
                    { tags: { has: searchTerm } },
                ],
            }
        });
        const totalPages = Math.ceil(totalRecipes / pageSize);
        const recipe = await prisma.recipe.findMany({
            where: {
                OR: [
                    { slug: { contains: searchTerm } },
                    { title: { contains: searchTerm } },
                    { description: { contains: searchTerm } },
                    { tags: { has: searchTerm } },
                ],
            },
            include: {
                tools: true
            },
            skip,
            take: parseInt(pageSize)
        });
        return new NextResponse(JSON.stringify({ recipe, totalPages }));
    } catch (e) {
        console.log(e);
        return new NextResponse(JSON.stringify({ error: e.message }), { status: 500 });
    }
}
