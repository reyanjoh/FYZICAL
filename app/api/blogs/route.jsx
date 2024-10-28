import Blog from "@/lib/models/blog"
// import { connect } from "mongoose"
import {connect} from '@/lib/db'
import { NextResponse } from "next/server"
// export const dynamic = 'force-dynamic'


export const GET = async () =>{

    // console.log(process.env.MONGODB_URI);
    
    try {
        await connect()
        const blog = await Blog.find()
        return new NextResponse(JSON.stringify(blog), {status: 200})
    } catch (error) {
        // console.log(error);
        
        return new NextResponse('err'+ error.message, {
            status: 500,
        })
    }
}

export const POST = async (req, res) => {
    try {
        const body = await req.json()
        await connect()
        const newBlog = new Blog(body)
        await newBlog.save();

        return new NextResponse(JSON.stringify({
            message: 'Blog Created', blog: newBlog
        }),
        { status:200 }
    )
        
    } catch (error) {
        return new NextResponse('error: Failed to create new Blog '+ error.message, {
            status: 500,
        })
    }
}