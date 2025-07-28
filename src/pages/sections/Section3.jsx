import React from 'react'

const Section3 = () => {
  return (
    <div className='p-5 px-3 flex flex-col md:flex-row justify-center gap-4 md:gap-16  items-center top-0 w-full  bg-gray-200 lg:px-26'>
        {/* 1st text */}
        <div className='flex gap-2 items-center'>
            <span className='font-bold text-lg lg:text-4xl'>One Stop. <br /> Four <span className='text-primary'>Possibilities</span>.</span>
        </div>
        {/* remaining text */}
        <div>
            <ul className='items-center justify-center text-xs  flex flex-wrap gap-6 lg:gap-10 lg:text-lg'>
                <li className='font-bold'>3M <h4 className='font-normal text-xs sm:text-sm'>Active users</h4></li>
                <li className='font-bold'>60M <h4 className='font-normal text-xs sm:text-sm'>Links & QR <br /> codes created</h4></li>
                <li className='font-bold'>1B <h4 className='font-normal text-xs sm:text-sm'>Clicked & Scanned <br /> connections</h4></li>
                <li className='font-bold'>300K <h4 className='font-normal text-xs sm:text-sm'>App Integrations</h4></li>
            </ul>
        </div>
    </div>
  )
}

export default Section3