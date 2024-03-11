import React from 'react';
import { Link } from 'react-router-dom';
import HelpContext from '../../context/HelpContext';
import { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const HeaderTop = () => {
  const history = useHistory();
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
    <div className="headerTop">
      <div className="headerTopLeft">
        <Link to="/">
          <img
            className="headerLogo"
            src="https://www.signifyhealth.com/hubfs/Blog-News-Generic-Avatar.png"
            alt="image"
          />
        </Link>

        <div className="headerTitle">IT Support App</div>
      </div>

      <div className="headerTopRight">
        <div className="headerButton" onClick={toggleModal}>
          Sign In
        </div>

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

        {/* <img
          className="loginLogo"
          src="https://cdn-icons-png.flaticon.com/512/6681/6681204.png"
          alt="LOGIN"
        /> */}
      </div>
    </div>
  );
};

export default HeaderTop;

/*







*/
