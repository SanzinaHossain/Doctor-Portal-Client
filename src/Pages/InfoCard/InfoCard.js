import React from 'react'

const InfoCard = ({img,bgClass,card_tittle,des}) => {
    console.log(card_tittle)
  return (
   <div className={`card lg:card-side bg-base-400 shadow-xl ${bgClass}`}>
  <figure className="pl-3 pr-3 pt-4 lg:pt-0"><img src={img} alt="Album"/></figure>
  <div class="card-body">
    <h2 className="text-2xl text-white bold text-center lg:text-left ">{card_tittle}</h2>
    <p className='text-white text-center lg:text-left'>{des}</p>
  </div>
</div>
  )
}

export default InfoCard