'use client'

import axios from 'axios';
import Form from '@components/Form';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

import { useSession } from 'next-auth/react';
const CreatePrompt = () => {
    const {data : session} = useSession() ; 
    const router =  useRouter() ; 
    const [submitting, setsubmitting] = useState(false) ; 
    const [post, setpost] = useState({
        prompt : "" ,
        tag : ""
    })
    const createPrompt = async(e)=>{
        e.preventDefault() ;    //prevent unwanted reloads fromt eh browser 
        setsubmitting(true) ; 

        try{

         
            const response =  await axios.post("/api/prompt/new" , {
                
                    prompt : post.prompt ,
                    userId :session?.user.id , 
                    tag :  post.tag
                
            })
            
            if(response.status === 201
            ){
                router.push('/') ; 

            }
        }catch(err){
            console.log(`${err.message}, this is the error`)

        }finally{
            setsubmitting(false) ; // no matter what this will run 
        }

    }
  return (
    <Form
    type="Create"
    post={post}
    setpost={setpost}
    submitting ={submitting}
    handleSubmit= {createPrompt}
    
    ></Form>
  )
}

export default CreatePrompt   