import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import {useAuthState} from 'react-firebase-hooks/auth';
import useAdmin from '../../Hooks/useAdmin';
import auth from "../../firebase.init";
const DashBoard = () => {
  const [user]=useAuthState(auth);
  const [admin]=useAdmin(user)
  return (
    <div class="mt-5">
    <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content mt-5">
    {/* <!-- Page content here --> */}
    <h1 class="text-4xl text-purple-600 font-bold text-center"> Welcome To  My DashBoard</h1>
    <Outlet></Outlet>
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 text-base-content ">
      {/* <!-- Sidebar content here --> */}
      <li class="hover:bg-teal-200 rounded-lg"><Link to="/dashboard">My Appointment</Link></li>
      <li class="hover:bg-teal-200 rounded-lg"><Link to="/dashboard/myreview">My Review</Link></li>
      <li class="hover:bg-teal-200 rounded-lg"><Link to="/dashboard/myhistory">My History</Link></li>
      {
          admin && <li class="hover:bg-teal-200 rounded-lg"><Link to="/dashboard/allUsers">All Users</Link></li>
      }
    </ul>
  
  </div>
</div>
    </div>
  )
}

export default DashBoard