import React from 'react';
import TicketForm from './TicketForm';
import ClinicianInfo from './ClinicianInfo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { HelpProvider } from './context/HelpContext';
import SupplyForm from './SupplyForm';
import CreateIssue from './CreateIssue';
import CreateIssueV2 from './CreateIssueV2';
import ServiceRequest from './ServiceRequest';

const App = () => {
  return (
    <HelpProvider>
      <Router>
        <div id="container" >
          <div className="header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', boxShadow: '0 0 10px rgba(0, 0, 0, 1)' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src="/shlogo.PNG" alt="Logo" style={{ width: '50px', marginLeft: '10px', padding: '10px' }} />
              <h1 style={{ padding: '10px', marginLeft: '10px' }}>IT Works</h1>
            </div>
            <img src="/profileimg.PNG" alt="Profile Icon" style={{ width: '50px', marginRight: '10px', padding: '10px' }} />
          </div>
          <Switch>
            <Route exact path="/" component={ServiceRequest} />
            <Route exact path="/clinicianInfo" component={ClinicianInfo} />
            <Route exact path="/ticketForm" component={TicketForm} />
            <Route exact path="/supplyForm" component={SupplyForm} />
          </Switch>
          {/* WORK ON FOOTER LATER<div className="footer">Footer this was created by Samuel</div> */}
        </div>
      </Router>
    </HelpProvider>
  );
};

export default App;








