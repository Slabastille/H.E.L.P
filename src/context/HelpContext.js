import React from 'react';
import { createContext, useState } from 'react';

const HelpContext = createContext();

export const HelpProvider = ({ children }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [requestType, setRequestType] = useState('');
  const [summary, setSummary] = useState('');
  const [description, setDescription] = useState('');
  const [modal, setModal] = useState(false);
  const [assignedIssues, setAssignedIssues] = useState([]);
  const [assignedSupplyIssues, setAssignedSupplyIssues] = useState([]);
  const [msTriage, setMsTriage] = useState([]);
  const [dsTriage, setDsTriage] = useState([]);
  const [reporter, setReporter] = useState({ name: '', email: '', npi: '' });
  const [supplyRequestReporter, setSupplyRequestReporter] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [clinicianStatus, setClinicianStatus] = useState('Pending Review');
  const [showSupplyRequest, setShowSupplyRequest] = useState(false);

  return (
    <HelpContext.Provider
      value={{
        phoneNumber,
        setPhoneNumber,
        requestType,
        setRequestType,
        summary,
        setSummary,
        description,
        setDescription,
        modal,
        setModal,
        assignedIssues,
        setAssignedIssues,
        clinicianStatus,
        setClinicianStatus,
        msTriage,
        setMsTriage,
        dsTriage,
        setDsTriage,
        reporter,
        setReporter,
        showSupplyRequest,
        setShowSupplyRequest,
        assignedSupplyIssues,
        setAssignedSupplyIssues,
        supplyRequestReporter,
        setSupplyRequestReporter,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </HelpContext.Provider>
  );
};

export default HelpContext;
