/* eslint-disable no-unused-vars */

import React, {useState} from "react";
import './OwnerDocuments.css'
import x from '../Assets/x.svg'
import ownerPic from '../Assets/ownerPic.png'
import thumbnail from '../Assets/pdfThumbnail.png'
import download from '../Assets/download.png'
import { Link } from "react-router-dom";

const OwnerDocuments= () => {
    const [selectedFolder, setSelectedFolder] = useState(null);

    const folderClickHandler = (folderName) => {
        setSelectedFolder(folderName);
    }

    const janeDoeDocuments = [
        {
            name: "Leasing Agreement",
            date: "April 2023",
        },
        {
            name: "Renter's Addendum",
            date: "April 2023",
        },
        {
            name: "Background Check",
            date: "April 2023",
        },
        {
            name: "Pet Waiver",
            date: "April 2023",
        }
    ];

    const jakeMooreDocuments = [
        {
            name: "Leasing Agreement",
            date: "April 2023",
        },
        {
            name: "Renter's Addendum",
            date: "April 2023",
        },
        {
            name: "Background Check",
            date: "April 2023",
        },
    ];

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
                <div className="panelContent">
                    <div className="folders">
                        <button className="folder" onClick={() => folderClickHandler("Jane Doe")}>Jane Doe</button>
                        <button className="folder" onClick={() => folderClickHandler("Jake Moore")}>Jake Moore</button>
                    </div>
                    <div className="ownDocs">
                        {selectedFolder && selectedFolder === "Jane Doe" && (
                                <div className="document-row">
                                    {janeDoeDocuments.map((document, index) => (
                                        <div className="ownerDoc" key={index}>
                                            <img src={thumbnail} alt="" className="ownerDocThumbnail" />
                                            <div className="docDetailsContainer">
                                                <div className="docDetails">
                                                    <div className="docName">{document.name}</div>
                                                    <div className="docDate">{document.date}</div>
                                                </div>
                                                <button className="ownerDownloadButton"><img src={download} alt="" className="ownerDownloadIcon" /></button>          
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {selectedFolder && selectedFolder === "Jake Moore" && (
                                <div className="document-row">
                                    {jakeMooreDocuments.map((document, index) => (
                                        <div className="ownerDoc" key={index}>
                                            <img src={thumbnail} alt="" className="ownerDocThumbnail" />
                                            <div className="docDetailsContainer">
                                                <div className="docDetails">
                                                    <div className="docName">{document.name}</div>
                                                    <div className="docDate">{document.date}</div>
                                                </div>
                                                <button className="ownerDownloadButton"><img src={download} alt="" className="ownerDownloadIcon" /></button>          
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OwnerDocuments