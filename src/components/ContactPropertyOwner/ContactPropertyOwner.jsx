/* eslint-disable no-unused-vars */


import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import './ContactPropertyOwner.css'
import profilePic from '../Assets/exampleProfilePic.svg'
import x from '../Assets/x.svg'
import ownerPic from '../Assets/ownerPic.png'
import email from '../Assets/mail.svg'
import phone from '../Assets/phone.svg'
import julia from '../Assets/julia.png'
import devin from '../Assets/Devin.png'
import cait from '../Assets/caitlyn.png'
import stars from '../Assets/fiveStars.png'

function ContactPropertyOwner () {
    return (
        <>
            <Modal show={true} onHide={() => {}}>
                <Modal.Header>
                    <div className = "modalTitle"> Contact Property Owner </div>
                    <Link to="/landing-page" className="buttonLink">
                        <button className="modalExit">
                            <img src={x} />
                        </button>
                    </Link>
                </Modal.Header>
                <Modal.Body>
                    <div className="leftPanel">
                        <div className="userInfo">
                            <img src={profilePic} alt="" />
                            <div className="userName">Jane Doe</div>
                        </div>
                        <Link to="/overview" className="buttonLink">
                            <button className="actions">Overview</button>
                        </Link>
                        <Link to="/documents" className="buttonLink">
                            <button className="actions">Documents</button>
                        </Link>
                        <Link to="/maintenance-requests" className="buttonLink">
                            <button className="actions">Request Maintenance</button>
                        </Link>
                        <Link to="/owner" className="buttonLink">
                            <button className="contactPropOwner">Contact Property Owner</button>
                        </Link>
                        <Link to="/inspections" className="buttonLink">
                            <button className="actions">Inpections</button>
                        </Link>
                    </div>
                    <div className="rightPanel">
                        <div className="ownerContactInfo">
                            <img src={ownerPic} alt="" className="ownerProfilePic" />
                            <div className="ownName">John Smith</div>
                            <div className="ownerEmailValue">
                                <img src={email} alt="" className="emailIcon" />
                                <div className="contactValue">johnsmith@gmail.com</div>
                            </div>
                            <div className="ownerPhoneValue">
                                <img src={phone} alt="" className="phoneIcon" />
                                <div className="contactValue">+1 (123) 456-7890</div>
                            </div>
                        </div>
                        <div className="reviewLabel">Reviews</div>
                        <div className="ownerReviews">
                            <div className="feedbackCard">
                                <div className="feedbackHeader">
                                    <div className="feedbackUser">
                                        <img src={julia} alt="" className="userImage" />
                                        <div className="feedbackUserName">Julia</div>
                                    </div>
                                    <img src={stars} alt="" className="rating" />
                                </div>
                                <div className="feedbackComment">Joe is amazing! He’s so responsive and always a pleasure to talk to. </div>
                            </div>
                            <div className="feedbackCard">
                                <div className="feedbackHeader">
                                    <div className="feedbackUser">
                                        <img src={devin} alt="" className="userImage" />
                                        <div className="feedbackUserName">Devin</div>
                                    </div>
                                    <img src={stars} alt="" className="rating" />
                                </div>
                                <div className="feedbackComment">Great guy, super helpful and quick to respond.  </div>
                            </div>
                            <div className="feedbackCard">
                                <div className="feedbackHeader">
                                    <div className="feedbackUser">
                                        <img src={cait} alt="" className="userImage" />
                                        <div className="feedbackUserName">Caitlyn</div>
                                    </div>
                                    <img src={stars} alt="" className="rating" />
                                </div>
                                <div className="feedbackComment">I loved living in this apartment! Joe always went out of his way to help </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ContactPropertyOwner