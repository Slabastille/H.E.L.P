import React from 'react';
import { createContext, useState } from 'react';

const HelpContext = createContext();

export const HelpProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState({ name: 'Samuel', role: 'Admin' });
  const [currentPage, setCurrentPage] = useState(1);

  const [assignedIssues, setAssignedIssues] = useState([]);
  const [slaAssignedIssues, setSlaAssignedIssues] = useState([]);
  const [supplyAssignedIssues, setSupplyAssignedIssues] = useState([]); // [{}
  const [currentAssignedTable, setCurrentAssignedTable] = useState(1);
  const [supplyReporter, setSupplyReporter] = useState({ name: '', email: '', phone: '', npi: '' }); // [{}
  const [supplyReporterPastIssues, setSupplyReporterPastIssues] = useState([]); // [{}]
  const [linkedSupplyRequests, setLinkedSupplyRequests] = useState([]);
  const [currentSupplyRequest, setCurrentSupplyRequest] = useState({ id: '', key: '', status: '' });

  // const [summary, setSummary] = useState('');
  // const [description, setDescription] = useState('');

  // const [verifiedAssets, setVerifiedAssets] = useState(false);

  const [issueSupplies, setIssueSupplies] = useState(false);
  const [modal, setModal] = useState(false);
  const [reporter, setReporter] = useState({ name: '', phone: '', email: 'slabastille@signifyhealth.com', npi: '' });
  const [reporterPastIssues, setReporterPastIssues] = useState([]);
  const [supplyRequestReporter, setSupplyRequestReporter] = useState([]);
  //Used to track the current page in the header subcomponent
  const [clinicianStatus, setClinicianStatus] = useState('Pending Review');
  const [comments, setComments] = useState([]);
  const [currentRequest, setCurrentRequest] = useState({ id: '', key: '', status: 'Waiting for Support' });
  const [linkedRequests, setLinkedRequests] = useState([]);
  const [linkType, setLinkType] = useState('');
  const [issueType, setIssueType] = useState('Service Request');

  return (
    <HelpContext.Provider
      value={{
        //Below Used in Multiple Pages
        loggedInUser,
        setLoggedInUser,
        currentPage,
        setCurrentPage,
        //Above Used in Multiple Pages

        //Below Used in the assigned to me page only**
        assignedIssues,
        setAssignedIssues,
        slaAssignedIssues,
        setSlaAssignedIssues,

        currentAssignedTable,
        setCurrentAssignedTable,
        //Below in the supply fulfill request page only
        supplyAssignedIssues,
        setSupplyAssignedIssues,
        supplyReporter,
        setSupplyReporter,
        supplyReporterPastIssues,
        setSupplyReporterPastIssues,
        linkedSupplyRequests,
        setLinkedSupplyRequests,
        currentSupplyRequest,
        setCurrentSupplyRequest,

        //Above in the supply fulfill request page only

        //Above in the assigned to me page only **

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

        clinicianStatus,
        setClinicianStatus,
        reporter,
        setReporter,

        supplyRequestReporter,
        setSupplyRequestReporter,

        currentRequest,
        setCurrentRequest,
        linkedRequests,
        setLinkedRequests,
        linkType,
        setLinkType,
        reporterPastIssues,
        setReporterPastIssues,
        issueType,
        setIssueType,
      }}
    >
      {children}
    </HelpContext.Provider>
  );
};

export default HelpContext;
