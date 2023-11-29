import React from 'react';
import { useHistory } from 'react-router-dom';
import HelpContext from './context/HelpContext';
import { useState, useContext, useEffect } from 'react';
import Validate from './context/validateNumber';

const ClinicianInfo = () => {
  const { phoneNumber, setPhoneNumber } = useContext(HelpContext);
  const { requestType, setRequestType } = useContext(HelpContext);
  const history = useHistory();

  const handleChange = (event) => {
    // console.log('current phone number');
    // console.log(event.target.value);
    setPhoneNumber(event.target.value);
  };

  const selectChange = (event) => {
    console.log(event.target.value);
    setRequestType(event.target.value);
  };
  const handleClick = (event) => {
    // if (phoneNumber.length === 10) {
    console.log('The current phone number is ' + phoneNumber);

    console.log('number below');
    //Validate(phoneNumber);
    if (requestType === 'Support Request') {
      history.push('/ticketForm');
    } else if (requestType === 'Supply Request') {
      history.push('/supplyForm');
    } else {
      document.getElementById('requestError').innerHTML =
        'Select a Request Type';
    }
    event.preventDefault();
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
        <div id="requestError"></div>
        <select
          className="selectRequestType"
          onChange={selectChange}
          type="select"
        >
          <option>Choose a Request Type</option>
          <option value={'Support Request'}>Support Request</option>
          <option value={'Supply Request'}>Supply Request</option>
        </select>
        <button onClick={handleClick} className="clinicianButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ClinicianInfo;
