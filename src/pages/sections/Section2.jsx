import React from 'react'
import Img1 from '../../images/img1.png'
import Img2 from '../../images/img2.png'
import Image from 'next/image'

const Section2 = () => {
  return (
    <div className='flex flex-col w-full justify-center items-center pr-4'>
        <Image alt='' src={Img1} className='mx-auto'/>
        <Image alt='' src={Img2} className=' w-full'/>
    </div>
  )
}

export default Section2