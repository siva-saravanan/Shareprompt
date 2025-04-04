'use client'

import axios from 'axios';
import Form from '@components/Form';
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';

import { useSession } from 'next-auth/react';
const UpdatePrompt = ({params}) => {
    const {data : session} = useSession() ; 
    const router =  useRouter() ; 
    const [submitting, setsubmitting] = useState(false) ; 
    const [post, setpost] = useState({
        prompt : "" ,
        tag : ""
    })

    useEffect(()=>{

        const getpost = async()=>{
            const res = await axios.get(`/api/prompt/${params.id}`) ; 
            setpost(res.data) ; 
            


        }
        getpost();
           

    },  [])



    const updatePrompt = async(e)=>{
        e.preventDefault() ;    //prevent unwanted reloads fromt eh browser 
        setsubmitting(true) ; 

        try{

         
            const response =  await axios.patch(`/api/prompt/${post._id}` , {
                
                    prompt : post.prompt ,
                    userId :session?.user.id , 
                    tag :  post.tag
                
            })
            
            if(response.status === 201){
                router.push('/profile') ; 

            }
        }catch(err){
            console.log(`${err.message}, this is the error`)

        }finally{
            setsubmitting(false) ; // no matter what this will run 
        }

    }
  return (
    
    <Form
    type="Update"
    post={post}
    setpost={setpost}
    submitting ={submitting}
    handleSubmit= {updatePrompt}
    
    ></Form>
  )
}

export default UpdatePrompt ;     