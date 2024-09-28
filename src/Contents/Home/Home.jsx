import React from 'react'
import Banner from '../Banner/Banner';
import Aboutus from '../About/About';
import Service from '../service/Service';
import Myslides from '../Swiper/swiper';
const Home = () => {
  return (
   <> 
   <Banner />
    <Service />
    <Aboutus />
    <Myslides />
    </>
  )
}

export default Home