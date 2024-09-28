import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Product.css';
import { Pagination } from 'swiper/modules';
import axios from 'axios';
 
const Product = () => {

  return (
    <>
    <h4 className='text-center my-text-bold text-dark pt-3 mt-5'>Courses We Offer</h4>
   {/* <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination]}
        className="mySwiper2"
      >
         <SwiperSlide  className='card position-relative'>    
        <div className="cardoverflow">   <Card.Img variant="top" className='zoom-indo' src={`india-food-butter-chicken-1120x732.jpg`} />
 <button className='newbuutton'>New</button>
</div>   <Card.Body>
   <Card.Title className=''>Buttuer Chicken</Card.Title>
   <div className='d-flex text-center container'><svg xmlns="http://www.w3.org/2000/svg" width="16.471" height="16.471" viewBox="0 0 16.471 16.471">
                                                <g id="blackboard-8" transform="translate(-0.008)">
                                                    <path id="Path_106" data-name="Path 101" d="M16,1.222H8.726V.483a.483.483,0,1,0-.965,0v.74H.491A.483.483,0,0,0,.008,1.7V13.517A.483.483,0,0,0,.491,14H5.24L4.23,15.748a.483.483,0,1,0,.836.483L6.354,14H7.761v1.99a.483.483,0,0,0,.965,0V14h1.407l1.288,2.231a.483.483,0,1,0,.836-.483L11.247,14H16a.483.483,0,0,0,.483-.483V1.7A.483.483,0,0,0,16,1.222Zm-.483.965v8.905H.973V2.187Zm0,10.847H.973v-.976H15.514Z" fill="#575757"></path>
                                                </g>
                                            </svg>&nbsp;&nbsp;&nbsp;
   <h6>45ms-50ms</h6>
   </div>
   <Card.Text className='text-product'>
   Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
   </Card.Text>
 </Card.Body>

</SwiperSlide>
<SwiperSlide  className='card position-relative'>    
        <div className="cardoverflow">   <Card.Img variant="top" className='zoom-indo' src={`india-food-dal-tadka-1120x732.jpg`} />
 <button className='newbuutton'>New</button>
</div>   <Card.Body>
   <Card.Title className=''>Dal-Tadka</Card.Title>
   <div className='d-flex text-center container'><svg xmlns="http://www.w3.org/2000/svg" width="16.471" height="16.471" viewBox="0 0 16.471 16.471">
                                                <g id="blackboard-8" transform="translate(-0.008)">
                                                    <path id="Path_106" data-name="Path 101" d="M16,1.222H8.726V.483a.483.483,0,1,0-.965,0v.74H.491A.483.483,0,0,0,.008,1.7V13.517A.483.483,0,0,0,.491,14H5.24L4.23,15.748a.483.483,0,1,0,.836.483L6.354,14H7.761v1.99a.483.483,0,0,0,.965,0V14h1.407l1.288,2.231a.483.483,0,1,0,.836-.483L11.247,14H16a.483.483,0,0,0,.483-.483V1.7A.483.483,0,0,0,16,1.222Zm-.483.965v8.905H.973V2.187Zm0,10.847H.973v-.976H15.514Z" fill="#575757"></path>
                                                </g>
                                            </svg>&nbsp;&nbsp;&nbsp;
   <h6>45ms-50ms</h6>
   </div>
   <Card.Text className='text-product'>
   Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
   </Card.Text>
 </Card.Body>

</SwiperSlide>
<SwiperSlide  className='card position-relative'>    
        <div className="cardoverflow">   <Card.Img variant="top" className='zoom-indo' src={`india-food-naan-1120x732.jpg`} />
 <button className='newbuutton'>New</button>
</div>   <Card.Body>
   <Card.Title className=''>Fresh-Non</Card.Title>
   <div className='d-flex text-center container'><svg xmlns="http://www.w3.org/2000/svg" width="16.471" height="16.471" viewBox="0 0 16.471 16.471">
                                                <g id="blackboard-8" transform="translate(-0.008)">
                                                    <path id="Path_106" data-name="Path 101" d="M16,1.222H8.726V.483a.483.483,0,1,0-.965,0v.74H.491A.483.483,0,0,0,.008,1.7V13.517A.483.483,0,0,0,.491,14H5.24L4.23,15.748a.483.483,0,1,0,.836.483L6.354,14H7.761v1.99a.483.483,0,0,0,.965,0V14h1.407l1.288,2.231a.483.483,0,1,0,.836-.483L11.247,14H16a.483.483,0,0,0,.483-.483V1.7A.483.483,0,0,0,16,1.222Zm-.483.965v8.905H.973V2.187Zm0,10.847H.973v-.976H15.514Z" fill="#575757"></path>
                                                </g>
                                            </svg>&nbsp;&nbsp;&nbsp;
   <h6>45ms-50ms</h6>
   </div>
   <Card.Text className='text-product'>
   Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
   </Card.Text>
 </Card.Body>

</SwiperSlide>
<SwiperSlide  className='card position-relative'>    
        <div className="cardoverflow">   <Card.Img variant="top" className='zoom-indo' src={`pexels-catscoming-674574.jpg`} />
 <button className='newbuutton'>New</button>
</div>   <Card.Body>
   <Card.Title className=''>Idly</Card.Title>
   <div className='d-flex text-center container'><svg xmlns="http://www.w3.org/2000/svg" width="16.471" height="16.471" viewBox="0 0 16.471 16.471">
                                                <g id="blackboard-8" transform="translate(-0.008)">
                                                    <path id="Path_106" data-name="Path 101" d="M16,1.222H8.726V.483a.483.483,0,1,0-.965,0v.74H.491A.483.483,0,0,0,.008,1.7V13.517A.483.483,0,0,0,.491,14H5.24L4.23,15.748a.483.483,0,1,0,.836.483L6.354,14H7.761v1.99a.483.483,0,0,0,.965,0V14h1.407l1.288,2.231a.483.483,0,1,0,.836-.483L11.247,14H16a.483.483,0,0,0,.483-.483V1.7A.483.483,0,0,0,16,1.222Zm-.483.965v8.905H.973V2.187Zm0,10.847H.973v-.976H15.514Z" fill="#575757"></path>
                                                </g>
                                            </svg>&nbsp;&nbsp;&nbsp;
   <h6>45ms-50ms</h6>
   </div>
   <Card.Text className='text-product'>
   Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
   </Card.Text>
 </Card.Body>

</SwiperSlide>
         <SwiperSlide  className='card position-relative'>    
        <div className="cardoverflow">   <Card.Img variant="top" className='zoom-indo' src={`india-food-butter-chicken-1120x732.jpg`} />
 <button className='newbuutton'>New</button>
</div>   <Card.Body>
   <Card.Title className=''>Buttuer Chicken</Card.Title>
   <div className='d-flex text-center container'><svg xmlns="http://www.w3.org/2000/svg" width="16.471" height="16.471" viewBox="0 0 16.471 16.471">
                                                <g id="blackboard-8" transform="translate(-0.008)">
                                                    <path id="Path_106" data-name="Path 101" d="M16,1.222H8.726V.483a.483.483,0,1,0-.965,0v.74H.491A.483.483,0,0,0,.008,1.7V13.517A.483.483,0,0,0,.491,14H5.24L4.23,15.748a.483.483,0,1,0,.836.483L6.354,14H7.761v1.99a.483.483,0,0,0,.965,0V14h1.407l1.288,2.231a.483.483,0,1,0,.836-.483L11.247,14H16a.483.483,0,0,0,.483-.483V1.7A.483.483,0,0,0,16,1.222Zm-.483.965v8.905H.973V2.187Zm0,10.847H.973v-.976H15.514Z" fill="#575757"></path>
                                                </g>
                                            </svg>&nbsp;&nbsp;&nbsp;
   <h6>45ms-50ms</h6>
   </div>
   <Card.Text className='text-product'>
   Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
   </Card.Text>
 </Card.Body>

</SwiperSlide>
<SwiperSlide  className='card position-relative'>    
        <div className="cardoverflow">   <Card.Img variant="top" className='zoom-indo' src={`india-food-dal-tadka-1120x732.jpg`} />
 <button className='newbuutton'>New</button>
</div>   <Card.Body>
   <Card.Title className=''>Dal-Tadka</Card.Title>
   <div className='d-flex text-center container'><svg xmlns="http://www.w3.org/2000/svg" width="16.471" height="16.471" viewBox="0 0 16.471 16.471">
                                                <g id="blackboard-8" transform="translate(-0.008)">
                                                    <path id="Path_106" data-name="Path 101" d="M16,1.222H8.726V.483a.483.483,0,1,0-.965,0v.74H.491A.483.483,0,0,0,.008,1.7V13.517A.483.483,0,0,0,.491,14H5.24L4.23,15.748a.483.483,0,1,0,.836.483L6.354,14H7.761v1.99a.483.483,0,0,0,.965,0V14h1.407l1.288,2.231a.483.483,0,1,0,.836-.483L11.247,14H16a.483.483,0,0,0,.483-.483V1.7A.483.483,0,0,0,16,1.222Zm-.483.965v8.905H.973V2.187Zm0,10.847H.973v-.976H15.514Z" fill="#575757"></path>
                                                </g>
                                            </svg>&nbsp;&nbsp;&nbsp;
   <h6>45ms-50ms</h6>
   </div>
   <Card.Text className='text-product'>
   Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
   </Card.Text>
 </Card.Body>

</SwiperSlide>
<SwiperSlide  className='card position-relative'>    
        <div className="cardoverflow">   <Card.Img variant="top" className='zoom-indo' src={`india-food-naan-1120x732.jpg`} />
 <button className='newbuutton'>New</button>
</div>   <Card.Body>
   <Card.Title className=''>Fresh-Non</Card.Title>
   <div className='d-flex text-center container'><svg xmlns="http://www.w3.org/2000/svg" width="16.471" height="16.471" viewBox="0 0 16.471 16.471">
                                                <g id="blackboard-8" transform="translate(-0.008)">
                                                    <path id="Path_106" data-name="Path 101" d="M16,1.222H8.726V.483a.483.483,0,1,0-.965,0v.74H.491A.483.483,0,0,0,.008,1.7V13.517A.483.483,0,0,0,.491,14H5.24L4.23,15.748a.483.483,0,1,0,.836.483L6.354,14H7.761v1.99a.483.483,0,0,0,.965,0V14h1.407l1.288,2.231a.483.483,0,1,0,.836-.483L11.247,14H16a.483.483,0,0,0,.483-.483V1.7A.483.483,0,0,0,16,1.222Zm-.483.965v8.905H.973V2.187Zm0,10.847H.973v-.976H15.514Z" fill="#575757"></path>
                                                </g>
                                            </svg>&nbsp;&nbsp;&nbsp;
   <h6>45ms-50ms</h6>
   </div>
   <Card.Text className='text-product'>
   Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
   </Card.Text>
 </Card.Body>

</SwiperSlide>
<SwiperSlide  className='card position-relative'>    
        <div className="cardoverflow">   <Card.Img variant="top" className='zoom-indo' src={`pexels-catscoming-674574.jpg`} />
 <button className='newbuutton'>New</button>
</div>   <Card.Body>
   <Card.Title className=''>Idly</Card.Title>
   <div className='d-flex text-center container'><svg xmlns="http://www.w3.org/2000/svg" width="16.471" height="16.471" viewBox="0 0 16.471 16.471">
                                                <g id="blackboard-8" transform="translate(-0.008)">
                                                    <path id="Path_106" data-name="Path 101" d="M16,1.222H8.726V.483a.483.483,0,1,0-.965,0v.74H.491A.483.483,0,0,0,.008,1.7V13.517A.483.483,0,0,0,.491,14H5.24L4.23,15.748a.483.483,0,1,0,.836.483L6.354,14H7.761v1.99a.483.483,0,0,0,.965,0V14h1.407l1.288,2.231a.483.483,0,1,0,.836-.483L11.247,14H16a.483.483,0,0,0,.483-.483V1.7A.483.483,0,0,0,16,1.222Zm-.483.965v8.905H.973V2.187Zm0,10.847H.973v-.976H15.514Z" fill="#575757"></path>
                                                </g>
                                            </svg>&nbsp;&nbsp;&nbsp;
   <h6>45ms-50ms</h6>
   </div>
   <Card.Text className='text-product'>
   Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
   </Card.Text>
 </Card.Body>

</SwiperSlide>

<SwiperSlide  className='card position-relative'>    
        <div className="cardoverflow">   <Card.Img variant="top" className='zoom-indo' src={`india-food-butter-chicken-1120x732.jpg`} />
 <button className='newbuutton'>New</button>
</div>   <Card.Body>
   <Card.Title className=''>Buttuer Chicken</Card.Title>
   <div className='d-flex text-center container'><svg xmlns="http://www.w3.org/2000/svg" width="16.471" height="16.471" viewBox="0 0 16.471 16.471">
                                                <g id="blackboard-8" transform="translate(-0.008)">
                                                    <path id="Path_106" data-name="Path 101" d="M16,1.222H8.726V.483a.483.483,0,1,0-.965,0v.74H.491A.483.483,0,0,0,.008,1.7V13.517A.483.483,0,0,0,.491,14H5.24L4.23,15.748a.483.483,0,1,0,.836.483L6.354,14H7.761v1.99a.483.483,0,0,0,.965,0V14h1.407l1.288,2.231a.483.483,0,1,0,.836-.483L11.247,14H16a.483.483,0,0,0,.483-.483V1.7A.483.483,0,0,0,16,1.222Zm-.483.965v8.905H.973V2.187Zm0,10.847H.973v-.976H15.514Z" fill="#575757"></path>
                                                </g>
                                            </svg>&nbsp;&nbsp;&nbsp;
   <h6>45ms-50ms</h6>
   </div>
   <Card.Text className='text-product'>
   Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
   </Card.Text>
 </Card.Body>

</SwiperSlide>
<SwiperSlide  className='card position-relative'>    
        <div className="cardoverflow">   <Card.Img variant="top" className='zoom-indo' src={`india-food-dal-tadka-1120x732.jpg`} />
 <button className='newbuutton'>New</button>
</div>   <Card.Body>
   <Card.Title className=''>Dal-Tadka</Card.Title>
   <div className='d-flex text-center container'><svg xmlns="http://www.w3.org/2000/svg" width="16.471" height="16.471" viewBox="0 0 16.471 16.471">
                                                <g id="blackboard-8" transform="translate(-0.008)">
                                                    <path id="Path_106" data-name="Path 101" d="M16,1.222H8.726V.483a.483.483,0,1,0-.965,0v.74H.491A.483.483,0,0,0,.008,1.7V13.517A.483.483,0,0,0,.491,14H5.24L4.23,15.748a.483.483,0,1,0,.836.483L6.354,14H7.761v1.99a.483.483,0,0,0,.965,0V14h1.407l1.288,2.231a.483.483,0,1,0,.836-.483L11.247,14H16a.483.483,0,0,0,.483-.483V1.7A.483.483,0,0,0,16,1.222Zm-.483.965v8.905H.973V2.187Zm0,10.847H.973v-.976H15.514Z" fill="#575757"></path>
                                                </g>
                                            </svg>&nbsp;&nbsp;&nbsp;
   <h6>45ms-50ms</h6>
   </div>
   <Card.Text className='text-product'>
   Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
   </Card.Text>
 </Card.Body>

</SwiperSlide>
<SwiperSlide  className='card position-relative'>    
        <div className="cardoverflow">   <Card.Img variant="top" className='zoom-indo' src={`india-food-naan-1120x732.jpg`} />
 <button className='newbuutton'>New</button>
</div>   <Card.Body>
   <Card.Title className=''>Fresh-Non</Card.Title>
   <div className='d-flex text-center container'><svg xmlns="http://www.w3.org/2000/svg" width="16.471" height="16.471" viewBox="0 0 16.471 16.471">
                                                <g id="blackboard-8" transform="translate(-0.008)">
                                                    <path id="Path_106" data-name="Path 101" d="M16,1.222H8.726V.483a.483.483,0,1,0-.965,0v.74H.491A.483.483,0,0,0,.008,1.7V13.517A.483.483,0,0,0,.491,14H5.24L4.23,15.748a.483.483,0,1,0,.836.483L6.354,14H7.761v1.99a.483.483,0,0,0,.965,0V14h1.407l1.288,2.231a.483.483,0,1,0,.836-.483L11.247,14H16a.483.483,0,0,0,.483-.483V1.7A.483.483,0,0,0,16,1.222Zm-.483.965v8.905H.973V2.187Zm0,10.847H.973v-.976H15.514Z" fill="#575757"></path>
                                                </g>
                                            </svg>&nbsp;&nbsp;&nbsp;
   <h6>45ms-50ms</h6>
   </div>
   <Card.Text className='text-product'>
   Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
   </Card.Text>
 </Card.Body>

</SwiperSlide>
<SwiperSlide  className='card position-relative'>    
        <div className="cardoverflow">   <Card.Img variant="top" className='zoom-indo' src={`pexels-catscoming-674574.jpg`} />
 <button className='newbuutton'>New</button>
</div>   <Card.Body>
   <Card.Title className=''>Idly</Card.Title>
   <div className='d-flex text-center container'><svg xmlns="http://www.w3.org/2000/svg" width="16.471" height="16.471" viewBox="0 0 16.471 16.471">
                                                <g id="blackboard-8" transform="translate(-0.008)">
                                                    <path id="Path_106" data-name="Path 101" d="M16,1.222H8.726V.483a.483.483,0,1,0-.965,0v.74H.491A.483.483,0,0,0,.008,1.7V13.517A.483.483,0,0,0,.491,14H5.24L4.23,15.748a.483.483,0,1,0,.836.483L6.354,14H7.761v1.99a.483.483,0,0,0,.965,0V14h1.407l1.288,2.231a.483.483,0,1,0,.836-.483L11.247,14H16a.483.483,0,0,0,.483-.483V1.7A.483.483,0,0,0,16,1.222Zm-.483.965v8.905H.973V2.187Zm0,10.847H.973v-.976H15.514Z" fill="#575757"></path>
                                                </g>
                                            </svg>&nbsp;&nbsp;&nbsp;
   <h6>45ms-50ms</h6>
   </div>
   <Card.Text className='text-product'>
   Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
   </Card.Text>
 </Card.Body>

</SwiperSlide>

         <SwiperSlide  className='card position-relative'>    
        <div className="cardoverflow">   <Card.Img variant="top" className='zoom-indo' src={`india-food-butter-chicken-1120x732.jpg`} />
 <button className='newbuutton'>New</button>
</div>   <Card.Body>
   <Card.Title className=''>Buttuer Chicken</Card.Title>
   <div className='d-flex text-center container'><svg xmlns="http://www.w3.org/2000/svg" width="16.471" height="16.471" viewBox="0 0 16.471 16.471">
                                                <g id="blackboard-8" transform="translate(-0.008)">
                                                    <path id="Path_106" data-name="Path 101" d="M16,1.222H8.726V.483a.483.483,0,1,0-.965,0v.74H.491A.483.483,0,0,0,.008,1.7V13.517A.483.483,0,0,0,.491,14H5.24L4.23,15.748a.483.483,0,1,0,.836.483L6.354,14H7.761v1.99a.483.483,0,0,0,.965,0V14h1.407l1.288,2.231a.483.483,0,1,0,.836-.483L11.247,14H16a.483.483,0,0,0,.483-.483V1.7A.483.483,0,0,0,16,1.222Zm-.483.965v8.905H.973V2.187Zm0,10.847H.973v-.976H15.514Z" fill="#575757"></path>
                                                </g>
                                            </svg>&nbsp;&nbsp;&nbsp;
   <h6>45ms-50ms</h6>
   </div>
   <Card.Text className='text-product'>
   Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
   </Card.Text>
 </Card.Body>

</SwiperSlide>
<SwiperSlide  className='card position-relative'>    
        <div className="cardoverflow">   <Card.Img variant="top" className='zoom-indo' src={`india-food-dal-tadka-1120x732.jpg`} />
 <button className='newbuutton'>New</button>
</div>   <Card.Body>
   <Card.Title className=''>Dal-Tadka</Card.Title>
   <div className='d-flex text-center container'><svg xmlns="http://www.w3.org/2000/svg" width="16.471" height="16.471" viewBox="0 0 16.471 16.471">
                                                <g id="blackboard-8" transform="translate(-0.008)">
                                                    <path id="Path_106" data-name="Path 101" d="M16,1.222H8.726V.483a.483.483,0,1,0-.965,0v.74H.491A.483.483,0,0,0,.008,1.7V13.517A.483.483,0,0,0,.491,14H5.24L4.23,15.748a.483.483,0,1,0,.836.483L6.354,14H7.761v1.99a.483.483,0,0,0,.965,0V14h1.407l1.288,2.231a.483.483,0,1,0,.836-.483L11.247,14H16a.483.483,0,0,0,.483-.483V1.7A.483.483,0,0,0,16,1.222Zm-.483.965v8.905H.973V2.187Zm0,10.847H.973v-.976H15.514Z" fill="#575757"></path>
                                                </g>
                                            </svg>&nbsp;&nbsp;&nbsp;
   <h6>45ms-50ms</h6>
   </div>
   <Card.Text className='text-product'>
   Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
   </Card.Text>
 </Card.Body>

</SwiperSlide>
<SwiperSlide  className='card position-relative'>    
        <div className="cardoverflow">   <Card.Img variant="top" className='zoom-indo' src={`india-food-naan-1120x732.jpg`} />
 <button className='newbuutton'>New</button>
</div>   <Card.Body>
   <Card.Title className=''>Fresh-Non</Card.Title>
   <div className='d-flex text-center container'><svg xmlns="http://www.w3.org/2000/svg" width="16.471" height="16.471" viewBox="0 0 16.471 16.471">
                                                <g id="blackboard-8" transform="translate(-0.008)">
                                                    <path id="Path_106" data-name="Path 101" d="M16,1.222H8.726V.483a.483.483,0,1,0-.965,0v.74H.491A.483.483,0,0,0,.008,1.7V13.517A.483.483,0,0,0,.491,14H5.24L4.23,15.748a.483.483,0,1,0,.836.483L6.354,14H7.761v1.99a.483.483,0,0,0,.965,0V14h1.407l1.288,2.231a.483.483,0,1,0,.836-.483L11.247,14H16a.483.483,0,0,0,.483-.483V1.7A.483.483,0,0,0,16,1.222Zm-.483.965v8.905H.973V2.187Zm0,10.847H.973v-.976H15.514Z" fill="#575757"></path>
                                                </g>
                                            </svg>&nbsp;&nbsp;&nbsp;
   <h6>45ms-50ms</h6>
   </div>
   <Card.Text className='text-product'>
   Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
   </Card.Text>
 </Card.Body>

</SwiperSlide>
<SwiperSlide  className='card position-relative'>    
        <div className="cardoverflow">   <Card.Img variant="top" className='zoom-indo' src={`pexels-catscoming-674574.jpg`} />
 <button className='newbuutton'>New</button>
</div>   <Card.Body>
   <Card.Title className=''>Idly</Card.Title>
   <div className='d-flex text-center container'><svg xmlns="http://www.w3.org/2000/svg" width="16.471" height="16.471" viewBox="0 0 16.471 16.471">
                                                <g id="blackboard-8" transform="translate(-0.008)">
                                                    <path id="Path_106" data-name="Path 101" d="M16,1.222H8.726V.483a.483.483,0,1,0-.965,0v.74H.491A.483.483,0,0,0,.008,1.7V13.517A.483.483,0,0,0,.491,14H5.24L4.23,15.748a.483.483,0,1,0,.836.483L6.354,14H7.761v1.99a.483.483,0,0,0,.965,0V14h1.407l1.288,2.231a.483.483,0,1,0,.836-.483L11.247,14H16a.483.483,0,0,0,.483-.483V1.7A.483.483,0,0,0,16,1.222Zm-.483.965v8.905H.973V2.187Zm0,10.847H.973v-.976H15.514Z" fill="#575757"></path>
                                                </g>
                                            </svg>&nbsp;&nbsp;&nbsp;
   <h6>45ms-50ms</h6>
   </div>
   <Card.Text className='text-product'>
   Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
   </Card.Text>
 </Card.Body>

</SwiperSlide>
   
      </Swiper>
     */}
 

<div className="container">

  <div className="row py-5">
  
  <div className="col-xl-4">
  <SwiperSlide  className='card  position-relative'>    
        <div className="cardoverflow">
             <Card.Img variant="top" className='zoom-indo' src={`india-food-naan-1120x732.jpg`} />
        </div>   <Card.Body className='w-100'>
   <div className='d-flex  justify-content-between '>
   <h6 className='text-fit'><svg xmlns="http://www.w3.org/2000/svg" width="16.471" height="16.471" viewBox="0 0 16.471 16.471">
                                                <g id="blackboard-8" transform="translate(-0.008)">
                                                    <path id="Path_106" data-name="Path 101" d="M16,1.222H8.726V.483a.483.483,0,1,0-.965,0v.74H.491A.483.483,0,0,0,.008,1.7V13.517A.483.483,0,0,0,.491,14H5.24L4.23,15.748a.483.483,0,1,0,.836.483L6.354,14H7.761v1.99a.483.483,0,0,0,.965,0V14h1.407l1.288,2.231a.483.483,0,1,0,.836-.483L11.247,14H16a.483.483,0,0,0,.483-.483V1.7A.483.483,0,0,0,16,1.222Zm-.483.965v8.905H.973V2.187Zm0,10.847H.973v-.976H15.514Z" fill="#575757"></path>
                                                </g>
                                            </svg>&nbsp;&nbsp;&nbsp;12 Months</h6>
   
   <Card.Text className='text-product'>
    Fulltime
   </Card.Text>
   </div>
   <Card.Title className='text-left'>Master In Visual Design & Technology</Card.Title>

 </Card.Body>
</SwiperSlide>
  </div>
  <div className="col-xl-4">
  <SwiperSlide  className='card position-relative'>    
        <div className="cardoverflow">   <Card.Img variant="top" className='zoom-indo' src={`india-food-naan-1120x732.jpg`} />
</div>   <Card.Body className='w-100'>
   <div className='d-flex  justify-content-between '>
   <h6 className='text-fit'><svg xmlns="http://www.w3.org/2000/svg" width="16.471" height="16.471" viewBox="0 0 16.471 16.471">
                                                <g id="blackboard-8" transform="translate(-0.008)">
                                                    <path id="Path_106" data-name="Path 101" d="M16,1.222H8.726V.483a.483.483,0,1,0-.965,0v.74H.491A.483.483,0,0,0,.008,1.7V13.517A.483.483,0,0,0,.491,14H5.24L4.23,15.748a.483.483,0,1,0,.836.483L6.354,14H7.761v1.99a.483.483,0,0,0,.965,0V14h1.407l1.288,2.231a.483.483,0,1,0,.836-.483L11.247,14H16a.483.483,0,0,0,.483-.483V1.7A.483.483,0,0,0,16,1.222Zm-.483.965v8.905H.973V2.187Zm0,10.847H.973v-.976H15.514Z" fill="#575757"></path>
                                                </g>
                                            </svg>&nbsp;&nbsp;&nbsp;2 Months</h6>
   
   <Card.Text className='text-product'>
    Online|Regular|Part-time
   </Card.Text>
   </div>
   <Card.Title className='text-left'>UX UI Design</Card.Title>

 </Card.Body>

</SwiperSlide>
  </div>
  
  <div className="col-xl-4">
  <SwiperSlide  className='card position-relative'>    
        <div className="cardoverflow">   <Card.Img variant="top" className='zoom-indo' src={`india-food-naan-1120x732.jpg`} />
        </div>   <Card.Body className='w-100'>
   <div className='d-flex  justify-content-between '>
   <h6 className='text-fit'><svg xmlns="http://www.w3.org/2000/svg" width="16.471" height="16.471" viewBox="0 0 16.471 16.471">
                                                <g id="blackboard-8" transform="translate(-0.008)">
                                                    <path id="Path_106" data-name="Path 101" d="M16,1.222H8.726V.483a.483.483,0,1,0-.965,0v.74H.491A.483.483,0,0,0,.008,1.7V13.517A.483.483,0,0,0,.491,14H5.24L4.23,15.748a.483.483,0,1,0,.836.483L6.354,14H7.761v1.99a.483.483,0,0,0,.965,0V14h1.407l1.288,2.231a.483.483,0,1,0,.836-.483L11.247,14H16a.483.483,0,0,0,.483-.483V1.7A.483.483,0,0,0,16,1.222Zm-.483.965v8.905H.973V2.187Zm0,10.847H.973v-.976H15.514Z" fill="#575757"></path>
                                                </g>
                                            </svg>&nbsp;&nbsp;&nbsp;3 Months</h6>
   
   <Card.Text className='text-product'>
    Online|Regular|Part-time
   </Card.Text>
   </div>
   <Card.Title className='text-left'>Graphic Design</Card.Title>

 </Card.Body>
</SwiperSlide>
  </div>
  <div className="col-xl-4">
  <SwiperSlide  className='card position-relative'>    
        <div className="cardoverflow">   <Card.Img variant="top" className='zoom-indo' src={`india-food-naan-1120x732.jpg`} />
        </div>   <Card.Body className='w-100'>
   <div className='d-flex  justify-content-between '>
   <h6 className='text-fit'><svg xmlns="http://www.w3.org/2000/svg" width="16.471" height="16.471" viewBox="0 0 16.471 16.471">
                                                <g id="blackboard-8" transform="translate(-0.008)">
                                                    <path id="Path_106" data-name="Path 101" d="M16,1.222H8.726V.483a.483.483,0,1,0-.965,0v.74H.491A.483.483,0,0,0,.008,1.7V13.517A.483.483,0,0,0,.491,14H5.24L4.23,15.748a.483.483,0,1,0,.836.483L6.354,14H7.761v1.99a.483.483,0,0,0,.965,0V14h1.407l1.288,2.231a.483.483,0,1,0,.836-.483L11.247,14H16a.483.483,0,0,0,.483-.483V1.7A.483.483,0,0,0,16,1.222Zm-.483.965v8.905H.973V2.187Zm0,10.847H.973v-.976H15.514Z" fill="#575757"></path>
                                                </g>
                                            </svg>&nbsp;&nbsp;&nbsp;4 Months</h6>
   
   <Card.Text className='text-product'>
    Online|Regular|Part-time
   </Card.Text>
   </div>
   <Card.Title className='text-left'>Certification in UI Development</Card.Title>

 </Card.Body>

</SwiperSlide>
  </div>
  <div className="col-xl-4">
  <SwiperSlide  className='card position-relative'>    
        <div className="cardoverflow">   <Card.Img variant="top" className='zoom-indo' src={`india-food-naan-1120x732.jpg`} />
        </div>   <Card.Body className='w-100'>
   <div className='d-flex  justify-content-between '>
   <h6 className='text-fit'><svg xmlns="http://www.w3.org/2000/svg" width="16.471" height="16.471" viewBox="0 0 16.471 16.471">
                                                <g id="blackboard-8" transform="translate(-0.008)">
                                                    <path id="Path_106" data-name="Path 101" d="M16,1.222H8.726V.483a.483.483,0,1,0-.965,0v.74H.491A.483.483,0,0,0,.008,1.7V13.517A.483.483,0,0,0,.491,14H5.24L4.23,15.748a.483.483,0,1,0,.836.483L6.354,14H7.761v1.99a.483.483,0,0,0,.965,0V14h1.407l1.288,2.231a.483.483,0,1,0,.836-.483L11.247,14H16a.483.483,0,0,0,.483-.483V1.7A.483.483,0,0,0,16,1.222Zm-.483.965v8.905H.973V2.187Zm0,10.847H.973v-.976H15.514Z" fill="#575757"></path>
                                                </g>
                                            </svg>&nbsp;&nbsp;&nbsp;4 Months</h6>
   
   <Card.Text className='text-product'>
    Online|Regular|Part-time
   </Card.Text>
   </div>
   <Card.Title className='text-left'>Advanced Design and Technology</Card.Title>

 </Card.Body>
</SwiperSlide>
  </div>
  <div className="col-xl-4">
  <SwiperSlide  className='card position-relative'>    
       <div className="cardoverflow">   <Card.Img variant="top" className='zoom-indo' src={`india-food-naan-1120x732.jpg`} />
        </div>  <Card.Body className='w-100'>
   <div className='d-flex  justify-content-between '>
   <h6 className='text-fit'><svg xmlns="http://www.w3.org/2000/svg" width="16.471" height="16.471" viewBox="0 0 16.471 16.471">
                                                <g id="blackboard-8" transform="translate(-0.008)">
                                                    <path id="Path_106" data-name="Path 101" d="M16,1.222H8.726V.483a.483.483,0,1,0-.965,0v.74H.491A.483.483,0,0,0,.008,1.7V13.517A.483.483,0,0,0,.491,14H5.24L4.23,15.748a.483.483,0,1,0,.836.483L6.354,14H7.761v1.99a.483.483,0,0,0,.965,0V14h1.407l1.288,2.231a.483.483,0,1,0,.836-.483L11.247,14H16a.483.483,0,0,0,.483-.483V1.7A.483.483,0,0,0,16,1.222Zm-.483.965v8.905H.973V2.187Zm0,10.847H.973v-.976H15.514Z" fill="#575757"></path>
                                                </g>
                                            </svg>&nbsp;&nbsp;&nbsp;4 Months</h6>
   
   <Card.Text className='text-product'>
    Online|Regular|Part-time
   </Card.Text>
   </div>
   <Card.Title className='text-left'>UX UI Design and Development</Card.Title>

 </Card.Body>
</SwiperSlide>
  </div>

  
  </div>
  </div>
    </>
  )
}

export default Product