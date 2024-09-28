// /Contents/sections/VisionMission.js
import React from 'react';
import SectionHeader from '../content/content';

const VisionMission = () => {
  return (
    <>
    <div className="my-5">
      <SectionHeader
        heading="Our Vision"
        icon="fa-solid fa-gear"
        paragraph="To grow continuously and become the partner of choice for customers seeking excellence in the manufacturing of sheet metal products."
      />
      </div>
      <div className="mb-5">
      <SectionHeader
        heading="Our Mission"
        icon="fa-solid fa-gear"
        paragraph="To conform to sustainable best practices in all our processes and aim for ongoing improvements in products and services for enhancing customer satisfaction at every touch point."
      />
   </div>
    </>
  );
};

export default VisionMission;
