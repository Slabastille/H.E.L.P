import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import HelpContext from '../../context/HelpContext';
import { useState, useContext, useEffect } from 'react';
import Validate from '../../context/validateNumber';

const ReporterInfo = () => {
  const { showSupplyRequest, setShowSupplyRequest } = useContext(HelpContext);

  const { phoneNumber, setPhoneNumber } = useContext(HelpContext);
  const { requestType, setRequestType } = useContext(HelpContext);
  const { reporterName, setReporterName } = useContext(HelpContext);
  const history = useHistory();

  //Automatically updates the phone number in state
  const handleChange = (event) => {
    console.log('current phone number');
    console.log(event.target.value);
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
      history.push('/ticketForm1');
    } else if (requestType === 'Supply Request') {
      setShowSupplyRequest(true);
      history.push('/ticketForm');
    } else {
      document.getElementById('requestError').innerHTML =
        'Select a Request Type';
    }
    event.preventDefault();
  };

  return (
    <div className="landingContainer">
      <div className="ClinicianInfoPage">
        <div className="">Please Enter the Clinician's phone number below</div>
        <img src="/public/img/userLogo.png" alt="X" />
        <form className="clincianForm" action="/">
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
          <button
            onClick={handleClick}
            className="clinicianButton"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReporterInfo;
