import React from 'react'
import back from "../../assets/images/appointment.png"
const HomeContact = () => {
  return (
    <div class=" mt-12 mx-12 w-100 p-12" style={{backgroundImage:`url(${back})`}}>
         <h1 className='text-center text-primary text-xl'>Contact Us</h1>
        <h1 className="text-center bold text-3xl lg:text-4xl mb-9 text-white">Stay Connected With Us</h1>
      <div class=" justify-items-center">
        <div class="mb-5  justify-items-center grid">
        <input type="text" placeholder="Enter Email" class="input input-bordered input-success max-w-xs w-full" />
        </div>
        <div class="mb-5 justify-items-center grid">
        <input type="text" placeholder="Subject" class="input input-bordered input-success w-full max-w-xs" />
        </div>
        <div class="mb-5 justify-items-center grid">
        <textarea class="textarea textarea-success w-full max-w-xs" placeholder="Your Message"></textarea>
        </div>
        <div class="mb-5 justify-items-center grid">
        <button class="btn btn-primary uppercase bold text-white font-bold bg-gradient-to-r from-secondary to primary">Get Started</button>
        </div>
        </div>
    </div>
  )
}

export default HomeContact