/* eslint-disable no-unused-vars */

import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

import notification from '../Assets/notificationBell.svg'
import profilePic from '../Assets/blankpage.png'
import arrow from '../Assets/darkDownArrow.svg'
import messages from '../Assets/messages.png'
import account from '../Assets/myAccount.png'
import wrench from '../Assets/manageRental.png'
import gear from '../Assets/settings.png'
import logout from '../Assets/logout.png'

function Navbar () {
    return (
        <div className="navbar-container">
           <section className="navbar">
            {/* <button className="Notifications">
                <img src={notification} alt=""/>
            </button> */}
            <a href="/userName" className="navbar-item">
                <div class="dropdown1">
                    <button class="userMenu" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img className="userProfilePic" src={profilePic} id="img1" alt=""/>
                        <span class="name-text">Welcome</span>
                        <img src={arrow} alt="" />
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link to="/chats" className="dropdown-ref">
                            <a class="dropdown-item" href="#"> <img src={messages} /> Messages</a>
                        </ Link>
                        <Link to="/MyAccount" className="dropdown-ref">
                            <a class="dropdown-item" href="#"> <img src={account} /> Account</a>
                        </ Link>
                        <Link to="/RenterOverview" className="dropdown-ref">
                            <a class="dropdown-item" href="#"> <img src={wrench} /> Manage Rental</a>
                        </ Link>
                        <Link to="/Settings" className="dropdown-ref">
                            <a class="dropdown-item" href="#"> <img src={gear} /> Settings</a>
                        </ Link>
                        <div class="dropdown-divider"></div>
                        <Link to="/" className="dropdown-ref">
                            <a class="dropdown-item" href="#"> <img src={logout} /> Logout</a>
                        </ Link>
                    </div>
                </div>
            </a>
      </section> 
        </div>
        
      )
}

export default Navbar