/* eslint-disable no-unused-vars */


import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import './MyAccount.css'
import x from '../Assets/x.svg'
import profilePic from '../Assets/exampleProfilePic.svg'
import pencil from '../Assets/green_pencil.png'
import openEye from '../Assets/revealPasswordEye.png'
import hide from '../Assets/hidePassword.png'

function MyAccount () {
    const userPassword = 'password1234'; 
    const userEmail = 'lavakumarkoyi@gmail.com'; 
    const [showPassword, setShowPassword] = useState(false);
    const [eyeImage, setEyeImage] = useState(openEye);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
        setEyeImage(showPassword ? openEye : hide); // Toggle the eye image
    };
    return (
        <>
            <Modal show={true} onHide={() => {}}>
                <Modal.Header>
                    <div className = "modalTitle"> My Account </div>
                    <Link to="/login" className="buttonLink">
                        <button className="modalExit">
                            <img src={x} />
                        </button>
                    </Link>
                </Modal.Header>
                <Modal.Body>
                    <div className="myAccountContainer">
                        {/* <img className="profilePic" src={profilePic} alt="Profile" /> */}
                        <div className="accountInfoUserName">
                            Lava Kumar
                            <img src={pencil} alt="Pencil" />
                        </div>
                        <div className="accountInfo">
                            <div className="Label"> Email </div>
                            <input className="userEmail" type="text" value={userEmail} readOnly />
                            <div className="Label"> Password </div>
                            <div className="userPassword">
                                {showPassword ? (
                                    <input className="password" type="text" value={userPassword} readOnly />
                                ) : (
                                    <input className="password" type="password" value={userPassword} readOnly />
                                )}
                                <button className="unmaskPassword" onClick={togglePasswordVisibility}>
                                    <img className="Eye" src={eyeImage} alt="Unmask" />
                                </button>
                            </div>
                        </div>
                        <Link to="/change-password" className="changePasswordLink"><u className="changePasswordLink">Change Password</u> </Link>
                        <Link to="/landing-page" className="saveChanges">
                            <button className="saveChanges">Save Changes</button>
                        </Link>
                    </div>    
                </Modal.Body>
            </Modal>
        </>
    )
}

export default MyAccount