import prisma from "../../../lib/prisma";
import {NextResponse} from "next/server";

export const POST = async (req)=>{
    if(req.method === "POST"){
        try{
            const {title,slug,description,prepTime,cookTime,servings,tags,instructions,ingredients,tools,image} = await req.json();
            const recipe = await prisma.recipe.create({
                data:{
                    title,
                    slug,
                    description,
                    prepTime,
                    cookTime,
                    servings,
                    tags,
                    instructions,
                    ingredients,
                    tools:{
                        create:tools,
                    },
                    image
                }
            })
            return new NextResponse(JSON.stringify(recipe))

        }catch(e){
            console.log(e)
            return new NextResponse(JSON.stringify({error:e.message}),{status:500})
        }
    }
}