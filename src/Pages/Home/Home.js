import React from 'react'
import Banner from '../Banner/Banner'
import Exceptional from '../Exceptional/Exceptional'
import HomeContact from '../HomeContact/HomeContact'
import Info from '../Info/Info'
import MakeApoint from '../MakeApoint/MakeApoint'
import Services from '../Services/Services'
import Footer from '../Shared/Footer/Footer'
import Testimonial from '../Testimonial/Testimonial'

const Home = () => {
  return (
    <div>
       <Banner></Banner>
       <Info></Info>
       <Services></Services>
       <Exceptional></Exceptional>
       <MakeApoint></MakeApoint>
       <Testimonial></Testimonial>
       <HomeContact></HomeContact>
       <Footer></Footer>
    </div>
  )
}

export default Home