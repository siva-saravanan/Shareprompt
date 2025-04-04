// crud operations regarding the posts are done here


const { default: Prompt } = require("@models/prompt");
const { connectDB } = require("@utils/database")

export const GET = async( req , {params})=>{
    try{
        await connectDB() ; 

        const post  = await Prompt.findById(params.id)  ;

        if(!post) return new Response(`the post is not found ` , {status : 400}) ;

        return new Response( JSON.stringify(post) , {status : 200}) ;

    }
    catch(err){
        return new Response(`error occured ${err.message} ` , {status : 400}) ;
    }

}


export const PATCH = async (req, { params }) => {
    try {
        
        const { prompt, tag } = await req.json();
        
        await connectDB();

      
        const existing_prompt = await Prompt.findOneAndUpdate(
            { _id: params.id },  // Correct usage of params
            { prompt, tag },      // Directly passing updated fields
            { new: true }         // Ensures updated document is returned
        );

        if (!existing_prompt) {
            return new Response("Prompt not found", { status: 404 }); // 404 is better than 401 for "not found"
        }

        return new Response(JSON.stringify(existing_prompt), { status: 201 });
    } catch (err) {
        return new Response(`Error in updating: ${err.message}`, { status: 500 }); // Use 500 for server errors
    }
};


export  const DELETE = async(req,{params})=>{
    try{

        await connectDB() ; 
        await Prompt.findByIdAndDelete(params.id) ;

        return new Response("deleted post" , {status : 200})


    }
    catch(err){
         return new Response(`${err.message}` , {status : 500})
    }
}
