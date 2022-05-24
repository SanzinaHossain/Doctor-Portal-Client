import React, { useEffect, useState } from 'react'
import Singleuser from './Singleuser'
import Loading from "../Shared/Loading/Loading"
import { useQuery } from 'react-query';
const AllUsers = () => {
    //  const [users,setUsers]=useState([])
    //  useEffect(()=>{
    //     fetch('http://localhost:5000/users',{
    //         method:'GET',
    //         headers:{
    //             authorization:`Bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //      .then(res=>res.json())
    //      .then(data=>{
    //         setUsers(data);
    //     })
    //  },[])
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
      method: 'GET',
      headers:{
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
  }).then(res => res.json()));
  if (isLoading) {
      return <Loading></Loading>
  }
    
  return (
    <div className='mt-5'>
        <h1 className='text-center text-3xl text-secondary font-bold'>All Users</h1>
        <div class="overflow-x-auto mt-5">
  <table class="table w-full">
    <thead>
      <tr>
        <th>Name</th>
        <th>Make Admin</th>
        <th>Delete User</th>
      </tr>
    </thead>
    <tbody>
      {
          users.map(u=>
          <Singleuser
              u={u}
              refetch={refetch}
          ></Singleuser>
            )
      }
    </tbody>
  </table>
</div>
        </div>
  )
}

export default AllUsers