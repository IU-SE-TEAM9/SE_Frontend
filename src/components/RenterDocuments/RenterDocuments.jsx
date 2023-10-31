import React from "react";
import './RenterDocuments.css'
import profilePic from '../Assets/exampleProfilePic.svg'
import x from '../../Components/Assets/x.svg'
import thumbnail from '../../Components/Assets/pdfThumbnail.png'
import download from '../../Components/Assets/download.png'

const RenterDocuments= () => {
    return ( 
        <div className = "bigContainer">
            <div className="leftPanel">
                <div className="userInfo">
                    <img src={profilePic} alt="" />
                    <div className="userName">Jane Doe</div>
                </div>
                <button className="actions">Overview</button>
                <button className="Docs">Documents</button>
                <button className="actions">Request Maintenance</button>
                <button className="actions">Contact Property Owner</button>
                <button className="actions">Inspections</button>
            </div>
            <div className="rightPanel">
                <div className="containerHead">
                    <div className="manageRentalsTitle">Documents</div>
                    <div className="exitX"> <img src={x} alt="" /> </div>
                </div>
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
        </div>
    )
}

export default RenterDocuments