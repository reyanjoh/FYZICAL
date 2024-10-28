import Staff from "@/lib/models/staff"
// import { connect } from "mongoose"
import {connect} from '@/lib/db'
import { NextResponse } from "next/server"
export const dynamic = 'force-dynamic'

export const GET = async () =>{

    // console.log(process.env.MONGODB_URI);
    
    try {
        await connect()
        const staff = await Staff.find()
        // const staff = await Staff.findById({_id: { $oid: "6717e8e102b3d874d3871621"}})
        // const staff = await Staff.findById({_id: "6717e8e102b3d874d3871621"})


        return new NextResponse(JSON.stringify(staff), {status: 200})
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
        const newStaff = new Staff(body)
        await newStaff.save();

        return new NextResponse(JSON.stringify({
            message: 'Staff Created', staff: newStaff
        }),
        { status:200 }
    )
        
    } catch (error) {
        return new NextResponse('error: Failed to create new Staff '+ error.message, {
            status: 500,
        })
    }
}