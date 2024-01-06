import React from 'react';
import { Link } from 'react-router-dom';
import HelpContext from '../context/HelpContext';
import { useState, useContext, useEffect } from 'react';

const Header = () => {
  const { modal, setModal } = useContext(HelpContext);
  const toggleModal = () => {
    setModal(!modal);
  };
  if (modal) {
    document.body.classList.add('active-modl');
  } else {
    document.body.classList.remove('active-modl');
  }
  return (
    <div className="headerContainer">
      <div className="headerLeft">
        <Link to="/">
          <img
            className="headerLogo"
            src="https://www.signifyhealth.com/hubfs/Blog-News-Generic-Avatar.png"
            alt="image"
          />
        </Link>
        <h1 className="appTitle">IT Support App</h1>
      </div>

      <div className="headerRight">
        <div className="headerElement">
          <button onClick={toggleModal} className="headerButton">
            Create a Ticket
          </button>

          {/* Ternary operator : If the modal value is true it will display the modal and the overlay */}
          {modal && (
            <div className="modal">
              <div onClick={toggleModal} className="overlay"></div>
              <div className="modal-content">
                <h2>Hello</h2>
                <button className="close-modal" onClick={toggleModal}>
                  CLOSE
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="headerElement">
          <img
            className="loginLogo"
            src="https://cdn-icons-png.flaticon.com/512/6681/6681204.png"
            alt="LOGIN"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
