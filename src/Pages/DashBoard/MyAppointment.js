import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'

const MyAppointment = () => {
  const navigate=useNavigate();
    const[user]=useAuthState(auth);
    const [appointments,setAppointments]=useState([])
    useEffect(()=>{
        if(user)
        {
            fetch(`http://localhost:5000/booking?PatientEmail=${user.email}`,{ 
              method:'GET',
              headers:{
                'authorization':`Bearer ${localStorage.getItem('accessToken')}`
              }
            })
        .then(res=>{
          if(res.status===401 || res.status===403)
          {
            localStorage.removeItem('accessToken')
            signOut(auth);
            navigate("/")
          }
          return res.json()
        })
        .then(data=>{
            setAppointments(data);
        })
        }
    },[user])
  return (
    <div>
        <div class="mt-7">
            <h1 class="text-center font-bold text-3xl text-secondary">My All Appointment</h1>
        </div>
        <div class="overflow-x-auto mt-5">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
          <th></th>
        <th>Name</th>
        <th>Treatment Name</th>
        <th>Date</th>
        <th>Time</th>
      </tr>
    </thead>
    <tbody>
      {
          appointments.map((a,index)=>
            <tr>
            <td>{index+1}</td>
            <td>{a.PatientName}</td>
            <td>{a.treatment}</td>
            <td>{a.date}</td>
            <td>{a.slot}</td>
            </tr>
          )
      }
    </tbody>
  </table>
</div>
    </div>
  )
}

export default MyAppointment