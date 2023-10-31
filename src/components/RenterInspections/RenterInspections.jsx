import React from "react";
import './RenterInspections.css'
import profilePic from '../Assets/exampleProfilePic.svg'
import x from '../../Components/Assets/x.svg'
import thumbnailImage from '../../Components/Assets/inspectionThumbnail.png'
import ProgressBar from 'react-bootstrap/ProgressBar';
const RenterInspections= () => {
    return ( 
        <div className = "bigContainer">
            <div className="leftPanel">
                <div className="userInfo">
                    <img src={profilePic} alt="" />
                    <div className="userName">Jane Doe</div>
                </div>
                <button className="actions">Overview</button>
                <button className="actions">Documents</button>
                <button className="actions">Request Maintenance</button>
                <button className="actions">Contact Property Owner</button>
                <button className="inspectionButton">Inspections</button>
            </div>
            <div className="rightPanel">
                <div className="containerHead">
                    <div className="manageRentalsTitle">Inspections</div>
                    <div className="exitX"> <img src={x} alt="" /> </div>
                </div>
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
        </div>
    )
}

export default RenterInspections