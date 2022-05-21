import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const DashBoard = () => {
  return (
    <div>
           <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col items-center justify-center">
    {/* <!-- Page content here --> */}
    <h1 class="text-5xl text-secondary">DashBoard</h1>
    <Outlet></Outlet>
    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li class="hover:bg-teal-200 rounded-lg"><Link to="/dashboard">My Appointment</Link></li>
      <li class="hover:bg-teal-200 rounded-lg"><Link to="/dashboard/myreview">My Review</Link></li>
    </ul>
  
  </div>
</div>
    </div>
  )
}

export default DashBoard