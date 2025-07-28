import { Activity, Link2, NotebookPen, QrCode } from 'lucide-react'
import React from 'react'

const Section4 = () => {
  return (
    <div className='p-5 px-3 flex flex-col md:flex-row justify-center gap-4 md:gap-10 items-center top-0 w-full lg:px-26'>
        {/* 1st text */}
        <div className='flex flex-col gap-2 p-8 md:p-2'>
            <span className='font-bold text-lg lg:text-4xl'>Why choose <span className='text-primary'>Scissors</span></span>
            <span className='font-normal text-xs sm:text-sm'>Scissors is the hub of everything that has to do with your link management.
                 We shorten your URLs, allow you creating custom ones for your personal, business, event usage.
                  Our swift QR code creation, management and usage tracking with advance
                   analytics for all of these is second to none. </span>
        </div>
        {/* other texts */}
        <div>
            <ul className='items-center justify-center text-xs relative grid grid-cols-2 px-4 md:p-2 gap-6 lg:gap-10 lg:text-lg'>
                <li className='font-bold grid gap-2'><Link2 className='text-primary' />URL Shortening <h4 className='font-normal text-xs sm:text-sm'>Scissor allows you to shorten URLs of your business, events. Shorten your URL at scale, URL redirects.</h4></li>
                <li className='font-bold grid gap-2'><NotebookPen className='text-primary' />Custom URLs <h4 className='font-normal text-xs sm:text-sm'>With Scissor, you can create custom URLs, with the length you want! A solution for socials and businesses.</h4></li>
                <li className='font-bold grid gap-2'><QrCode className='text-primary' />QR Codes <h4 className='font-normal text-xs sm:text-sm'>Generate QR codes to your business, events. Bring your audience and customers to your doorstep with this scan and go solution.</h4></li>
                <li className='font-bold grid gap-2'><Activity className='text-primary' />Data Analytics <h4 className='font-normal text-xs sm:text-sm'>Receive data on the usage of either your shortened URL, custom URLs or generated QR codes. Embedded to monitor progress.</h4></li>
            </ul>
        </div>
    </div>
  )
}

export default Section4