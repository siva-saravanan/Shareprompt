import mongoose from "mongoose"

const promptschema =  mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : "User" ,
        required : true
    } , 
    prompt : {
        type : String , 
        required : true  ,

    } ,
    tag : {
        type : String , 
        required : true  ,
        
    }
})


const Prompt = mongoose.models.Prompt || mongoose.model("Prompt" , promptschema) ;

export default Prompt ; 
