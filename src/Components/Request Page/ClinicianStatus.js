import React, { useContext, useState } from 'react';
import HelpContext from '../../context/HelpContext';

const whiteLetter = ['Approved', 'Pending Training'];
const greenLetter = [
  'Inactive',
  'Pending Review',
  'Denied',
  'Withdrew',
  'OnHold',
];
const blackLetter = ['Terminated', 'Resigned', 'Expired'];
const black = ['Deceased'];

const status = [
  'Inactive',
  'Pending Review',
  'Denied',
  'Withdrew',
  'OnHold',
  'Approved',
  'Pending Training',
  'Terminated',
  'Resigned',
  'Expired',
];

const ClinicianStatus = () => {
  const { clinicianStatus, setClinicianStatus } = useContext(HelpContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [h2Class, setH2Class] = useState('');

  const handleClick = () => {
    setClinicianStatus(status[currentIndex]);
    setCurrentIndex((currentIndex + 1) % status.length);
    if (whiteLetter.includes(clinicianStatus)) {
      setH2Class('whiteLetter');
    }
    if (greenLetter.includes(clinicianStatus)) {
      setH2Class('greenLetter');
    }
    if (blackLetter.includes(clinicianStatus)) {
      setH2Class('blackLetter');
    }
  };

  return (
    <div className="clinicianStatus">
      <h1>Clinician Status</h1>
      <button className={h2Class} onClick={handleClick}>
        <h2>{clinicianStatus}</h2>
      </button>
    </div>
  );
};

export default ClinicianStatus;
