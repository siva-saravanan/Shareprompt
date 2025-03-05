import React from 'react'
import Feed from '@components/Feed'
const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
        <h1 className='head_text text-center'>Discover and share 
        <br className='max-md :hidden'/>
        <span className='orange_gradient text-center'>
              AI POWERED PROMPTS
        </span>
        </h1>
        <p className='desc text-center'>
          promptopia is a tool eto make the ease of prompting engineering 

        </p>
        <Feed></Feed>
    </section>
  )
}

export default Home