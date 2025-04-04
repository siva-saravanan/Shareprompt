const { default: Prompt } = require("@models/prompt");
const { connectDB } = require("@utils/database")


export const getuserPosts = async(request , {params})=>{
    try{
        await connectDB() ; 

        const prompts = await Prompt.find({userId : params.id}).populate("userId") ;

        return new Response(JSON.stringify(prompts) , {status : 200})

    }
    catch(err){
        return new Response("Failed to fetch prompts created by user", { status: 500 })

    }
}
 