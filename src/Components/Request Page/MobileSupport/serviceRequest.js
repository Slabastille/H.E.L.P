import React from 'react';
import ReporterPastTickets from '../ReporterPastTickets';
import ClinicianStatus from '../ClinicianStatus';
import TicketForm from '../../CreateIssue Page/TicketForm';

const MSRequestPage = () => (
  <div className="request-container">
    <div className="request-left-box">
      <div className="request-left-box-container">
        <TicketForm />
      </div>
    </div>

    <div className="request-right-box">
      <div className="request-top-right-box">
        <ClinicianStatus />
      </div>
      <div className="request-bottom-right-box">
        <ReporterPastTickets />
      </div>
    </div>
  </div>
);

export default MSRequestPage;
