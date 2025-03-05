import mongoose from "mongoose";

const isConnected = false  ; 
export const connectDB = async()=>{
    mongoose.set('strictQuery'  ,true); 
    if(isConnected){
       
        console.log("database is connectedd already")
        return  ; 
     }
     try{
        const conn = await mongoose.connect(process.env.MONGO_URI )
        console.log(`database connected with ${conn.connection.name}`)
        isConnected =true ; 
        return ;
     } catch(error){
        console.log(`error occured ${error}`) ; 
        return ; 
     }
}