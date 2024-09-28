import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';

// import required modules
import {Autoplay , EffectCreative } from 'swiper/modules';

import './Banner.css';
// Import Swiper styles


const MySwiper = () => {
  return (
    <Swiper
    grabCursor={true}
    effect={'creative'}
    loop="true"
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    creativeEffect={{
      prev: {
        shadow: true,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }}
    modules={[EffectCreative , Autoplay]}
    className="mySwiper3"
  >
    <SwiperSlide><img src='regel/banner.jpeg'/></SwiperSlide>
    <SwiperSlide><img src='regel/banner.jpeg'/></SwiperSlide>
  </Swiper>
  );
};

export default MySwiper;
