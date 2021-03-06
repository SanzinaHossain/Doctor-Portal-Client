import React from 'react'
import { toast } from 'react-toastify';

const Singleuser = ({u,refetch}) => {
    const {email,role}=u;
    const makeAdmin=()=>{
           fetch(`http://localhost:5000/users/admin/${email}`,{
             method:'PUT',
             headers:{
                authorization:`Bearer ${localStorage.getItem('accessToken')}`
             }
           })
           .then(res=>{
             if(res.status===403)
             {
               toast.error("Failed to make an admin");
             }
             return res.json()}
             )
           .then(data=>{
            if(data.modifiedCount>0)
            {
              refetch();
             toast.success('Successfully make an admin')
            }
           })
 
      }
  return (
        <tr>
        <td>{email}</td>
        <td>{role!=='admin' && <button onClick={makeAdmin} class="btn btn-sm">Make Admin</button>}</td>
        <td><button class="btn btn-sm">Remove User</button></td>
      </tr>
  )
}

export default Singleuser