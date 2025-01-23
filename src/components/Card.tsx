import React from 'react'

interface CardProps {
    title: string,
    src : string,
    index : number
}

const Card: React.FC<CardProps> = ({ title, src, index }) => {

  return (
    <div
    key={index}
    className="min-w-[300px] h-[400px] flex-shrink-0 bg-gradient-to-br from-gray-800 to-gray-600 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
  >
    <img
      src={src}
      alt={title}
      className="w-full h-full object-cover opacity-90"
    />
    <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white py-2 text-center font-bold">
      {title}
    </div>
  </div>
  )
}

export default Card