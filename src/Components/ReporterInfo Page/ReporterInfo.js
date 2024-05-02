import React, { useState, useContext, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import HelpContext from '../../context/HelpContext';
import Validate from '../../context/validateNumber';

//Finish Form for the reporter info page
//we want to only be able to edit one value at a time
// we are passing either npi, name or email address

const ReporterInfo = () => {
  const history = useHistory();
  const { setCurrentPage } = useContext(HelpContext);
  const { reporter, setReporter } = useContext(HelpContext);

  //Updates the current page for the header subcomponent
  useEffect(() => {
    setCurrentPage(3);
  }, [setCurrentPage]);

  //Automatically updates the reporter object in state
  const handleChange = (field, event) => {
    setReporter({ ...reporter, [field]: event.target.value });
  };

  const handleClick = () => {
    history.push('/ticketForm');
  };

  return (
    <div className="pageContainer">
      <div className="mainSection">
        <div className="clinicianInfoPageContainer">
          <div className="clinicianInfoHeader">
            <div className="clinicianInfoImage">
              <img src="/img/userLogo.png" alt="X" />
            </div>
            <div className="clinicianInfoTitle">Enter clinician info below</div>
          </div>
          <form className="clinicianForm" action="/">
            <div className="clinicianInfoContainer">
              <div className="clinicianInfoTypes"> Reporter name </div>
              <input className="clinicianInfo" onChange={(event) => handleChange('name', event)} />
            </div>
            <div className="clinicianInfoContainer">
              <div className="clinicianInfoTypes"> Reporter npi </div>
              <input className="clinicianInfo" onChange={(event) => handleChange('npi', event)} />
            </div>
            <div className="clinicianInfoContainer">
              <div className="clinicianInfoTypes"> Reporter phone </div>
              <input className="clinicianInfo" onChange={(event) => handleChange('phone', event)} />
            </div>

            <div className="clinicianInfoContainer">
              <div className="clinicianInfoTypes"> Reporter email </div>
              <input className="clinicianInfo" onChange={(event) => handleChange('email', event)} />
            </div>

            <button onClick={handleClick} className="clinicianButton" type="submit">
              NEXT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReporterInfo;
