import React from 'react';
import { Link } from 'react-router-dom';
import HelpContext from '../../context/HelpContext';
import { useContext } from 'react';

const HeaderSub = () => {
  const { currentPage } = useContext(HelpContext);
  return (
    <div className="headerBottom">
      <div className="headerBottomContainer">
        <div
          style={currentPage === 1 ? { borderBottom: '7px solid #c4d600' } : {}}
        >
          <Link to="/landing" className="nav-link">
            Home
          </Link>
        </div>
        <div
          style={currentPage === 2 ? { borderBottom: '7px solid #c4d600' } : {}}
        >
          <Link to="/assignedToMe" className="nav-link">
            All Assigned to Me
          </Link>
        </div>

        <div
          style={currentPage === 3 ? { borderBottom: '7px solid #c4d600' } : {}}
        >
          <Link to="/createIssue" className="nav-link">
            Create Issue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderSub;
