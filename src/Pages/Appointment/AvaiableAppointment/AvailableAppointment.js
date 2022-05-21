import { format } from 'date-fns'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import Loading from '../../Shared/Loading/Loading'
import AppointmentService from '../AppointmentService/AppointmentService'
import BookingModal from '../BookingModal/BookingModal'
const AvailableAppointment = ({date}) => {
  
    const [treatment,setTreatment]=useState(null);
    const formatedDate=format(date,"PPPP");
    const { data: services, isLoading, refetch } = useQuery(['available', formatedDate], () => 
    fetch(`http://localhost:5000/available?date=${formatedDate}`)
        .then(res => res.json()))

    if(isLoading){
        return <Loading></Loading>
    }
    // useEffect(()=>{
    //     fetch(`http://localhost:5000/available?date=${formatedDate}`)
    //     .then(res=>res.json())
    //     .then(data=>setServices(data))
    // },[])
  return (
    <div class=" lg:mt-16 mt-9">
        <h1 class="text-center bold text-secondary lg:text-2xl text-xl">Available Appointments on Date: {format(date, 'PPPP')}</h1>
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
        refetch = {refetch}
        ></BookingModal>}
    </div>
  )
}

export default AvailableAppointment