import { Button } from '@/components/ui/button'
import { CircleCheckBig } from 'lucide-react'
import React from 'react'

const Section5 = () => {
  return (
    <div className='p-5 px-3 grid md:flex-row justify-center gap-4 md:gap-10 items-center top-0 w-full lg:px-26'>
        {/* first header text */}
        <div className='flex flex-col gap-2 justify-center items-center p-8 px-3 md:p-20 lg:p-42 md:mx-16 lg:mx-8 lg:py-28 lg:pt-20 lg:pb-10'>
            <span className='text-center font-bold text-lg lg:text-4xl'>A <span className='text-primary'> price perfect </span> for your needs.</span>
            <span className='text-center font-normal text-xs sm:text-sm '>From catering for your personal, business, event, socials needs, you can be rest assured we have you in mind in our pricing.</span>
        </div>
        {/* main cards */}
        {/* card 1 */}
        <div className='mt-4 grid relative md:grid-cols-3 items-center justify-center'>
            <div className='card'>
                <span className=' font-bold text-xs sm:text-sm '>Basic</span>
                <div className=' flex flex-col pt-6'>
                    <span className='font-bold text-lg lg:text-4xl pb-2'>Free</span>
                    <span className='font-bold text-xs sm:text-sm'>Free plan for all users</span>
                </div>
                <ul className='grid pt-4'>
                    <li className=' flex gap-2 pb-4 font-normal text-xs sm:text-sm'><CircleCheckBig size={20} className='text-primary' />Unlimited URL Shortening</li>
                    <li className='flex gap-2 pb-4 font-normal text-xs sm:text-sm'><CircleCheckBig size={20} className='text-primary' />Basic Link Analytics</li>
                    <li className='flex gap-2 pb-4 font-normal text-xs sm:text-sm'><CircleCheckBig size={20} className='text-primary' />Customizable Short Links</li>
                    <li className='flex gap-2 pb-4 font-normal text-xs sm:text-sm'><CircleCheckBig size={20} className='text-primary' />Standard Support</li>
                    <li className='flex gap-2 pb-6 font-normal text-xs sm:text-sm'><CircleCheckBig size={20} className='text-primary' />Ad-supported</li>
                </ul>
            </div>
            {/* card 2 */}
            <div className='bg-card text-white overflow-hidden relative text-start p-12 md:p-10 md:pt-8 md:pb-8 lg:pt-16 lg:pb-16 md:pr-2 rounded-lg items-center'>
                <span className=' font-bold text-xs sm:text-sm '>Professional</span>
                <div className=' flex flex-col pt-6'>
                    <span className='font-bold text-lg lg:text-4xl pb-2'>$15/month</span>
                    <span className='font-bold text-xs sm:text-sm'>Ideal for business creators</span>
                </div>
                <ul className='grid pt-4'>
                    <li className=' flex gap-2 pb-4 font-normal text-xs sm:text-sm'><CircleCheckBig size={20} className='text-white' />Enhanced Link Analytics</li>
                    <li className='flex gap-2 pb-4 font-normal text-xs sm:text-sm'><CircleCheckBig size={20} className='text-white' />Custom Branded Domains</li>
                    <li className='flex gap-2 pb-4 font-normal text-xs sm:text-sm'><CircleCheckBig size={20} className='text-white' />Advanced Link Customization</li>
                    <li className='flex gap-2 pb-4 font-normal text-xs sm:text-sm'><CircleCheckBig size={20} className='text-white' />Priority Support</li>
                    <li className='flex gap-2 pb-6 font-normal text-xs sm:text-sm'><CircleCheckBig size={20} className='text-white' />Ad-free Experience</li>
                </ul>
            </div>
            {/* card 3 */}
            <div className='card'>
                <span className=' font-bold text-xs sm:text-sm '>Teams</span>
                <div className=' flex flex-col pt-6'>
                    <span className='font-bold text-lg lg:text-4xl pb-2'>$25/month</span>
                    <span className='font-bold text-xs sm:text-sm'>Share with up to 10 users</span>
                </div>
                <ul className='grid pt-4'>
                    <li className=' flex gap-2 pb-4 font-normal text-xs sm:text-sm'><CircleCheckBig size={20} className='text-primary' />Team Collaboration</li>
                    <li className='flex gap-2 pb-4 font-normal text-xs sm:text-sm'><CircleCheckBig size={20} className='text-primary' />User Roles and Permissions</li>
                    <li className='flex gap-2 pb-4 font-normal text-xs sm:text-sm'><CircleCheckBig size={20} className='text-primary' />Enhanced Security</li>
                    <li className='flex gap-2 pb-4 font-normal text-xs sm:text-sm'><CircleCheckBig size={20} className='text-primary' />API Access</li>
                    <li className='flex gap-2 pb-6 font-normal text-xs sm:text-sm'><CircleCheckBig size={20} className='text-primary' />Dedicated Account Manager</li>
                </ul>
            </div>
        </div>
        {/* last buttons */}
        <div className='py-6 flex gap-2 justify-center items-center'>
            <Button variant='outline' className='flex p-4 gap-2 text-xs md:text-base lg:text-lg text-primary'>Get Custom Pricing</Button>
            <Button className='flex p-4 gap-2 text-xs md:text-base lg:text-lg'>Select pricing</Button>
        </div>
    </div>
  )
}

export default Section5