import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavbarComponent.css';
import { FaChevronDown } from 'react-icons/fa';
const NavbarComponent = () => {
      const [isFixed, setIsFixed] = useState(false);
      const [isCollapsed, setIsCollapsed] = useState(true);
    
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      };
    
      const toggleNavbar = () => {
        setIsCollapsed(!isCollapsed);
      };
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
      return (
        <nav className={`navbar navbar-expand-md  bg-body-tertiary`}>
          <div className="container-xl">
            <a className="navbar-brand fst-italic fw-bold" href="#">
         <img src='logo.jpeg'/>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleNavbar} // Toggle the navbar on button click
              aria-controls="navbarSupportedContent"
              aria-expanded={!isCollapsed} // Update aria-expanded based on the collapse state
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isCollapsed ? 'collapse' : 'show'}`} id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/" aria-current="page">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="servicesDropdown2"
                role="button"
                data-bs-toggle="dropdown"
              >
                About us <FaChevronDown  />
              </Link>
              <ul className="dropdown-menu" aria-labelledby="servicesDropdown2">
                <li><Link className="dropdown-item" to="/OurCompany">Our Company</Link></li>
                <li><Link className="dropdown-item" to="/QualityPolicy">Quality Policy</Link></li>
                <li><Link className="dropdown-item"  to="/VisionMission">Vision & Mission</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="servicesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                
              >
                Services <FaChevronDown  />
              </Link>
              <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                <li><Link className="dropdown-item" to="/CADDesign">CAD Design</Link></li>
                <li><Link className="dropdown-item" to="/LaserCutting">Laser Cutting</Link></li>
                <li><Link className="dropdown-item" to="/PressBrake">Press Brake</Link></li>
                <li><Link className="dropdown-item" to="/WeldingFabrication">Welding & Fabrication</Link></li>
                <li><Link className="dropdown-item" to="/PowderCoating">Powder Coating</Link></li>
                <li><Link className="dropdown-item" to="/QCA">Quality Control & Assembly</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/contact" aria-current="page">Contact</Link>
            </li>
          </ul>
           <div className="contact-info d-md-flex">
            
              </div>
            </div>
          </div>
        </nav>
    
  );
};

export default NavbarComponent;
