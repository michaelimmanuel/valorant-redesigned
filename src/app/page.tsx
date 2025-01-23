import React from 'react'
import Hero from '../components/Hero'
import About from '@/components/About'
import Collision from '@/components/Collision'
import Agents from '@/components/Agents'
import Maps from '@/components/Maps'

const page = () => {
  return (
    <main className='relative min-h-screen min-w-screen overflow-x-hidden '>
        <Hero/>
        <About/>
        <Collision/>
        <Agents/>
        <Maps/>
    </main>
  )
}

export default page