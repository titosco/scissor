import { Button } from '@/components/ui/button'
import React from 'react'

const Section8 = () => {
  return (
       <div className='p-5 grid md:flex-row justify-center gap-4 md:gap-10 items-center top-0 w-full lg:px-26 bg-card'>
        {/* first header text */}
        <div className='flex flex-col gap-2 justify-center items-center p-3 px-3 md:p-20 lg:p-32 md:mx-16 lg:mx-8 lg:py-28 lg:pt-16 md:pb-2 lg:pb-2'>
            <span className='text-center font-bold text-lg lg:text-4xl text-white'>Revolutionizing Link Optimization</span>
        </div>
        {/* last buttons */}
        <div className='py-2 flex justify-center items-center'>
            <Button className='flex p-4 text-xs md:text-base lg:text-lg'>Get Started</Button>
        </div>
    </div>
  )
}

export default Section8