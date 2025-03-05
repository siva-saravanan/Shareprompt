import Prompt from "@models/prompt";
import User from "@models/user";
import { connectDB } from "@utils/database";

const createprompt = async(req , res)=>{
    const post = await req.json();
    //check user id valid or not 
    try{
        await connectDB() ; 
        // const existing_user = await User.findById(post.userId) ;
        // if(!existing_user){
        //     return  new Response("user not found" , {status:404}) ; 
        // }
        const newprompt = await Prompt.create({
            userId :  post.userId  ,
            prompt : post.prompt , 
            tag : post.tag
        })

        return new Response(JSON.stringify(newprompt), {
            status : 201
        } )

    }
    catch(error){
        return new Response(`creation failed ${error.message}`, {
            status :404 
        })

    }
    

}

export {createprompt as POST   }