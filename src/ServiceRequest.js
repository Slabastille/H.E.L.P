import React from 'react';


const ServiceRequest = () => (
  <div className="service-request-container">
    <div id="left-box" className='hovering-box'>
      {/* Content for the left box */}
      Left Box Content
    </div>
    <div className="line"></div> 
    <div id="right-box">
      <div id="top-right-box" className='hovering-box'>
        {/* Content for the top right box */}
        Top Right Box Content
      </div>
      <div id="bottom-right-box" className='hovering-box'>
        {/* Content for the bottom right box */}
        Bottom Right Box Content
      </div>
    </div>
  </div>
);

export default ServiceRequest;



