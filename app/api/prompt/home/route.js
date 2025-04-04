import Prompt from "@models/prompt";

const { connectDB } = require("@utils/database");


const FeedFetch= async(req)=>{
    const searchParams = new URL(req.url).searchParams;
    const filter = searchParams.get("filter")?.trim() || "";  
    try{
        await connectDB() ; 
        const posts = await Prompt.find({
            $or: [
                { prompt: { $regex: filter} } ,
                { tag: { $regex: filter } } , 
                { 
                    'userId.username': { $regex: filter }, // Regex for nested userId.username
                    'userId.email': { $regex: filter}     // Regex for nested userId.email
                  }
            ]
        }).populate("userId")  ;    
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