import React from 'react'
import doctor from "../../assets/images/doctor.png"
import appointment from "../../assets/images/appointment.png"
const MakeApoint = () => {
  return (
    <section class="mx-12 rounded px-2 lg:px-12 mt-12 mb-7" style={{backgroundImage:`url(${appointment})`}}>
        <div class="flex justify-center items-center">
        <div class="flex-1 hidden lg:block">
             <img class="mt-[-150px]" src={doctor} alt="doctor"/>
        </div>
        <div class="flex-1 lg:p-0 p-5 text-center lg:text-left">
            <h3 class="bold text-primary text-lg">Appointment</h3>
            <h2 class="text-4xl text-white mt-5">Make an Appoinment Today</h2>
            <p class="text-white mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum minima dicta vero pariatur, repellat velit ipsum quis a aut ea ut eaque impedit unde facilis et, corporis delectus deserunt reiciendis?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum minima dicta vero pariatur, repellat velit ipsum quis a aut ea ut eaque impedit unde facilis et, corporis delectus deserunt reiciendis?</p>
            <button class="btn btn-primary uppercase bold text-white font-bold bg-gradient-to-r from-secondary to primary mt-7">Get Started</button>
        </div>
    </div>
    </section>
  )
}

export default MakeApoint