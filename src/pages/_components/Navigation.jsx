"use client"

import { Button } from '@/components/ui/button'
import { ChevronDown, LinkIcon, LucideAlignJustify, X } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

const Navigation = () => {
    const [openMenuBar, setOpenMenuBar] = useState(false);

    const handleClick =()=> {
        setOpenMenuBar(!openMenuBar);
    }
  return (
    <div className='p-5 px-3 shadow-md flex justify-between items-center top-0 fixed w-full z-20 bg-white lg:px-26'>
        {/* logo */}
        <div className='flex gap-2 items-center'>
            <span className='text-primary flex'><LinkIcon /> SCISSOR</span>
        </div>
        {/* main button */}
        <div>
            <ul className='hidden items-center justify-center text-xs md:flex md:gap-8 lg:gap-10 lg:text-lg'>
                <Link href={""}><li className='menu_button text-primary hover:text-blue-900'>My URLs</li></Link>
                <Link href={""}><li className='menu_button flex'>Features <ChevronDown /> </li></Link>
                <Link href={""}><li className='menu_button'>Pricing</li></Link>
                <Link href={""}><li className='menu_button'>Analytics</li></Link>
                <Link href={""}><li className='menu_button'>FAQs</li></Link>
            </ul>
            {/* hamburger menu */}
            <div>
                <LucideAlignJustify onClick={handleClick} className='cursor-pointer hover:text-primary md:hidden'/>
            </div>
        </div>
        {/* sign up button */}
        <div className='hidden md:flex gap-2 items-center'>
            <Button variant="outline" className="flex p-4 gap-2 text-xs md:text-base lg:text-lg text-primary">Log in</Button>
            <Button className="flex p-4 gap-2 text-xs md:text-base lg:text-lg">Try for Free</Button>
        </div>
        {/* side bar menu */}
        <div className={`${openMenuBar ? "translate-x-0 flex": "translate-x-full "} gap-6 fixed top-0 right-0 h-full w-[350px] z-40 backdrop-blur shadow-md flex-col items-start justify-start pt-4 pl-8 transition-transform duration-500 ease-in-out md:hidden`}>
            <X onClick={handleClick} className='cursor-pointer hover:text-primary'/>
            <ul className='grid items-center md:flex gap-6 text-xs md:gap-10 lg:text-lg'>
                <Link href={""}><li className='menu_button text-primary hover:text-blue-900'>My URLs</li></Link>
                <Link href={""}><li className='menu_button flex'>Features <ChevronDown /> </li></Link>
                <Link href={""}><li className='menu_button'>Pricing</li></Link>
                <Link href={""}><li className='menu_button'>Analytics</li></Link>
                <Link href={""}><li className='menu_button'>FAQs</li></Link>
            </ul>
            <div className='flex flex-col gap-2 items-start'>
             <Button variant="outline" className="flex p-4 gap-2 text-xs md:text-base lg:text-lg text-primary">Log in</Button>
             <Button className="flex p-4 gap-2 text-xs md:text-base lg:text-lg">Try for Free</Button>
            </div>
        </div>
    </div>
  )
}

export default Navigation