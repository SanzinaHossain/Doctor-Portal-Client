import { format } from 'date-fns'
import React, { useEffect, useState } from 'react'
import AppointmentService from '../AppointmentService/AppointmentService'
import BookingModal from '../BookingModal/BookingModal'
const AvailableAppointment = ({date}) => {
    const [services,setServices]=useState([])
    const [treatment,setTreatment]=useState(null);
    useEffect(()=>{
        fetch("http://localhost:5000/services")
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
  return (
    <div class=" lg:mt-16 mt-9">
        <h1 class="text-center bold text-secondary lg:text-2xl text-xl">Available Appointments on Date: {format(date, 'PP')}</h1>
        <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mt-9 lg:pt-7 lg:px-16  px-3 md:px-9 ">
        {
            services.map(service=><AppointmentService
               key={service._id}
               service={service}
               setTreatment={setTreatment}
            ></AppointmentService>)
        }
        </div>
        {treatment && <BookingModal 
        date={date} 
        treatment={treatment}
        setTreatment={setTreatment}
        ></BookingModal>}
    </div>
  )
}

export default AvailableAppointment