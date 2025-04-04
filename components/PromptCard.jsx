"use client"
import React, { useState } from 'react'
import Image from '@node_modules/next/image';
import { usePathname } from '@node_modules/next/navigation';
import { useSession } from '@node_modules/next-auth/react';
const PromptCard = ({ post, handleTagClick , handleEdit , handleDelete ,handleRedirect }) => {
 const [copied , setcopied] =useState("") ; 
  const pathname = usePathname() ; 
  const {data :session} = useSession();
 const handlecopy = ()=>{
  setcopied(post?.prompt)  ; 
  navigator.clipboard.writeText(post?.prompt) ; 
  setTimeout(()=>setcopied("") , 3000) ; 
 }
 // only show the edit and update option in the partcular page alone and only when session users posts is that

  return (
    <div className='prompt_card'>
      <div className='flex justify-between items-start gap-2'>
        <div className='flex-1 flex justify-start items-center gap-3 rounded-full cursor-pointer'>
          <Image
            src={post?.userId?.image}
            height={20}
            width={20}
            alt='profile'
          ></Image>
          <div className='flex flex-col'>
            <h3 className='font-semibold' onClick={()=>handleRedirect(post?.userId?._id)}>{post?.userId?.username}</h3>
            <h3 className='font-normal text-gray-400'>{post?.userId?.email}</h3>
          </div>  
          </div>
          
          <div className='copy_btn' 
          onClick={handlecopy}
          >
          
              <Image
              src={copied === post?.prompt ? '/assets/icons/tick.svg' : '/assets/icons/copy.svg' }
              width={16}
              height={16}
              alt='copy'></Image>
              
          </div>
         
          
      </div>
      <div className='flex flex-col justify-center items-start max-w-full'>
      <div className="mt-5 w-full overflow-auto whitespace-pre-wrap break-words h-[50px]">{post?.prompt}</div>
      <div className='mt-2 font-inner text-sm blue_gradient cursor-pointer w-full'
      onClick={()=> handleTagClick && handleTagClick(post?.tag)}
      >
        #{post?.tag}
      </div>
      </div>
      
      {session?.user.id == post?.userId?._id && pathname ==='/profile' && 
      (<div className='flex  gap-4 justify-end'>
        <p className='text-blue-400 font-satoshi font-normal cursor-pointer'
         onClick={()=>handleEdit(post)}>
          Edit
        </p>
        <p className='text-red-400 font-satoshi font-normal cursor-pointer'
        onClick={()=>handleDelete(post)}>
              Delete        
          </p>
        
      </div>)}
    </div>
  );
};

export default PromptCard;
