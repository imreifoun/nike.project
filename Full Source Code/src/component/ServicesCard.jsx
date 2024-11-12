import React from 'react'

const ServicesCard = ({imgURL, label, subtext}) => {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350] w-full rounded-[20px] shadow-3xl px-10 py-16 hover:scale-105'>
        <div className='w-11 h-11 justify-center items-center bg-coral-red rounded-full flex'>
            <img src={imgURL} alt="" srcset="" width={24} height={24}/>
        </div>
        <h3 className='mt-5 font-palanquin text-3xl leading-normal font-bold'>{label}</h3>
        <p className='mt-3 font-palanquin text-lg leading-normal text-slate-gray'>{subtext}</p>
    </div>
  )
}

export default ServicesCard