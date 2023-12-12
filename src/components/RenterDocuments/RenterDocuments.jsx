/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import './RenterDocuments.css'
import profilePic from '../Assets/exampleProfilePic.svg'
import x from '../Assets/x.svg'
import thumbnail from '../Assets/pdfThumbnail.png'
import download from '../Assets/download.png'

function RenterDocuments () {
    return (
        <>
            <Modal show={true} onHide={() => {}}>
                <Modal.Header>
                    <div className = "modalTitle"> Documents </div>
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
                        <div className="docs">
                            <div className="doc">
                                <img src={thumbnail} alt="" className="thumbnail" />
                                <div className="docDetailsContainer">
                                    <div className="docDetails">
                                        <div className="docName">Leasing Agreement</div>
                                        <div className="docDate">April 2023</div>
                                    </div>
                                    <button className="downloadButton"><img src={download} alt="" className="downloadIcon" /></button>          
                                </div>
                            </div>
                            <div className="doc">
                                <img src={thumbnail} alt="" className="thumbnail" />
                                <div className="docDetailsContainer">
                                    <div className="docDetails">
                                        <div className="docName">Renter's Addendum</div>
                                        <div className="docDate">April 2023</div>
                                    </div>
                                    <button className="downloadButton"><img src={download} alt="" className="downloadIcon" /></button>          
                                </div>
                            </div>
                            <div className="doc">
                                <img src={thumbnail} alt="" className="thumbnail" />
                                <div className="docDetailsContainer">
                                    <div className="docDetails">
                                        <div className="docName">Background Check</div>
                                        <div className="docDate">April 2023</div>
                                    </div>
                                    <button className="downloadButton"><img src={download} alt="" className="downloadIcon" /></button>          
                                </div>
                            </div>
                            <div className="doc">
                                <img src={thumbnail} alt="" className="thumbnail" />
                                <div className="docDetailsContainer">
                                    <div className="docDetails">
                                        <div className="docName">Pet Waiver</div>
                                        <div className="docDate">April 2023</div>
                                    </div>
                                    <button className="downloadButton"><img src={download} alt="" className="downloadIcon" /></button>          
                                </div>
                            </div>
                        </div>    
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default RenterDocuments