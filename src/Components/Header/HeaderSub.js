import React from 'react';
import { Link } from 'react-router-dom';
import HelpContext from '../../context/HelpContext';
import { useContext } from 'react';

const HeaderSub = () => {
  const { currentPage } = useContext(HelpContext);
  return (
    <div className="headerBottom">
      <div className="headerBottomContainer">
        <Link to="/landing" className="nav-link" style={currentPage === 1 ? { borderBottom: '7px solid #c4d600' } : {}}>
          <div>Home</div>
        </Link>

        <Link to="/assignedToMe" className="nav-link" style={currentPage === 2 ? { borderBottom: '7px solid #c4d600' } : {}}>
          <div>My Issues</div>
        </Link>

        <Link to="/reporterInfo" className="nav-link" style={currentPage === 3 ? { borderBottom: '7px solid #c4d600' } : {}}>
          <div>Create Issue</div>
        </Link>
      </div>
    </div>
  );
};

export default HeaderSub;
