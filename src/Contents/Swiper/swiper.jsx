import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swipers.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import React from 'react'
import { Container } from 'react-bootstrap';
import Cardtest from '../cardtest/Cardtest';

const Myslides = () => {
    const testimonialData = {
        name: "Jane Doe",
        role: "CEO",
        testimonial:
          "",
        course: "very intereting super thing very intereting super thing very intereting super thing",
        image: "profile.jpg", // Placeholder image
      };
    
  return (
    <>
    <div className="container" style={{ zIndex: 0 }}>
    <div className="container">
        <div className="row">
          <div className="section-header section-header2 text-center">
            <h2 className="fw-bold fs-1">
              Our <span className="b-class-secondary">Clients</span> Says
            </h2>
            <p className="sec-icon">
              <i className="fa-solid fa-gear"></i>
            </p>
          </div>
        </div>
        </div>
        </div>
    <Container className='mt-5'
    > <Swiper
      slidesPerView={1}
      spaceBetween={10}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation
      scrollbar={{ draggable: true }}
      breakpoints={{
        320: { slidesPerView: 1 }, // Mobile phones
        768: { slidesPerView: 2 }, // Tablets
        1024: { slidesPerView: 3 }  // Desktops
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper4"
    >
     <SwiperSlide>
      <Cardtest {...testimonialData} />
      </SwiperSlide>
      <SwiperSlide>
      <Cardtest {...testimonialData} />
      </SwiperSlide>
      <SwiperSlide>
      <Cardtest {...testimonialData} />
      </SwiperSlide>
      <SwiperSlide>
      <Cardtest {...testimonialData} />
      </SwiperSlide> 
      <SwiperSlide>
      <Cardtest {...testimonialData} />
      </SwiperSlide>
       <SwiperSlide>
      <Cardtest {...testimonialData} />
      </SwiperSlide> 
      <SwiperSlide>
      <Cardtest {...testimonialData} />
      </SwiperSlide>
       <SwiperSlide>
      <Cardtest {...testimonialData} />
      </SwiperSlide>
    </Swiper>
    </Container>
     </>)
}

export default Myslides;