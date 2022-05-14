import React from 'react'
import chair from "../../assets/images/chair.png";
import img from "../../assets/images/bg.png"
const Banner = () => {
  return (
    <section style={{backgroundImage:`url(${img})`}}>
    <div class="hero min-h-screen">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} class="lg:max-w-2xl sm:max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
      <p class="py-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis ex ipsa optio reprehenderit. Quod odit animi obcaecati aut aperiam dignissimos recusandae, iusto accusantium ex non repellendus aliquid tenetur rem. Nobis.</p>
      <button class="btn btn-primary uppercase bold text-white font-bold bg-gradient-to-r from-secondary to primary">Get Started</button>
    </div>
  </div>
</div>
</section>
  )
}

export default Banner