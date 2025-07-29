import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Section7 from './Section7'
import Section8 from './Section8'
import Section9 from './Section9'

const Sections = () => {
  return (
    <main className='mt-4 sm:mt-8 pt-18 sm:pt-8 w-full items-center justify-center flex flex-col bg-stone-100'>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
    </main>
  )
}

export default Sections