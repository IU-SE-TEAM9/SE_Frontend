import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import './ChangePassword.css'
import x from '../../components/Assets/x.svg'
import profilePic from '../../components/Assets/exampleProfilePic.svg'
import pencil from '../../components/Assets/green_pencil.png'
import openEye from '../../components/Assets/revealPasswordEye.png'
import hide from '../../components/Assets/hidePassword.png'

function ChangePassword () {
    const userPassword = 'password1234';
    const userEmail = 'janedoe@gmail.com';

    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [currentPasswordEyeImage, setCurrentPasswordEyeImage] = useState(openEye);
    const [newPasswordEyeImage, setNewPasswordEyeImage] = useState(openEye);
    const [confirmPasswordEyeImage, setConfirmPasswordEyeImage] = useState(openEye);

    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const toggleCurrentPasswordVisibility = () => {
        setShowCurrentPassword(!showCurrentPassword);
        setCurrentPasswordEyeImage(showCurrentPassword ? openEye : hide);
    };

    const toggleNewPasswordVisibility = () => {
        setShowNewPassword(!showNewPassword);
        setNewPasswordEyeImage(showNewPassword ? openEye : hide);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
        setConfirmPasswordEyeImage(showConfirmPassword ? openEye : hide);
    };

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSaveChanges = () => {
        if (newPassword === confirmPassword) {
            // If newPassword and confirmPassword are identical, assign the value of userPassword
            setNewPassword(userPassword);
            setConfirmPassword(userPassword);
        }
    };

    return (
        <>
            <Modal show={true} onHide={() => {}}>
                <Modal.Header>
                    <div className = "modalTitle"> Change Password </div>
                    <Link to="/landing-page" className="buttonLink">
                        <button className="modalExit">
                            <img src={x} />
                        </button>
                    </Link>
                </Modal.Header>
                <Modal.Body>
                    <div className = "container">
                        <div className="Passwords">
                            <div className="Label"> Current Password </div>
                                <div className="currentPassword">
                                    {showCurrentPassword ? (
                                        <input className="password" type="text" value={userPassword} readOnly />
                                    ) : (
                                        <input className="password" type="password" value={userPassword} readOnly />
                                    )}
                                    <button className="unmaskPassword" onClick={toggleCurrentPasswordVisibility}>
                                        <img className="Eye" src={currentPasswordEyeImage} alt="Unmask" />
                                    </button>
                                </div>
                                <div className="Label"> New Password </div>
                                <div className="newPassword">
                                    {showNewPassword ? (
                                        <input
                                            className="password"
                                            type="text"
                                            value={newPassword}
                                            onChange={handleNewPasswordChange}
                                        />
                                    ) : (
                                        <input
                                            className="password"
                                            type="password"
                                            value={newPassword}
                                            onChange={handleNewPasswordChange}
                                        />
                                    )}
                                    <button className="unmaskPassword" onClick={toggleNewPasswordVisibility}>
                                        <img className="Eye" src={newPasswordEyeImage} alt="Unmask" />
                                    </button>
                                </div>
                                <div className="Label"> Confirm Password </div>
                                <div className="confirmPassword">
                                    {showConfirmPassword ? (
                                        <input
                                            className="password"
                                            type="text"
                                            value={confirmPassword}
                                            onChange={handleConfirmPasswordChange}
                                        />
                                    ) : (
                                        <input
                                            className="password"
                                            type="password"
                                            value={confirmPassword}
                                            onChange={handleConfirmPasswordChange}
                                        />
                                    )}
                                    <button className="unmaskPassword" onClick={toggleConfirmPasswordVisibility}>
                                        <img className="Eye" src={confirmPasswordEyeImage} alt="Unmask" />
                                    </button>
                                </div>
                            </div>
                            <button className="saveChanges" onClick={handleSaveChanges}>Save</button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ChangePassword