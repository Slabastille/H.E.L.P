import React, { useState } from 'react';
import TicketForm from './Components/CreateIssue Page/TicketForm';
import ClinicianInfo from './Components/CreateIssue Page/ClinicianInfo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { HelpProvider } from './context/HelpContext';
import SupplyForm from './SupplyForm';
import Header from './Components/Header/Header';
import Landing from './Components/Landing Page/Landing';
import MSRequestPage from './Components/Request Page/MobileSupport/serviceRequest';
import AssignedToMe from './Components/AssignedToMe Page/AssignedToMe';

const App = () => {
  return (
    <HelpProvider>
      <div></div>
      <Router>
        <Header />
        <div id="container">
          <Switch>
            <Route exact path="/" component={MSRequestPage} />
            <Route path="/landing" component={Landing} />
            <Route path="/ticketForm" component={TicketForm} />
            <Route path="/assignedToMe" component={AssignedToMe} />
            <Route path="/MSRequestPage" component={MSRequestPage} />
            <Route path="/createIssue" component={ClinicianInfo} />
            <Route path="/supplyForm" component={SupplyForm} />
          </Switch>
          {/* WORK ON FOOTER LATER<div className="footer">Footer this was created by Samuel</div> */}
        </div>
      </Router>
    </HelpProvider>
  );
};

export default App;
