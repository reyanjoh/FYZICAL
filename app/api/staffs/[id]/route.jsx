import Staff from "@/lib/models/staff"
// import { connect } from "mongoose"
export const dynamic = 'force-dynamic'
import {connect} from '@/lib/db'
import { NextResponse } from "next/server"

export const GET = async (req, _id) =>{

    const id = JSON.stringify(_id.params.id);
       
    try {
        await connect()
        
        const staff = await Staff.findById(`${JSON.parse(id)}`)

        return new NextResponse(JSON.stringify(staff), {status: 200})
    } catch (error) {
        console.log(error);
        
        return new NextResponse('err'+ error.message, {
            status: 500,
        })
    }
}


// export const POST = async (req, res) => {
//     try {
//         const body = await req.json()
//         await connect()
//         const newStaff = new Staff(body)
//         await newStaff.save();

//         return new NextResponse(JSON.stringify({
//             message: 'Staff Created', staff: newStaff
//         }),
//         { status:200 }
//     )
        
//     } catch (error) {
//         return new NextResponse('error: Failed to create new Staff '+ error.message, {
//             status: 500,
//         })
//     }
// }