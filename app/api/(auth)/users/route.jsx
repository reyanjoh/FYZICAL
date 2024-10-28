import User from "@/lib/models/users"
import {connect} from '@/lib/db'
import { NextResponse } from "next/server"

export const GET = async () =>{

    // console.log(process.env.MONGODB_URI);
    
    try {
        await connect()
        const user = await User.find()
        return new NextResponse(JSON.stringify(user), {status: 200})
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
        const newUser = new User(body)
        await newUser.save();

        return new NextResponse(JSON.stringify({
            message: 'User Created', user: newUser
        }),
        { status:200 }
    )
        
    } catch (error) {
        return new NextResponse('error: Failed to create new User '+ error.message, {
        status: 500,
        })
    }
}

export const PATCH = async (req, res) => {
    try {
        const body = await req.json()
        const {userID, newUserName} = body

        
    } catch (error) {
        return new NextResponse('error: Failed to create new User '+ error.message, {
        status: 500,
        })
    }
}