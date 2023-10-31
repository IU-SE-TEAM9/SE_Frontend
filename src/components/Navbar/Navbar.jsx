import React from 'react';
import './Navbar.css'

import notification from '../Assets/notificationBell.svg'
import profilePic from '../Assets/exampleProfilePic.svg'
import arrow from '../Assets/darkDownArrow.svg'

function Navbar () {
    return (
        <section className="navbar">
            <button className="Notifications">
                <img src={notification} alt=""/>
            </button>
            <button className="ProfilePic">
                <img src={profilePic} alt=""/>
            </button>
            <a href="/userName" className="navbar-item">
                Jane Doe
                <img src={arrow} alt=""/>
            </a>
      </section>
      )
}

export default Navbar