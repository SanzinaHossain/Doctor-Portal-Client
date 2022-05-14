import React from 'react'
import treatment from "../../assets/images/treatment.png"
const Exceptional = () => {
  return (
    <div class="hero min-h-screen px-9 lg:px-44 mt-9 lg:mt-9">
  <div class="hero-content flex-col lg:flex-row">
    <img src={treatment} class="lg:max-w-l sm:max-w-sm rounded-lg shadow-2xl" />
    <div className='pl-0 lg:pl-12'>
      <h1 class="text-5xl font-bold">Exceptional Dental Care, On Your Terms</h1>
      <p class="py-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis ex ipsa optio reprehenderit. Quod odit animi obcaecati aut aperiam dignissimos recusandae, iusto accusantium ex non repellendus aliquid tenetur rem. Nobis.</p>
      <button class="btn btn-primary uppercase bold text-white font-bold bg-gradient-to-r from-secondary to primary">Get Started</button>
    </div>
  </div>
</div>
  )
}

export default Exceptional