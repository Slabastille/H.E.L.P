import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import HelpContext from '../../context/HelpContext';
import { useState, useContext, useEffect } from 'react';
import Validate from '../../context/validateNumber';

const ReporterInfo = () => {
  const { showSupplyRequest, setShowSupplyRequest } = useContext(HelpContext);
  const { phoneNumber, setPhoneNumber } = useContext(HelpContext);
  const { requestType, setRequestType } = useContext(HelpContext);
  const { reporter, setReporter } = useContext(HelpContext);
  const { setCurrentPage } = useContext(HelpContext);
  useEffect(() => {
    setCurrentPage(3);
  }, [setCurrentPage]);
  const history = useHistory();

  //Automatically updates the email in state
  const handleChange = (event) => {
    // const { name, value } = event.target;

    console.log(event.target.value);
    setReporter({ ...reporter, email: event.target.value });
  };

  const selectChange = (event) => {
    console.log(event.target.value);
    setRequestType(event.target.value);
  };
  const handleClick = (event) => {
    // if (phoneNumber.length === 10) {
    // console.log('The current phone number is ' + phoneNumber);

    // console.log('number below');
    //Validate(phoneNumber);

    if (requestType === 'Support Request') {
      history.push('/ticketForm');
    } else if (requestType === 'Supply Request') {
      setShowSupplyRequest(true);
      history.push('/ticketForm');
    }
    event.preventDefault();
  };

  return (
    <div className="landingContainer">
      <div className="mainSection">
        <div className="reporterContainer">
          <div className="ClinicianInfoPage">
            <img src="/img/userLogo.png" alt="X" />
            <div className="">
              Please Enter the Clinician's phone number below
            </div>
            <form className="clincianForm" action="/">
              <div>
                <input
                  className="info"
                  // value={reporter.name}
                  placeholder="Reporter Name"
                />
              </div>
              <div>
                <input
                  className="info"
                  value={reporter.email}
                  onChange={handleChange}
                  placeholder="Reporter Email"
                />
              </div>
              <div>
                <input
                  className="info"
                  // value={reporter.npi}
                  placeholder="Reporter NPI"
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
      </div>
    </div>
  );
};

export default ReporterInfo;
