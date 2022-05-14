import React from 'react'
import InfoCard from '../InfoCard/InfoCard'
import clock from '../../assets/icons/clock.svg'
import mark from "../../assets/icons/marker.svg"
import phone from "../../assets/icons/phone.svg"
const Info = () => {
  return (
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 px-12 mt-10">
        <InfoCard img={clock} bgClass="bg-gradient-to-r from-secondary to-primary" card_tittle={"Opening Hours"} des={"Monday: 9AM to 10PM Friday:2PM-9PM"}></InfoCard>
        <InfoCard img={mark} bgClass="bg-accent" card_tittle={"Our Location"} des={"120 st road,ABP Tower,Halisohor,Chittagong"} ></InfoCard>
        <InfoCard img={phone} bgClass="bg-gradient-to-r from-secondary to-primary" card_tittle={"Contact Us"} des={" Telephone:2742384647 Email:doctor@gmail.com"}></InfoCard>
    </div>
  )
}

export default Info