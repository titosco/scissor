import { Button } from '@/components/ui/button'
import React from 'react'

const Section1 = () => {
  return (
    <div className='flex flex-col gap-6 p-8 px-3 max-w-6xl mx-auto font-header md:p-14 md:mx-16 lg:mx-8 lg:py-28 lg:pt-28 lg:pb-10'>
        <h3 className='font-bold text-lg lg:text-4xl text-center'>
            Optimize Your Online Experience With Our<span className='block mt-2 md:mt-6 lg:mt-10'> Advance <span className='text-primary'>URL Shortening</span> Solution </span>
        </h3>
        <h4 className='py-4 px-8 text-xs sm:text-sm text-center'>
            Personalize your shortened URLs to align with your brand identity.
             Utilize custom slugs, branded links,
            and domain customization options to reinforce your brand presence and enhance user engagement.
        </h4>
        <div className='py-3 flex gap-2 self-center'>
            <Button className='flex p-4 gap-2 text-xs md:text-base lg:text-lg'>Sign Up</Button>
            <Button variant='outline' className='flex p-4 gap-2 text-xs md:text-base lg:text-lg text-primary'>Learn more</Button>
        </div>
    </div>
  )
}

export default Section1