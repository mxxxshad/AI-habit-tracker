import mongoose from "mongoose";

export const connectDB = async () =>{
    try{
        const uri= process.env.MONGO_URI;
        if(!uri) throw new Error("MONGO_URI IS NOT DEFINED");
        const conn = await mongoose.connect(uri);
        console.log(`MongoDB Connected: ${conn.connection.host}`);        
    } catch (err){
        console.log("MongoDB connection error:" ,err.message);
        
    }
};