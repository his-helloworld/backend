import mongoose from 'mongoose';
import { DB_NAME } from '../constrants.js';


const connectDB = async () => {
    try {
       const connctionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`\n MongoDB connected !! DB HOSt:${connctionInstance.connection.host}`);
    }
    catch (error) {
        console.log("MONGODB connection error ", error);
        process.exit(1)
    }
}

export default connectDB

