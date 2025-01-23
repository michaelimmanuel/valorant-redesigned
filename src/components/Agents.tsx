"use client";
import React, { useRef } from 'react'
import Image from 'next/image'
import Button from './Button'
import { TiLocationArrow } from 'react-icons/ti'
import gsap from 'gsap'

const Agents = () => {

    const cardRef = useRef<HTMLDivElement>(null);

    interface MouseEventWithClient extends React.MouseEvent<HTMLDivElement> {
        clientX: number;
        clientY: number;
    }

    interface CardRef {
        current: HTMLDivElement | null;
    }

    const handleMouseMove = (e: MouseEventWithClient) => {
        const card = cardRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // Mouse X relative to the card
        const y = e.clientY - rect.top; // Mouse Y relative to the card

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20; // Adjust the divisor for tilt intensity
        const rotateY = (centerX - x) / 20;

        gsap.to(card, {
            rotateX: rotateX,
            rotateY: rotateY,
            transformPerspective: 1000,
            duration: 0.2,
            ease: "power2.out",
        });
    };

    const handleMouseLeave = () => {
        gsap.to(cardRef.current, {
        rotateX: 0,
        rotateY: 0,
        transformPerspective: 1000,
        duration: 0.5,
        ease: "power2.out",
        });
    };

  return (
    <div className='p-10 px-20 bg-black text-white overflow-hidden'>
        <div className="flex bg-black font-circular-web items-center justify-center mx-24">
            <div className="flex-1 text-left ">
                <h1 className='font-zentry text-7xl font-bold text-red-300'>YOUR AGENTS</h1>
                <p className='font-regular pt-5 font-extrabold gap-5'>CREATIVITY IS YOUR GREATEST WEAPON.</p>
                <p>
                    More than guns and bullets, you’ll choose an Agent armed with adaptive, <br/> swift, and lethal abilities that create opportunities to let your gunplay shine. <br/> No two Agents play alike, just as no two highlight reels will look the same
                </p>
                <Button title="Play Now" id="watch-trailer"  ContainerClass="bg-red-300 flex-center gap-1 mt-5 !bg-red-300 font-extrabold"/>
            </div>
            <div className="glass-card ml-10"
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}>
                <Image src="/img/agents.png" alt="agents" width={700} height={700} quality={100}/>
            </div>
           
        </div>
    </div>
  )
}

export default Agents