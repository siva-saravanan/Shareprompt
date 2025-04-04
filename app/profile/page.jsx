'use client'


import { useSession } from "next-auth/react";
import axios from "axios";

import { useEffect, useState } from "react";
import PromptCard from "@components/PromptCard";
import { useRouter } from "@node_modules/next/navigation";



const Profile = ()=>{
    const { data: session } = useSession();
    const [posts , setposts] = useState([]) ;  
    const router =  useRouter();
    const handleDelete = async(post)=>{
        const deletePost = await axios.delete(`/api/prompt/${post._id}`) ; 
        // remove that post from the page 
        const updated_posts = posts.filter(p=>(post._id!= p._id)) ; 
        setposts(updated_posts);

    }
    const handleEdit = (post)=>{
        router.push(`/update-prompt/${post._id.toString()}`)
    }
    
const PromptList =({data , handleDelete  , handleEdit})=>{
    return(
        <div className="space-y-6 py-8 sm:columns-2 sm:gap-6 xl:columns-3">   
            {(data.filter((post)=> post.userId.email == session?.user.email)
            .map(post=>( 
            <PromptCard
            key={post._id}
            post = {post}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
        ></PromptCard>)))}  

        </div>
        
    )
}
useEffect(()=>{

    const readpost = async()=>{
        try{    
            const res = await axios.get(`/api/users/${session?.user.id}`) ;
            setposts(...posts ,res.data) ; 
            // console.log(posts)
             console.log(res.data);
             //console.log(session?.user.id) ; //id -> _id
    
        }
        catch(err){
            console.log(`${err.message}error occured`)
        }
    }
    if(session?.user.id) readpost();
    
} ,[session?.user.id])

    return(
        <section className="w-full mt-16">
        <div className="w-full  flex flex-col justify-start">
            <h3 className="font-bold text-5xl bg-gradient-to-r from-orange-600 to-orange-400 text-transparent bg-clip-text p-4">My profile</h3>
            <h1 className="mt-5 text-gray-400">Welcome to your personalized profile page</h1>
            <div className="flex mt-8">
                <PromptList data ={posts} handleDelete = {handleDelete} handleEdit={handleEdit}></PromptList>

            </div>
        </div>
        </section>
    

    )
}


export  default Profile