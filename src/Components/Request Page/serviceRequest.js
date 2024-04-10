import React, {useEffect} from 'react';
import ReporterPastTickets from './ReporterPastTickets';
import ClinicianStatus from './ClinicianStatus';
import TicketForm from '../CreateIssue Page/TicketForm/TicketForm';

const MSRequestPage = () => {
  //confirm before leaving page
  // useEffect(() => {
  //   const handleBeforeUnload = (e) => {
  //     e.preventDefault();
  //     e.returnValue = '';
  //   };

  //   window.addEventListener('beforeunload', handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener('beforeunload', handleBeforeUnload);
  //   };
  // }, []);
  return (
    <div className='pageContainer'>

      <div className="request-container">
        <div className="request-left-box">
          <div className="request-left-box-container">
            <TicketForm />
          </div>
        </div>
        {/* Add feature that shows clinician assigned ipads here */}
        <div className="request-right-box">
          <div className="request-top-right-box">
            <ClinicianStatus />
          </div>
          <div className="request-bottom-right-box">
            <ReporterPastTickets />
          </div>
        </div>
      </div>
    </div>
  )
} 

export default MSRequestPage;
