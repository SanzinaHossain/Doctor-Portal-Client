import React from 'react'
import ServiceCard from '../Service/ServiceCard'
import cavity from "../../assets/images/cavity.png"
import whitening from "../../assets/images/whitening.png"
import fluoride from "../../assets/images/fluoride.png"
const Services = () => {
  return (
    <div className="mt-12 lg:mt-16">
        <h1 className='text-center text-primary text-xl'>Our Services</h1>
    <h1 className="text-center bold text-3xl">Services We provide</h1>
    <div className='lg:pt-12 pt-12 px-12 grid grid-cols-1 lg:grid-cols-3 gap-5'>
        <ServiceCard img={cavity} name={"Cavity Filling"} des={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod obcaecati pariatur saepe doloremque dolore, debitis soluta incidunt nam iure voluptates suscipit possimus numquam officia quos."}></ServiceCard>
        <ServiceCard img={whitening} name={"Teeth Whitening"} des={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod obcaecati pariatur saepe doloremque dolore, debitis soluta incidunt nam iure voluptates suscipit possimus numquam officia quos."}></ServiceCard>
        <ServiceCard img={fluoride} name={"Fluoride Treatment"} des={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod obcaecati pariatur saepe doloremque dolore, debitis soluta incidunt nam iure voluptates suscipit possimus numquam officia quos."}></ServiceCard>
    </div>
    </div>
  )
}

export default Services