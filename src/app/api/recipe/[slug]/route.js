import prisma from '../../../../lib/prisma'
import {NextResponse} from 'next/server'

export const GET = async (req, {params}) => {
    try{

        const { slug } = params
        const recipe = await prisma.recipe.findUnique({
            where: { slug },
      include: { tools: true },
    })
    
    if (!recipe) {
        return new NextResponse(null, { status: 404 })
    }
    
    return new NextResponse(JSON.stringify(recipe))
}catch (error) {
    return new NextResponse(null, { status: 500 })
}
  }
