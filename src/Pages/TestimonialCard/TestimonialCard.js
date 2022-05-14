import React from 'react'

const TestimonialCard = ({img,name,des,city}) => {
  return (
    
    <div class="card w-70 bg-base-100 shadow-2xl">
     <div class="card-body items-center text-center">
     <p class=" bold">{des}</p>
     </div>
    <figure class="px-10">
       <img src={img} alt="Shoes" class="rounded-xl" />
    </figure>
    <h2 class=" text-center text-2xl pt-2  bold">{name}</h2>
    <h2 class=" text-center pb-5  bold">{city}</h2>
</div>
  )
}

export default TestimonialCard