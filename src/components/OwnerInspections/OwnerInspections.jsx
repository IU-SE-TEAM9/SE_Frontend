/* eslint-disable no-unused-vars */

import React, {useState} from "react";
import './OwnerInspections.css'
import x from '../Assets/x.svg'
import ownerPic from '../Assets/ownerPic.png'
import thumbnailImage from '../Assets/inspectionThumbnail.png'
import download from '../Assets/download.png'
import { Link } from "react-router-dom";

const OwnerInspections = () => {
    return ( 
        <div className = "ownerDocsContainer">
            <div className="leftPanel">
                <div className="userInfo">
                    <img src={ownerPic} alt="" />
                    <div className="userName">Joe Smith</div>
                </div>
                <Link to="/owner-properties"><button className="myProperties">My Properties</button> </Link>
                <Link to="/owner-documents"><button className="actions">Documents</button> </Link>
                <Link to="/owner-requests"><button className="actions">Maintenance Requests</button> </Link>
                <Link to="/ccontact-renter"><button className="actions">Contact Renters</button> </Link>
                <Link to="/owner-inspections"><button className="actions">Inspections</button> </Link>
            </div>
            <div className="ownerDocsrightPanel">
                <div className="containerHead">
                    <div className="ownerPropertiesTitle">Documents</div>
                    <div className="exitX"> <img src={x} alt="" /> </div>
                </div>
                <div className="content">
                    <div className="inspectionCard">
                        <div className="inspectionThumbail">
                            <img src={thumbnailImage} alt="" className="thumnailImage" />
                        </div>
                        <div className="inspectionTitle">Jane Doe Move-In Inspection</div>
                        <div className="inspectionDate">Submitted 8/16/2024</div>
                    </div>
                    <div className="inspectionCard">
                        <div className="inspectionThumbail">
                            <img src={thumbnailImage} alt="" className="thumnailImage" />
                        </div>
                        <div className="inspectionTitle">Jake Moore Move-In Inspection</div>
                        <div className="inspectionDate">Submitted 8/23/2024</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OwnerInspections