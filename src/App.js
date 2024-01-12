import React, { useState } from 'react';
import TicketForm from './TicketForm';
import ClinicianInfo from './ClinicianInfo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { HelpProvider } from './context/HelpContext';
import SupplyForm from './SupplyForm';
import Header from './Components/Header';
import Landing from './Components/Landing';

const App = () => {
  return (
    <HelpProvider>
      <div>
        <Header />
      </div>
      <Router>
        <div id="container">
          <Switch>
            <Route exact path="/" component={Landing} />
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
