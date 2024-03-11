import React from 'react';
import HelpContext from '../../context/HelpContext';
import { useContext, useEffect } from 'react';
const LandingHeader = () => {
  const { setCurrentPage } = useContext(HelpContext);
  useEffect(() => {
    setCurrentPage(1);
  }, [setCurrentPage]);
  return (
    <div className="landingHeaderContainer">
      <h1>A</h1>
      <h1>B</h1>
      <h1>C</h1>
      <h1>D</h1>
    </div>
  );
};

export default LandingHeader;
