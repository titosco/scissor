import { Facebook, Instagram, Linkedin, LinkIcon, Twitter } from 'lucide-react'
import React from 'react'

const Section9 = () => {
  return (
       <div className='p-5 px-3 flex flex-col md:flex-row justify-center gap-4 md:gap-10 items-center top-0 w-full lg:px-26'>
        {/* 1st text */}
        <div className='flex flex-col gap-2 p-8 md:p-2'>
            <span className='font-bold flex gap-2'><LinkIcon /> SCISSOR</span>
            <span className='font-normal flex text-xs sm:text-sm gap-2'> <Twitter /><Instagram /><Linkedin /><Facebook /></span>
        </div>
        {/* other texts */}
        <div>
            <ul className='items-center justify-center relative grid grid-cols-4 px-4 md:p-2 gap-6 lg:gap-10 text-xs sm:text-sm'>
                <li className='font-bold grid gap-2'>Why Scissor ? <h4 className='font-normal'>Scissor 101 Integrations & API Pricing</h4></li>
                <li className='font-bold grid gap-2'>Solutions<h4 className='font-normal'>Social Media Digital Marketing Customer Service For Developers</h4></li>
                <li className='font-bold grid gap-2'>Products<h4 className='font-normal'>Link Management QR Codes Link-in-bio</h4></li>
                <li className='font-bold grid gap-2'>Company <h4 className='font-normal'>About Scissor Careers Partners Press Contact Reviews</h4></li>
                <li className='font-bold grid gap-2'>Resources<h4 className='font-normal'>Blog Resource Library Developers App Connectors Support Trust Center Browser Extension Mobile App</h4></li>
                <li className='font-bold grid gap-2'>Features<h4 className='font-normal'>Branded Links Mobile Links Campaign Management & Analytics QR Code generation</h4></li>
                <li className='font-bold grid gap-2'>Legal<h4 className='font-normal'>Privacy Policy Cookie Policy Terms of Service Acceptable Use Policy Code of Conduct</h4></li>
            </ul>
        </div>
    </div>
  )
}

export default Section9