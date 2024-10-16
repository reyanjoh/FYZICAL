import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL

export const connect = async () => {
    const connectionState = mongoose.connection.readyState;

    if (connectionState === 1) {
        console.log('connected');
        return;
    }

    if (connectionState === 2 ) {
        console.log('connecting. . .');
        return;
    }

    try {
        mongoose.connect(MONGODB_URL, {
            dbName: 'Fyzical',
            bufferCommands: true,
        });
        console.log('connected')
    } catch (error) {
        console.log(error);
        throw new Error("error",  error);        
    }
}




