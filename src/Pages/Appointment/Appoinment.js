import React, { useState } from 'react'
import AppointmentBanner from './AppointmentBanner/AppointmentBanner'
import AvailableAppointment from './AvaiableAppointment/AvailableAppointment'

const Appoinment = () => {
  const [date,setDate]=useState(new Date())
  return (
    <div>
      <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
      <AvailableAppointment date={date}></AvailableAppointment>
    </div>
  )
}

export default Appoinment