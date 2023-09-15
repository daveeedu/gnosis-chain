import React, { useState } from 'react'

const CardComp = ({data}) => {
  const [revealedCard, setRevealedCard] = useState(3);
  const handleCardClick = (cardId) => {
    setRevealedCard(cardId === revealedCard ? null : cardId);
  };


  return (
    <div className="flex -space-x-[8%] mt-10 justify-center  relative text-start z-20">
    {data.map((card) => (
      <div
        key={card.id}
        className={`bg-[#11453B] h-60 drop-shadow-2xl shadow-2xl text-white rounded-[10px] p-10 w-[30%] transform transition-transform ${
          card.id === revealedCard ? 'translate-x-0' : 'translate-x-20'
        } cursor-pointer ${card.id === revealedCard ? 'z-[2]' : ''}`}
        onClick={() => handleCardClick(card.id)}
      >
        <h1 className=" text-[1.7em] font-bold mb-2 text-[#B4A572]">{card.title}</h1>
        <div className="overflow-hidden text-[0.7em] text-[400] leading-[24px] text-[#B4A572]">
          {card.id === revealedCard ? (
            <p>{card.content}</p>
          ) : (
            <p>{card.content.slice(0, card.content.length / 2)}</p>
          )}
        </div>
        <div className='flex justify-end mb-3 fixed'>
        <img src={card?.img} alt='avater' className='w-[35%] rounded-2xl' />
            </div>
      </div>
    ))}
  </div>
  )
}

export default CardComp