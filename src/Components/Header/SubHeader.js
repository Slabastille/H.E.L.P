import React from 'react';

const SubHeader = () => {
  return (
    <div
      className="subheader"
      style={{ backgroundColor: 'lightblue', padding: '10px' }}
    >
      <a href="https://link1.com" className="subheader-square">
        Square 1
      </a>
      <a href="https://link2.com" className="subheader-square">
        Square 2
      </a>
      <a href="https://link3.com" className="subheader-square">
        Square 3
      </a>
    </div>
  );
};

export default SubHeader;
