import React from "react";
import "./Cardtest.css"; // Import your CSS for styling

const Cardtest = ({ name, role, testimonial, course, image }) => {
  return (
    <div className="testimonial-card">
     <div className="testimonial-imgdiv"> <img src={image} alt={name} className="testimonial-img" />
     </div> <div className="testimonial-content">
        <h3>{name}</h3>
        <p className="role">{role}</p>
        <p className="course">Course: {course}</p>
        <p className="testimonial">"{testimonial}"</p>
      </div>
    </div>
  );
};

export default Cardtest;
