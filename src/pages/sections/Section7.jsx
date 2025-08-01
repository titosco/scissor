import { Minus, Plus } from 'lucide-react'
import React from 'react'

const Section7 = () => {
  return (
    <div className='grid itmes-center justify-center p-8 px-3 max-w-6xl mx-auto font-header md:p-14 md:mx-16 lg:mx-8 lg:py-22 lg:pt-28 lg:pb-10 lg:px-26'>
        <span className='text-center font-bold text-lg lg:text-4xl'>FAQs</span>
        <ul className='grid pt-4 p-14 md:p-26 lg:p-34 md:pt-8 md:pb-8 lg:pt-16 lg:pb-16 items-center'>
            <li className='pb-6 font-normal text-xs sm:text-sm border-b border-gray-300'>
                <div className="flex justify-between items-center gap-2">
                  <span>How does URL shortening work?</span>
                  <Minus className='justify-end' size={24}/>
                </div>
                <span className='block mt-2'>
                  URL shortening works by taking a long URL and creating a shorter,
                  condensed version that redirects to the original URL.
                  When a user clicks on the shortened link,
                  they are redirected to the intended destination.
                </span>
            </li>
            <li className='flex justify-between items-center gap-2 pb-6 font-normal text-xs sm:text-sm border-b border-gray-300'>Is it necessary to create an account to use the URL shortening service? <Plus className='justify-end' size={24} /></li>
            <li className='flex justify-between items-center gap-2 pb-6 font-normal text-xs sm:text-sm border-b border-gray-300'>Are the shortened links permanent? Will they expire?<Plus className='justify-end' size={24} /></li>
            <li className='flex justify-between items-center gap-2 pb-6 font-normal text-xs sm:text-sm border-b border-gray-300'>Are there any limitations on the number of URLs I can shorten?<Plus className='justify-end' size={24} /></li>
            <li className='flex justify-between items-center gap-2 pb-6 font-normal text-xs sm:text-sm border-b border-gray-300'>Can I customize the shortened URLs to reflect my brand or content?<Plus className='justify-end' size={24} /></li>
            <li className='flex justify-between items-center gap-2 pb-6 font-normal text-xs sm:text-sm border-b border-gray-300'>Can I track the performance of my shortened URLs?<Plus className='justify-end' size={24} /></li>
            <li className='flex justify-between items-center gap-2 pb-6 font-normal text-xs sm:text-sm border-b border-gray-300'>How secure is the URL shortening service?.<Plus className='justify-end' size={24} /></li>
            <li className='flex justify-between items-center gap-2 pb-6 font-normal text-xs sm:text-sm border-b border-gray-300'>What is a QR code and what can it do?<Plus className='justify-end' size={24} /></li>
            <li className='flex justify-between items-center gap-2 pb-6 font-normal text-xs sm:text-sm border-b border-gray-300'>Is there an API available for integrating the URL shortening service.<Plus className='justify-end' size={24} /></li>
        </ul>
        {/* soemthing added */}
    </div>
  )
}

export default Section7