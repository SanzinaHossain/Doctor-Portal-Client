import React from 'react'

const ServiceCard = ({img,name,des}) => {
  return (
    <div>
      <div class="card w-70 bg-base-100 shadow-2xl">
        <figure class="px-10 pt-10">
         <img src={img} alt="Shoes" class="rounded-xl" />
         </figure>
       <div class="card-body items-center text-center">
       <h2 class="card-title">{name}</h2>
       <p>{des}</p>
  </div>
</div>
    </div>
  )
}

export default ServiceCard