"use client";
import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import AnimatedTitle from './AnimatedTitle';


const About = () => {
    gsap.registerPlugin(ScrollTrigger)

    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#clip',
                start: 'center center',
                end: '+=900 center',
                scrub: 0.5,
                pin: true,
                pinSpacing: true
            }
        })

        clipAnimation.to('.mask-clip-path', {
            width: '100vw',
            height: '100vh',
            borderRadius: 0,
        })
    })

    

  return (
    <div id="about" className='min-h-screen w-screen'>
        <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">

            <AnimatedTitle title='DEFY THE LIMITS' containerClass='!text-black'/>
            <div className="about-subtext !w-3/4 ">
                <p className='font-extrabold'>WE ARE VALORANT</p>
                <p>Blend your style and experience on a global, competitive stage.</p>
                <p>Take on foes across Competitive and Unranked modes as well as Deathmatch and Spike Rush.</p>
            </div>
        </div>

        <div className="h-dvh w-screen" id='clip'>
            <div className="mask-clip-path about-image">
                <img src="img/about.jpg" alt="about" className="absolute left-0 top-0 size-full object-cover"/>
            </div>
        </div>
    </div>
  )
}

export default About