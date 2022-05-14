import React from 'react'
import pic1 from "../../assets/images/people1.png"
import pic2 from "../../assets/images/people2.png"
import pic3 from "../../assets/images/people3.png"
import TestimonialCard from '../TestimonialCard/TestimonialCard'
import back from "../../assets/icons/quote.svg"
const Testimonial = () => {
  return (
    <section class=" mx-12 bg-no-repeat bg-right-top"  style={{backgroundImage:`url(${back})`}}>
        <div className="mt-12 lg:mt-16">
        <h1 className='text-center text-primary text-xl'>Testimonial</h1>
    <h1 className="text-center bold text-3xl">What Ours Patients Says</h1>
    <div className='lg:pt-12 pt-12 px-12 grid grid-cols-1 lg:grid-cols-3 gap-5'>
        <TestimonialCard img={pic1} name={"Lea Rochy"} city={"Germany"} des={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod obcaecati pariatur saepe doloremque dolore, debitis soluta incidunt nam iure voluptates suscipit possimus numquam officia quos."}></TestimonialCard>
        <TestimonialCard img={pic2} name={"Winson Herry"} city={"California"} des={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod obcaecati pariatur saepe doloremque dolore, debitis soluta incidunt nam iure voluptates suscipit possimus numquam officia quos."}></TestimonialCard>
        <TestimonialCard img={pic3} name={"Xons Ruches"} city={"India"} des={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod obcaecati pariatur saepe doloremque dolore, debitis soluta incidunt nam iure voluptates suscipit possimus numquam officia quos."}></TestimonialCard>
    </div>
    </div>
    </section>
  )
}

export default Testimonial