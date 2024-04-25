import React from 'react';
import { createContext, useState } from 'react';

const HelpContext = createContext();

export const HelpProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState({ name: 'Samuel', role: 'Admin' });
  // const [summary, setSummary] = useState('');
  // const [description, setDescription] = useState('');
  // const [verifiedAssets, setVerifiedAssets] = useState(false);

  const [issueSupplies, setIssueSupplies] = useState(false);
  const [modal, setModal] = useState(false);
  const [assignedIssues, setAssignedIssues] = useState([]);
  const [assignedSupplyIssues, setAssignedSupplyIssues] = useState([]); // [{}
  const [slaAssignedIssues, setSlaAssignedIssues] = useState([]);
  const [currentAssignedTable, setCurrentAssignedTable] = useState(1);
  const [msTriage, setMsTriage] = useState([]);
  const [dsTriage, setDsTriage] = useState([]);
  const [reporter, setReporter] = useState({ name: '', phone: '', email: 'slabastille@signifyhealth.com', npi: '' });
  const [reporterPastIssues, setReporterPastIssues] = useState([]);
  const [supplyRequestReporter, setSupplyRequestReporter] = useState([]);
  //Used to track the current page in the header subcomponent
  const [currentPage, setCurrentPage] = useState(1);
  const [clinicianStatus, setClinicianStatus] = useState('Pending Review');
  const [showSupplyRequest, setShowSupplyRequest] = useState(false);
  const [comments, setComments] = useState([]);
  const [currentRequest, setCurrentRequest] = useState({ id: '', key: '', status: 'Waiting for Support' });
  const [linkedRequests, setLinkedRequests] = useState([]);
  const [linkType, setLinkType] = useState('');

  return (
    <HelpContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
        // summary,
        // setSummary,
        // description,
        // setDescription,
        issueSupplies,
        setIssueSupplies,
        comments,
        setComments,
        // verifiedAssets,
        // setVerifiedAssets,
        modal,
        setModal,
        assignedIssues,
        setAssignedIssues,
        slaAssignedIssues,
        setSlaAssignedIssues,
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
        currentAssignedTable,
        setCurrentAssignedTable,
        currentRequest,
        setCurrentRequest,
        linkedRequests,
        setLinkedRequests,
        linkType,
        setLinkType,
        reporterPastIssues,
        setReporterPastIssues,
      }}
    >
      {children}
    </HelpContext.Provider>
  );
};

export default HelpContext;
