import React from 'react';
import './service.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const services = [
  {
    title: "Custom Metal Fabrication",
    description: "Our expert fabricators provide custom metalwork solutions for a variety of industries, including automotive, aerospace, construction, and more. From sheet metal fabrication to precision welding, we deliver high-quality results tailored to your specifications.",
    iconClass: "fa-solid fa-industry" // You can choose appropriate icons
  },
  {
    title: "Welding and Assembly",
    description: "We offer comprehensive welding services, including MIG, TIG, and arc welding. Our skilled technicians ensure precise welding and seamless assembly of metal structures, whether for industrial, commercial, or residential applications.",
    iconClass: "fa-solid fa-wrench"
  },
  {
    title: "Laser Cutting",
    description: "Utilizing advanced laser cutting technology, we provide precise and efficient cuts for a wide range of materials, including steel, aluminum, and stainless steel. Perfect for intricate designs and large-scale production.",
    iconClass: "fa-solid fa-cut"
  },
  {
    title: "CNC Machining",
    description: "Our CNC (Computer Numerical Control) machining services guarantee accuracy and repeatability for the most complex parts and components. We work with all metals to produce high-precision products, whether for prototyping or large-batch production.",
    iconClass: "fa-solid fa-cogs"
  },
  {
    title: "Sheet Metal Fabrication",
    description: "Specializing in sheet metal fabrication, we create durable and custom designs, including enclosures, panels, brackets, and more. Our team ensures precise bending, cutting, and forming to meet your project’s needs.",
    iconClass: "fa-solid fa-layer-group"
  },
  {
    title: "Metal Bending and Forming",
    description: "Our metal bending and forming services provide precise shaping of metals to your desired dimensions. Whether for simple angles or complex shapes, we use advanced press brake machines to achieve perfect results.",
    iconClass: "fa-solid fa-expand"
  },
  {
    title: "Powder Coating & Metal Finishing",
    description: "We offer professional powder coating services that provide durable, long-lasting finishes for metal parts and products. This service enhances both the aesthetic appeal and corrosion resistance of your metal products.",
    iconClass: "fa-solid fa-spray-can"
  },
  {
    title: "Structural Steel Fabrication",
    description: "We fabricate structural steel components for construction projects, including beams, columns, trusses, and more. Our team ensures compliance with industry standards and delivers robust solutions for any construction need.",
    iconClass: "fa-solid fa-building"
  },
  {
    title: "Prototyping and Product Development",
    description: "Need a custom metal prototype for your next big project? We assist in product development, from initial concept design to final production, providing you with expertly crafted prototypes that meet your specifications.",
    iconClass: "fa-solid fa-cube"
  },
  {
    title: "Automotive and Aerospace Components",
    description: "We specialize in fabricating components for the automotive and aerospace industries, ensuring precision and high-quality finishes. From exhaust systems to aircraft parts, we deliver solutions that meet industry standards.",
    iconClass: "fa-solid fa-car"
  },
  {
    title: "Architectural Metal Fabrication",
    description: "Enhance your architectural projects with custom metalwork. We create metal staircases, railings, decorative panels, and facades, bringing your designs to life with precision and style.",
    iconClass: "fa-solid fa-archway"
  },
  {
    title: "Industrial Equipment Repair and Maintenance",
    description: "We provide repair and maintenance services for industrial equipment, restoring them to peak operational performance. Our expert team handles metal repair, part replacement, and structural improvements to extend the lifespan of your machinery.",
    iconClass: "fa-solid fa-tools"
  },
  {
    title: "Water Jet Cutting",
    description: "Offering precise, high-pressure water jet cutting services, we can cut through metals, plastics, and other materials with intricate detail. Perfect for projects requiring precision without heat-affected zones.",
    iconClass: "fa-solid fa-water"
  },
  {
    title: "Pipe and Tube Fabrication",
    description: "We offer custom pipe and tube fabrication, including cutting, bending, welding, and assembling pipes for various applications such as HVAC, plumbing, and industrial frameworks.",
    iconClass: "fa-solid fa-pipe"
  },
  {
    title: "Metal Stamping",
    description: "With our metal stamping services, we provide high-volume production of metal parts with consistent quality. Whether it's for small, detailed components or larger stamped pieces, we ensure accurate results every time.",
    iconClass: "fa-solid fa-stamp"
  },
  {
    title: "Fabrication for Renewable Energy Projects",
    description: "We support the renewable energy sector with custom metal fabrication for wind turbines, solar panel mounts, and other renewable energy equipment. Our services ensure durability and precision for sustainable energy projects.",
    iconClass: "fa-solid fa-solar-panel"
  },
  {
    title: "Aluminum and Stainless Steel Fabrication",
    description: "Aluminum and stainless steel are key materials in many industries, and we specialize in fabricating products using these metals. Whether you need lightweight, corrosion-resistant parts or robust structural elements, we have you covered.",
    iconClass: "fa-solid fa-aluminum-can"
  },
  {
    title: "3D Metal Printing",
    description: "As part of our innovation, we offer 3D metal printing for rapid prototyping and complex part creation. This cutting-edge technology allows for the fabrication of intricate designs that traditional methods cannot achieve.",
    iconClass: "fa-solid fa-print"
  },
  {
    title: "On-Site Fabrication and Installation",
    description: "For large projects that require on-site work, we provide fabrication and installation services at your location. Our mobile team ensures precise fabrication and installation for projects like structural frameworks and industrial machinery.",
    iconClass: "fa-solid fa-truck"
  }
];

const AdvertisersServiceCards = () => {
  return (
    <section id="advertisers" className="advertisers-service-sec pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="section-header text-center">
            <h2 className="fw-bold fs-1">
              Our <span className="b-class-secondary">Metal Fabrication </span>Services
            </h2>
            <p className="sec-icon">
              <i className="fa-solid fa-gear"></i>
            </p>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            320: { slidesPerView: 1 }, // Mobile phones
            768: { slidesPerView: 2 }, // Tablets
            1024: { slidesPerView: 3 }  // Desktops
          }}
className='myswiper'        >
          {services.map((service, index) => (
            <SwiperSlide className="service-card" key={index}>
                <div className="icon-wrapper">
                <i  className={`${service.iconClass}`}/>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
            </SwiperSlide>
          ))}
        </Swiper>
</div>
    </section>
  );
};

export default AdvertisersServiceCards;
