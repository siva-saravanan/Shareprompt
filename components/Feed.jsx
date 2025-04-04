"use client"
import { getSession, useSession  } from '@node_modules/next-auth/react'
import React, { useEffect, useState } from 'react'
import PromptCard from './PromptCard';
import axios from '@node_modules/axios';
import { useRouter } from '@node_modules/next/navigation';


const PromptCardList = ({response , handleTagClick , handleRedirect})=>{
    return (
    
    
    <div className='mt-16 prompt_layout'>
      <div className='flex flex-col gap-3'>
        {response.length > 0 ? 
        (response.map(post =>
          <PromptCard key={post._id} post={post} handleTagClick={handleTagClick} handleRedirect={handleRedirect} ></PromptCard>
        ))
        : <div></div>

      }
      </div>

      </div>
    )
}


const Feed = () => {
  // we have to make a get call to fetch all the 
  //details for the feed
  const {data :session} =useSession() ;  
  const [isfetching , setisfetching] =useState(true) ; 
  const [response, setresponse] =  useState([]); 
  const [SearchText , setSearchText] = useState("") ;
  const router = useRouter() ; 

  useEffect(()=>{
    let debounceTimeout ;
    const fetchdata = async()=>{
      try{
      
      const res = await axios.get("api/prompt/home?filter="+SearchText) ;
        setresponse(res.data) ; 
        console.log(res.data);
       
            
      setisfetching(false)  ;
      
   }
   catch(error){
       console.log(`${error.message}error occured`)
       setisfetching(true)  ;
       
   }
  
    }
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(fetchdata, 500); // Debounce for 1 second

    return () => clearTimeout(debounceTimeout);

  } ,[SearchText])

  const handleTagClick= (value)=>{
   
      setSearchText(value) ; 
  }
 

  const handleRedirect = (value)=>{
    router.push(`/user/${value}`)

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

    
      <PromptCardList
      response = {response} 
      handleTagClick = {handleTagClick}
      handleRedirect ={handleRedirect}
      ></PromptCardList>
     
    </section>
  )
}

export default Feed