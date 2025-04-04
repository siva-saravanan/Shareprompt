'use client'

import axios from '@node_modules/axios'
import { useSession } from '@node_modules/next-auth/react'
import React, { useEffect, useState } from 'react'
import { use } from 'react';
import PromptCard from '@components/PromptCard';
const page = ({params}) => {
    const { id } = use(params);
    const [posts, setposts] = useState([]) ; 

    const PromptList =({data})=>{
        return(
            <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">   
                {(data.filter((post)=> post.userId._id == id)
                .map(post=>( 
                <PromptCard
                key={post._id}
                post = {post}
            ></PromptCard>)))}  
    
            </div>
            
        )
    }


    useEffect(()=>{ 
        
        const fetchposts = async()=>{
            try{
                const res  = await axios.get(`/api/users/${id}`) ; 
                setposts(res.data) ; 
                
            }
            catch(err){
                console.log(err.message);
            }
            
        }
        fetchposts();
    },  [id]) ; 
  return (
    <section className="w-full mt-16">
    <div className="w-full  flex flex-col justify-start">
        <h3 className="font-bold text-5xl bg-gradient-to-r from-orange-600 to-orange-400 text-transparent bg-clip-text p-3">Welcome to my profile ,I'm {posts[0]?.userId.username}</h3>
       
        <div className="flex mt-8">
            <PromptList data ={posts}></PromptList>

        </div>
    </div>
    </section>
  )
}

export default page