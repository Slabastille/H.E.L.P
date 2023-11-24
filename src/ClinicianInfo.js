import React from 'react';
import { useHistory } from 'react-router-dom';

const ClinicianInfo = () => {
  const history = useHistory();

  var reroute = () => {
    console.log('this is the value of phone number' + phoneNumber);
    history.push('/ticketForm');
    // if (phoneNumber.length === 10) {
    //   console.log('YESS');
    // }
  };
  let phoneNumber;
  return (
    <div className="ClinicianInfoPage">
      <form className="clincianForm" action="/">
        <h1>Please Enter the Clinician's phone number below</h1>
        <div>
          <input
            className="info"
            value={phoneNumber}
            placeholder="Phone Number"
          />
        </div>
        <button
          className="clinicianButton"
          onClick={reroute}
          type="submit"
          href="/"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ClinicianInfo;
