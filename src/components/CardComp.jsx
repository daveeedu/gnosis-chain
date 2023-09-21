import React, { useState } from 'react'
import { IGithub, IInstagram, ILinkedIn, ITwitter } from '../utils/icons.utils';

const CardComp = ({data}) => {


  return (
    <div className="lg:grid lg:grid-cols-3 gap-4 mt-10 relative text-start">
    {data.map((card) => (
      <div
        key={card?.id}
        className={`bg-[#11453B] h-60 drop-shadow-2xl relative  text-white rounded-lg p-5 lg:w-full md:w-[70%] w-[95%] m-auto lg:m-0 mb-3 lg:mb-0 transform transition-transform `}
      >
        <h1 className=" text-[1.7em] font-bold mb-2 text-[#B4A572]">{card?.title}</h1>
       <div className='grid grid-cols-2'>
       <div className="overflow-hidden  text-[0.7em] text-[400] leading-[18px] text-[#B4A572]">
            <p>{card?.content}</p>
            <div className='flex jsutify-betwen gap-2 absolute bottom-5'>
              <a href={card?.links?.twitter} >
              <img src={ITwitter} alt='twitter' className='w-[1.5em] h-[1.5em] '/>
              </a>
              <a href={card?.links?.linkedin} >
              <img src={ILinkedIn} alt='linkedin' className='w-[1.5em] h-[1.5em]'/>
              </a>
              <a href={card?.links?.instagram} >
              <img src={IInstagram} alt='instagram' className='w-[1.5em] h-[1.5em]'/>
              </a>
              <a href={card?.links?.github} >
              <img src={IGithub} alt='github' className='w-[1.5em] h-[1.5em]'/>
              </a>
              </div>
        </div>
        <div className='flex justify-end mb-3  '>
        <img src={card?.img} alt='avater' className='2xl:w-[40%] xl:w-[60%] lg:w-[80%] md:w-[35%] w-[65%] rounded-2xl' />
            </div>
       </div>
      </div>
    ))}
  </div>
  )
}

export default CardComp