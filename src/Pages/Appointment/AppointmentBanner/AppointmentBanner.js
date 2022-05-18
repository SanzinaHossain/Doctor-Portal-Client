import React, { useState } from 'react'
import chair from "../../../assets/images/chair.png";
import img from "../../../assets/images/bg.png"
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
const AppointmentBanner = ({date,setDate}) => {

  return (
    <section class="mt-4" style={{backgroundImage:`url(${img})`}}>
    <div class="hero min-h-min ">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img style={{height:`332px`}}src={chair} class="lg:max-w-xl sm:max-w-sm rounded-lg shadow-2xl lg:ml-28 " />
    <div class="border-2 shadow-3xl bg-emerald-50 rounded-lg p-2">
        <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
        />
    </div>
  </div>
</div>
</section>
  )
}

export default AppointmentBanner