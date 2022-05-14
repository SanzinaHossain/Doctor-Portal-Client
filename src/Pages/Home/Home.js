import React from 'react'
import Banner from '../Banner/Banner'
import Exceptional from '../Exceptional/Exceptional'
import Info from '../Info/Info'
import MakeApoint from '../MakeApoint/MakeApoint'
import Services from '../Services/Services'

const Home = () => {
  return (
    <div>
       <Banner></Banner>
       <Info></Info>
       <Services></Services>
       <Exceptional></Exceptional>
       <MakeApoint></MakeApoint>
    </div>
  )
}

export default Home