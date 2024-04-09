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



// model Recipe {
//     id            String  @default(cuid()) @id
//     slug          String  @unique
//     title         String
//     description   String
//     prepTime      Int
//     cookTime      Int
//     servings      Int
//     tags          String[]
//     instructions  String[]
//     ingredients   String[]
//     tools         Tool[]
//     image         String
//   }
  
//   model Tool {
//     id        Int     @id @default(autoincrement())
//     name      String
//     link      String
//     recipe    Recipe  @relation(fields: [recipeId], references: [id])
//     recipeId  String
//   }