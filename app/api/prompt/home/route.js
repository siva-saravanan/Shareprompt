import Prompt from "@models/prompt";

const { connectDB } = require("@utils/database");


const FeedFetch= async(req,res)=>{

    try{
        await connectDB() ; 
        const posts = await Prompt.find({}).populate("userId")  ;    
        return new Response(
            JSON.stringify(posts) , {
                status : 200
            } )

    }catch(error){
        return new Response(
            `error - ${error.message}` , {
                status : 404
            } )

    }
}

export {FeedFetch as GET} ; 