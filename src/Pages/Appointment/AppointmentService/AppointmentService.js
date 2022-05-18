import { hasSelectionSupport } from '@testing-library/user-event/dist/utils';
import React from 'react'

const AppointmentService = ({service,setTreatment,date}) => {
    const {name,_id,slots}=service;
  return (
       <div>
            <div class="card w-96 bg-base-100 shadow-xl">
    <div class="card-body">
      <h2 class="text-2xl text-center text-secondary">{name}</h2>
      <p class="text-center">
          {
              slots.length>0 ?
              <span>{slots[0]}</span>
              :
              <span class="text-red-500">No slots Available</span>
          }
      </p>
      <p class="text-center">{slots.length>1 ? `${slots.length} spaces` : 'No spaces'} available</p>
      <div class="card-actions justify-center">
      <label 
      for="booking-modal" 
      disabled={slots.length===0}
      onClick={()=>setTreatment(service,date)}
      class="btn modal-button btn-secondary uppercase ">Book Appointment</label>
      </div>
    </div>
  </div>
       </div>
  )
}

export default AppointmentService