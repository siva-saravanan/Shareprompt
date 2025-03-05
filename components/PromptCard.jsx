"use client"
import React from 'react'

const PromptCard = ({post , handleTagClick}) => {
  return (
      <div className='mt-16 prompt_layout max-w-[50px]'>
        <div className='flex flex-col justify-center items-center gap-5'>

        
        <div className='flex justify-between items-start gap-5'>
            <div className='flex-1 flex justify-start items-center gap-3 cursor-pointer'>
            image
            </div>

            <div className='flex flex-col justify-start items-center'>
              <div className='flex justify-start items-center font-bold'>{post.userId.username}</div>
              <div className='flex justify-start items-center font-bold'>{post.userId.email}</div>
            </div>

            <div className='flex justify-center items-center'>
              copy
            </div>

        </div>
        <div className='mt-8 flex items-center justify-center'>
          <p className='text-center'>{post.prompt}</p>
        </div>
      
        </div>

    </div>
  )
}

export default PromptCard