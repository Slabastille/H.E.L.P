import React, { useState } from 'react';
import TicketForm from './Components/ReporterInfo Page/TicketForm/TicketForm';
import ReporterInfo from './Components/ReporterInfo Page/ReporterInfo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { HelpProvider } from './context/HelpContext';
import Header from './Components/Header/Header';
import Landing from './Components/LandingPage/Landing';
import MSRequestPage from './Components/Request Page/serviceRequest';
import AssignedToMe from './Components/AssignedToMePage/AssignedToMe';
import SupplyPage from './Components/AssignedToMePage/SupplyPage/SupplyFulfiller/SupplyPage';
import SupplyPreviewPage from './Components/AssignedToMePage/SupplyPage/SupplyFulfiller/SupplyPreviewPage';
import SupplyRequestFulfillerPage from './Components/AssignedToMePage/SupplyPage/SupplyFulfiller/SupplyRequestFulfillerPage';

const App = () => {
  return (
    <HelpProvider>
      <Router>
        <Header />
        <div id="container">
          <Switch>
            {/* Landing Page below */}
            <Route exact path="/" component={AssignedToMe} />
            <Route path="/landing" component={Landing} />
            {/* Landing Page above */}
            {/* Assigned Issues below */}
            <Route path="/assignedToMe" component={AssignedToMe} />
            <Route path="/fulfill-request/:key" component={SupplyRequestFulfillerPage} />
            {/* Assigned Issues above */}
            <Route path="/reporterInfo" component={ReporterInfo} />
            <Route path="/ticketForm" component={MSRequestPage} />

            {/* <Route path="/supplyPage" component={SupplyPage} /> */}
            {/* <Route path="/supplyPreviewPage" component={SupplyPreviewPage} /> */}
          </Switch>
          {/* WORK ON FOOTER LATER<div className="footer">Footer this was created by Samuel</div> */}
        </div>
        x
      </Router>
    </HelpProvider>
  );
};

export default App;
