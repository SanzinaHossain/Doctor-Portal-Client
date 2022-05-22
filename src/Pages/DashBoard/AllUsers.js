import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading/Loading'

const AllUsers = () => {
     const [users,setUsers]=useState([])
     useEffect(()=>{
        fetch('http://localhost:5000/users',{
            method:'GET',
            headers:{
                authorization:`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
         .then(res=>res.json())
         .then(data=>{
             console.log(data)
            setUsers(data);
        })
     },[])
    
  return (
    <div className='mt-5'>
        <h1 className='text-center text-3xl text-secondary font-bold'>All Users</h1>
        <div class="overflow-x-auto mt-5">
  <table class="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Make Admin</th>
        <th>Delete User</th>
      </tr>
    </thead>
    <tbody>
      {
          users.map((u,index)=>
            <tr>
        <th>{index+1}</th>
        <td>{u.email}</td>
        <td><button class="btn btn-sm">Make Admin</button></td>
        <td><button class="btn btn-sm">Delete</button></td>
      </tr>
            )
      }
    </tbody>
  </table>
</div>
        </div>
  )
}

export default AllUsers