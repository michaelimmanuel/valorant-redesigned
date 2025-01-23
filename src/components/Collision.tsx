"use client";
import React from 'react'
import AnimatedTitle from './AnimatedTitle'
import { useEffect, useRef } from "react";
import gsap from 'gsap';
import Image from 'next/image';
const Collision = () => {
    
  return (
    <section className="bg-black pt-48 pb-48 relative z-1">
           <div className='flex-col justify-center items-center'>
            <AnimatedTitle title='COLLISION' containerClass='!text-white'/>
            <div className=' !z-10 flex-center gap-5 mt-5'>
                <div className='typewriter'>
                    <p className='text-white font-extrabold font-general' >EPISODE_09 // ACT III / YR 4</p>
                </div>
            </div>
            </div>
  
    </section>
  )
}

export default Collision