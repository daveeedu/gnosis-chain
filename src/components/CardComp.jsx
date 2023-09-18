import React, { useState } from 'react'
import { IGithub, IInstagram, ILinkedIn, ITwitter } from '../utils/icons.utils';

const CardComp = ({data}) => {
  const [revealedCard, setRevealedCard] = useState(3);
  const handleCardClick = (cardId) => {
    setRevealedCard(cardId === revealedCard ? null : cardId);
  };


  return (
    <div className="md:flex md:-space-x-[8%] mt-10 justify-center relative text-start">
    {data.map((card) => (
      <div
        key={card.id}
        className={`bg-[#11453B] h-60 drop-shadow-2xl relative  text-white rounded-[10px] p-5 lg:w-[30%] w-[95%] m-auto md:m-0 mb-3 md:mb-0 transform transition-transform ${
          card.id === revealedCard ? 'md:translate-x-0' : 'lg:translate-x-20 md:translate-x-50'
        } cursor-pointer ${card.id === revealedCard ? 'z-[2]' : ''}`}
        onClick={() => handleCardClick(card.id)}
      >
        <h1 className=" text-[1.7em] font-bold mb-2 text-[#B4A572]">{card.title}</h1>
       <div className='flex justify-between'>
       <div className="overflow-hidden  text-[0.7em] text-[400] leading-[24px] text-[#B4A572]">
            <p>{card.content}</p>
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
        <div className='flex justify-end mb-3 '>
        <img src={card?.img} alt='avater' className='w-[75%] rounded-2xl' />
            </div>
       </div>
      </div>
    ))}
  </div>
  )
}

export default CardComp