import React, { useState } from 'react';
import TicketForm from './TicketForm';
import ClinicianInfo from './ClinicianInfo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { HelpProvider } from './context/HelpContext';
import SupplyForm from './SupplyForm';

const App = () => {
  return (
    <HelpProvider>
      <Router>
        <div id="container">
          <div className="header">
            <Link to="/">
              <h1>Mobile Support App *fix header later</h1>
            </Link>
          </div>
          <Switch>
            <Route exact path="/" component={ClinicianInfo} />
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
