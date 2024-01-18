import React from 'react';
import { Link } from 'react-router-dom';

const HeaderSub = () => {
  return (
    <div className="headerBottom">
      <div className="headerBottomContainer">
        <div>
          <Link to="/landing" className="nav-link">
            Home
          </Link>
        </div>
        <div>
          <Link to="/assignedToMe" className="nav-link">
            Assigned to Me
          </Link>
        </div>
        <div>
          <Link to="/createIssue" className="nav-link">
            Create Issue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderSub;
