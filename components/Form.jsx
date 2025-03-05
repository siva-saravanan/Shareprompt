import React from 'react'
import Link from 'next/link'
const Form = ({
    type,post,setpost,submitting,handleSubmit,
}) => {
  return (
    <section className='w-full max-w-full flex-start flex-col '>
        <h1 className='head_text text-left'>
            <span>{type} post  </span>
        </h1>
        <p className='desc text-left max-w-md'>
        {type} and share the prompt and 
        run your imagination to the world 
        </p>
        <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-full flex flex-col gap-7 glassmorphism'
        >
        <label>
            <span className='text-base text-grey-700 font-satoshi font-semibold'>
                your AI prompt 
            </span>
        </label>
        <textarea 
        value={post.prompt}
        onChange={(e)=>{setpost({...post ,prompt : e.target.value})}}
        placeholder='write your prompt here'
        required

        className='w-full h-[200px] p-3 mb-2 text-black border border-white  focus:outline-none'>

        </textarea>


        <label>
            <span className='text-base text-grey-700 font-satoshi font-semibold'>
                Tag-{`web development and prompt engg`} 
            </span>
        </label>
        <textarea 
        value={post.tag}
        onChange={(e)=>{setpost({...post ,tag : e.target.value})}}
        placeholder='mention  your tags here'
        required
        
        className='w-full h-[200px] p-3 mb-2 text-black border border-white  focus:outline-none'>

        </textarea>
        <div className='flex-end mt-5 gap-3'>
            <Link href='/' className='text-grey-500 text-lg text-white font-semibold bg-slate-400 p-2 rounded-2xl'>
                cancel
            </Link>
            <button className='bg-orange-500 text-white font-semibold  text-lg p-2 ml-5 rounded-2xl'
            onClick={()=> handleSubmit}>
                submit
            </button>
        </div>
        </form>
       
    </section>
  )
}

export default Form