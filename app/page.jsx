'use client'

import React, { Suspense } from 'react'
import Feed from '@components/Feed'
import { useSession } from '@node_modules/next-auth/react'
import Image from '@node_modules/next/image'
const Home = () => {
  const {data :session} = useSession() ; 
  return (
    <section className='w-full flex-center flex-col mt-16'>
        <h1 className='head_text text-center'>Discover and share 
        <br className='max-md :hidden'/>
        <span className='orange_gradient text-center'>
              AI POWERED PROMPTS
        </span>
        </h1>
        <p className='desc text-center'>
         Prompting made easy

        </p>
        
        {<Feed />}
        
       
        
    </section>
  )
}

export default Home