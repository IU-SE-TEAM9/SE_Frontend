/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import './RenterInspections.css'
import profilePic from '../Assets/exampleProfilePic.svg'
import x from '../Assets/x.svg'
import thumbnailImage from '../Assets/inspectionThumbnail.png'

function RenterInspections () {
    return (
        <>
            <Modal show={true} onHide={() => {}}>
                <Modal.Header>
                    <div className = "modalTitle"> Inspections </div>
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
                            <button className="rentDocs">Documents</button>
                        </Link>
                        <Link to="/maintenance-requests" className="buttonLink">
                            <button className="actions">Request Maintenance</button>
                        </Link>
                        <Link to="/contact-owner" className="buttonLink">
                            <button className="actions">Contact Property Owner</button>
                        </Link>
                        <Link to="/inspections" className="buttonLink">
                            <button className="actions">Inpections</button>
                        </Link>
                    </div>
                    <div className="rightPanel">
                        <div className="content">
                            <div className="inspectionCard">
                                <div className="inspectionThumbail">
                                    <img src={thumbnailImage} alt="" className="thumnailImage" />
                                    <div className="progBar">
            
                                    </div>
                                </div>
                                <div className="inspectionTitle">Move-In Inspection</div>
                                <div className="inspectionDate">Due 8/31/2024</div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default RenterInspections