"use client"
import { getSession, useSession } from '@node_modules/next-auth/react'
import React, { useEffect, useState } from 'react'
import PromptCard from './PromptCard';
import axios from '@node_modules/axios';

const Feed = () => {
  // we have to make a get call to fetch all the 
  //details for the feed
  const {data :session} =useSession() ;  
  const [isfetching , setisfetching] =useState(true) ; 
  const [response, setresponse] =  useState([]); 
  const [SearchText , setSearchText] = useState("") ;

  useEffect(()=>{

    const fetchdata = async()=>{
      try{
      
         const res = await axios.get("api/prompt/home") ;
        setresponse(res.data) ; 
       
  
      setisfetching(false)  ;
      
   }
   catch(error){
       console.log(`${error.message}error occured`)
       setisfetching(true)  ;
       
   }
  
    }
    fetchdata() ; 
    console.log(response.length);
    

  } ,[])

  const handleTagClick= ()=>{

  }
  return (
    <section className='feed'>
      <form className='relative w-full flex-center' >
        <input
        className='w-full rounded-lg p-3  text-slate-700 shadow-md focus:outline-none'
        type='text'
        placeholder='search by username tags etc'
        value={SearchText}
        onChange={(e)=>setSearchText(e.target.value)}
        >
        </input>

      </form>

      <div>
        {response.length > 0 ? 
        (response.map(post =>
          <PromptCard key={post._id} post={post} handleTagClick={handleTagClick} ></PromptCard>
        ))
        : <div>loading</div>

      }
      </div>
     
    </section>
  )
}

export default Feed