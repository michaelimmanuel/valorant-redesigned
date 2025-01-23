"use client";
import React from 'react'
import Card from './Card';

const data = [
    {
      "name": "Sunset",
      "imageSrc": "sunset.jpg"
    },
    {
      "name": "Lotus",
      "imageSrc": "lotus.jpg"
    },
    {
      "name": "Pearl",
      "imageSrc": "pearl.jpg"
    },
    {
      "name": "Fracture",
      "imageSrc": "fracture.jpg"
    },
    {
      "name": "Breeze",
      "imageSrc": "breeze.jpg"
    },
    {
      "name": "Icebox",
      "imageSrc": "icebox.jpg"
    },
    {
      "name": "Bind",
      "imageSrc": "bind.jpg"
    },
    {
      "name": "Haven",
      "imageSrc": "haven.jpg"
    },
    {
      "name": "Split",
      "imageSrc": "split.jpg"
    },
    {
      "name": "Ascent",
      "imageSrc": "ascent.jpg"
    }
  ]
  

const Maps = () => {
  return (
    <div className="bg-red-300 p-20">
        <div>
            <h1 className='font-zentry text-7xl font-bold text-white'>Maps</h1>
            <p className='font-regular pt-5 text-white font-extrabold gap-5'>FIGHT AROUND THE WORLD</p>
            <p className='text-white'>
                Purpose-built for team strategies, spectacular plays, and clutch moments. <br/>Make the play others will imitate for years to come...
            </p>
        </div>

        <div className="grid grid-cols-3 gap-5 mt-10">
            {data.map((item, index) => (
                <Card key={index} title={item.name} src={`img/${item.imageSrc}`} index={index}/>
            ))}
        </div>
       
    </div>
  )
}

export default Maps