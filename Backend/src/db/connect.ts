import mongoose from "mongoose";

export const connectDB = async()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/inventory");
        console.log("connected");
    }
    catch(err){
        console.log(err)
        
    }
}