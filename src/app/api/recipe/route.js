import prisma from "@/lib/prisma"
import {NextResponse} from "next/server"

export const GET = async (req)=>{
        try{
            const recipe = await prisma.recipe.findMany({
                include:{
                    tools:true
                },
                take:5
            })
            return new NextResponse(JSON.stringify(recipe))

        }catch(e){
            console.log(e)
            return new NextResponse(JSON.stringify({error:e.message}),{status:500})
        }
}