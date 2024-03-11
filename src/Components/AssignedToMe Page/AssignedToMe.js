import React, { useEffect } from 'react';
import AssignedMs from './AssignedMs';
import { Link } from 'react-router-dom';
import HelpContext from '../../context/HelpContext';
import { useContext } from 'react';

const AssignedToMe = () => {
  const { setCurrentPage } = useContext(HelpContext);
  useEffect(() => {
    setCurrentPage(2);
  }, [setCurrentPage]);
  return (
    <div className="landingContainer">
      <div className="assignedToMeContainer">
        <div className="assignedSection">
          <AssignedMs />
        </div>
      </div>
    </div>
  );
};

export default AssignedToMe;
