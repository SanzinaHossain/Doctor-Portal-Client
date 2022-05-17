import React from 'react'
import b from "../../../assets/images/footer.png"
const Footer = () => {
  return (
  <div className="mx-12">
      <footer class="footer p-10 text-base-content mt-4 mx-10" style={{backgroundImage:`url(${b})`,
        backgroundSize:'cover'}}>
  <div>
    <span class="footer-title">SERVICES</span> 
    <a class="link link-hover">Emergency Checkup</a> 
    <a class="link link-hover">Monthly Checkup</a> 
    <a class="link link-hover">Weekly Checkup</a> 
    <a class="link link-hover">Deep Checkup</a>
  </div> 
  <div>
    <span class="footer-title">ORAL HEALTH</span> 
    <a class="link link-hover">Fluoride Treatment</a> 
    <a class="link link-hover">Teeth Whitening</a> 
    <a class="link link-hover">Cavity Treatment</a> 
  </div> 
  <div>
    <h1>Our Address</h1>
    <p>New York- 1001010 California</p>
  </div>
</footer>
<div>
    <p class="text-center mb-2">Copyright © 2022 - All right reserved by Programing Hero</p>
  </div>
  </div>
  )
}

export default Footer