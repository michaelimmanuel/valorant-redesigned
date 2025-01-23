"use client";

import React, { useEffect, useRef } from 'react'
import Button from './Button'
import { TiLocationArrow } from 'react-icons/ti';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

const hero = () => {

    const [currentIndex, setCurrentIndex] = React.useState(1);
    const [hasClicked, setHasClicked] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);
    const [loadedVideos, setLoadedVideos] = React.useState(0);

    const handleVideoLoad = () => {
        setLoadedVideos((prev) => prev + 1);
    }

    const totalVideos = 3;
    const nextVdRef = useRef<any>(null);
    const handleMiniVdClick = () => {
        setHasClicked(true);
        setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
    }


    useGSAP(() => {
        if (hasClicked) {
            gsap.set("#next-video", {visibility: 'visible'});
            gsap.to("#next-video", {
                transformOrigin: 'center center',
                scale: 1,
                width: '100%',
                height: '100%',
                duration: 1,
                ease: 'power1.inOut',
                onStart: () => {
                    nextVdRef.current.play();
                }
            });

            gsap.from("#current-video", {
                transformOrigin: 'center center',
                scale: 0,
                duration: 1.5,
                ease: 'power1.inOut',
                onStart: () => {
                    nextVdRef.current.play();
                }
            });
            
        }
    }, {dependencies: [currentIndex], revertOnUpdate:true});

    useGSAP(() => {
        gsap.set('#video-frame', {
            clipPath: 'polygon(14% 0, 72% 0, 90% 90%, 0 100%)',
            borderRadius: '0 0 40% 10%'
        });

        gsap.from('#video-frame', {
            clipPath: 'polygon(0% 0%, 100% 0, 100% 100%, 0 100%)',
            borderRadius: '0 0 0 0',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '#video-frame',
                start: 'center center',
               
                scrub: true,
            }
        });
    });

    const upcomingVideoIndex = (currentIndex % totalVideos + 1);

    const getVideoSource = (index : number) => {
        return `/videos/hero-${index}.mp4`;
    }

   


    return (
        <div className='relative h-dvh w-screen overflow-x-hidden '>
            
            <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'>
                <div>
                    <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                        <div onClick={handleMiniVdClick} className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100'>
                            <video ref={nextVdRef} src={getVideoSource(upcomingVideoIndex)} loop muted id="current-video" className='size-64 origin-center scale-150 object-cover object-center' onLoadedData={handleVideoLoad}></video>
                        </div>
                    </div>
                    <video ref={nextVdRef} src={getVideoSource(currentIndex)} loop muted id="next-video" className='absolute-center invisible absolute z-20 size-64 object-cover object-center' onLoadedData={handleVideoLoad}></video>
                    <video src={getVideoSource(currentIndex === totalVideos - 1 ? 1 : currentIndex)} autoPlay loop muted className='absolute left-0 top-0 size-full object-cover object-center' onLoadedData={handleVideoLoad}></video> 
                </div>
                <h1 className="special-font hero-heading absolute bottom-20 right-5 z-40 text-blue-75">Tactical Shooter</h1>
                <div className="absolute left-0 top-0 z-40 size-full">
                    <div className="mt-24 px-5 sm:px-10">
                        <h1 className='special-font hero-heading text-red-300'><b>VALORANT</b></h1>
                    
                        <Button
                            id="watch-trailer"
                            title="Play Now"
                            leftIcon={<TiLocationArrow />}
                            ContainerClass="bg-red-300 flex-center gap-1"
                        />
                    </div>
                </div>
            </div>
            
            <h1 className="special-font hero-heading absolute bottom-20 right-5 text-red-300">Tactical Shooter</h1>
            
        </div>
    )
}

export default hero