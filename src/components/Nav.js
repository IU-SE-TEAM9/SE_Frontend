import React, { useState } from 'react';
import './Nav.css';
import { BiSearch } from 'react-icons/bi';
import Login from './Login/Login';
import Signup from './Signup/Signup';

const Nav = ({ handleTextInput }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  const toggleSignup = () => {
    setShowSignup(!showSignup);
  };

  const handleClose = () => {
    setShowLogin(false);
    setShowSignup(false);
  };

  return (
    <div>
      <div className="cont2 mt-1 mb-4">
        <div className="con1 mx-2">
          <div className="a ml-1">
            <p className="app1" id="log1">
              rentr
            </p>
          </div>
          <div className="b">
            <div className="search-icon">
              <BiSearch />
            </div>
            {/* <input
              type="text"
              placeholder="Filter by Description"
              onChange={(e) => handleTextInput(e.target.value)}
            /> */}
            <input className="search-input" type="text" placeholder="Search Something" onChange={(e) => handleTextInput(e.target.value)} />
          </div>
          <div className="c mr-1">
            <button className="si" onClick={toggleLogin}>
              Sign In
            </button>
          </div>
        </div>
      </div>
      {showLogin && <Login onClose={handleClose} />}
      {showSignup && <Signup onClose={handleClose} onLoginClick={toggleLogin} />}
    </div>
  );
};

export default Nav;
