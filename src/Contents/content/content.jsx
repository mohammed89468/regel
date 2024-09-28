import React from 'react';

const SectionHeader = ({ heading, icon, paragraph }) => {
  return (
    <div className="row">
      <div className="section-header text-center">
        <h2 className="fw-bold fs-1">
          {heading}
        </h2>
        <p className="fw-light fs-5 mx-auto  py-2   text-muted shadow-sm" style={{ maxWidth: '100%' }}>
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SectionHeader;

