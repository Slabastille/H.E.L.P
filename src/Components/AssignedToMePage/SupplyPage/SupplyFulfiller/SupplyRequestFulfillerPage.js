import React, { useEffect } from 'react';
import HelpContext from '../../../../context/HelpContext';
import { useContext, useState } from 'react';
import { useParams, Switch, Route, useRouteMatch } from 'react-router-dom';
import SupplyPreviewPage from './SupplyPreviewPage';
import SupplySubmitPage from './supplySubmitPage';
import axios from 'axios';
import SupplyReporterPastIssues from './supplyReporterPastIssues';

const SupplyRequestFulfillerPage = () => {
  const { path } = useRouteMatch();
  const { key } = useParams();
  const [loading, setLoading] = useState(true);
  const { currentSupplyRequest, setCurrentSupplyRequest } = useContext(HelpContext);
  const { supplyAssignedIssues, setSupplyAssignedIssues } = useContext(HelpContext);

  /*temporaryyyyyyy*/
  const retrieveIssues = async () => {
    try {
      const response = await axios.post('http://localhost:3001/findTickets', {
        jql: "assignee = 'slabastille@signifyhealth.com' AND project = 'Desktop Support' AND status not in (Closed, Cancelled, Canceled, Done, Resolved, 'Task Complete', 'Task Verified (Accepted)')",
      });
      // setAssignedIssues(response.data);
      setSupplyAssignedIssues(response.data.filter((issue) => issue.fields.summary.startsWith('New Supply Request For:') === true));
      // setSlaAssignedIssues(response.data.filter((issue) => !issue.fields.summary.startsWith('New Supply Request For:') === true));
    } catch (error) {
      console.error('Error retrieving tickets:', error);
    }
  };

  //fetches all current assigned issues
  useEffect(() => {
    const fetchData = async () => {
      await retrieveIssues();
      setLoading(false);
    };
    fetchData();
  }, []);
  useEffect(() => {
    setCurrentSupplyRequest(supplyAssignedIssues.find((issue) => issue.key === key));
  }, [key]);

  console.log('current supply request');
  console.log(currentSupplyRequest);
  return loading ? (
    <div>Loading... </div>
  ) : (
    <div className="pageContainer">
      <div className="request-container">
        <div className="request-left-box-container">
          <div className="request-left-box">
            <div className="request-left">
              {/* {currentSupplyIssue && <SupplyPreviewPage currentSupplyIssue={currentSupplyIssue} />} */}
              <Switch>
                <Route path={`${path}/preview`}>
                  <SupplyPreviewPage currentSupplyIssue={currentSupplyRequest} />
                </Route>
                <Route path={`${path}/submit`}>
                  <SupplySubmitPage currentSupplyIssue={currentSupplyRequest} />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
        {/* Add feature that shows clinician assigned ipads here */}
        <div className="request-right-box">
          <div className="request-top-right-box-container">
            <div className="request-top-right-box">Here</div>
          </div>
          <div className="request-bottom-right-box-container">
            <div className="request-bottom-right-box">
              <SupplyReporterPastIssues />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplyRequestFulfillerPage;
