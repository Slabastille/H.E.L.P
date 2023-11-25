import React from 'react';
import { useHistory } from 'react-router-dom';
import HelpContext from './context/HelpContext';
import { useState, useContext, useEffect } from 'react';

const ClinicianInfo = () => {
  const { phoneNumber, setPhoneNumber } = useContext(HelpContext);
  const history = useHistory();
  const handleChange = (event) => {
    console.log(event.target.value);
    setPhoneNumber(event.target.value);
  };
  const handleClick = () => {
    history.push('/ticketForm');
  };

  return (
    <div className="ClinicianInfoPage">
      <form className="clincianForm" action="/">
        <h1>Please Enter the Clinician's phone number below</h1>
        <div>
          <input
            className="info"
            value={phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
          />
        </div>
        <button onClick={handleClick} className="clinicianButton" type="button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ClinicianInfo;
