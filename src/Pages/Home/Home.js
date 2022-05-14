import React from 'react'
import Banner from '../Banner/Banner'
import Exceptional from '../Exceptional/Exceptional'
import Info from '../Info/Info'
import Services from '../Services/Services'

const Home = () => {
  return (
    <div>
       <Banner></Banner>
       <Info></Info>
       <Services></Services>
       <Exceptional></Exceptional>
    </div>
  )
}

export default Home