import React from 'react'
import b from "../../../assets/images/footer.png"
const Footer = () => {
  return (
  <div className="mx-12">
      <footer class="footer p-10 text-base-content mt-4 mx-10" style={{backgroundImage:`url(${b})`}}>
  <div>
    <span class="footer-title">Services</span> 
    <a class="link link-hover">Branding</a> 
    <a class="link link-hover">Design</a> 
    <a class="link link-hover">Marketing</a> 
    <a class="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span class="footer-title">Company</span> 
    <a class="link link-hover">About us</a> 
    <a class="link link-hover">Contact</a> 
    <a class="link link-hover">Jobs</a> 
    <a class="link link-hover">Press kit</a>
  </div> 
  <div>
    
  </div>
</footer>
<div>
    <p class="text-center mb-2">Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
  </div>
  </div>
  )
}

export default Footer