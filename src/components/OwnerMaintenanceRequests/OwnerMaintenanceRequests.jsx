/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import './OwnerMaintenanceRequests.css'
import profilePic from '../Assets/exampleProfilePic.svg'
import x from '../Assets/x.svg'
import ownerPic from '../Assets/ownerPic.png'
import barnRenter from '../Assets/barnRenter.png'
import high from '../Assets/HighPrioritySelected.png'
import medium from '../Assets/MediumPrioritySelected.png'
import low from '../Assets/lowPrioritySelected.png'
import markComplete from '../Assets/markComplete.png'
import completed from '../Assets/completed.png'
import { Link } from "react-router-dom";

const OwnerMaintenanceRequests= () => {
    const [isComplete, setIsComplete] = useState(false)
    const toggleStatus = () => {setIsComplete(!isComplete)}
    return ( 
        <div className = "requestsContainer">
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
            <div className="rightPanel">
                <div className="containerHead">
                    <div className="manageRentalsTitle">Maintenance Requests</div>
                    <div className="exitX"> <img src={x} alt="" /> </div>
                </div>
                <div className="requests">
                    <div className="priorityLevel">
                        <div className="priorityLabel">High Priority</div>
                        <div className="requestCards">
                            <div className="requestCard">
                                <div className="userRequest">
                                    <img src={barnRenter} alt="" className="userImg" />
                                    <div className="userName_PropTitle">
                                        <div className="renterName">Jake Moore</div>
                                        <div className="propRequestTitle">Red Barn House</div>
                                    </div>
                                    <button className="reqStatus" onClick = {toggleStatus}> 
                                        <img src={isComplete ? completed : markComplete} alt="status icon" />
                                    </button>
                                </div>
                                <div className="requestType">A/C</div>
                                    <div className="requestDescriptionLabel">Description:</div>
                                    <div className="descriptionAndPriority">
                                        <div className="requestDescription">A/C not working</div>
                                        <img src={high} alt="" className="priorityIcon" />
                                    </div>
                            </div>
                            <div className="requestCard">
                                <div className="userRequest">
                                    <img src={profilePic} alt="" className="userImg" />
                                    <div className="userName_PropTitle">
                                        <div className="renterName">Jane Doe</div>
                                        <div className="propRequestTitle">Verve</div>
                                    </div>
                                    <button className="reqStatus" onClick = {toggleStatus}> 
                                        <img src={isComplete ? completed : markComplete} alt="status icon" />
                                    </button>
                                </div>
                                <div className="requestType">Laundry</div>
                                    <div className="requestDescriptionLabel">Description:</div>
                                    <div className="descriptionAndPriority">
                                        <div className="requestDescription">Dryer not working</div>
                                        <img src={high} alt="" className="priorityIcon" />
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="priorityLevel">
                        <div className="priorityLabel">Medium Priority</div>
                        <div className="requestCards">
                            <div className="requestCard">
                                <div className="userRequest">
                                    <img src={profilePic} alt="" className="userImg" />
                                    <div className="userName_PropTitle">
                                        <div className="renterName">Jane Doe</div>
                                        <div className="propRequestTitle">Verve</div>
                                    </div>
                                    <button className="reqStatus" onClick = {toggleStatus}> 
                                        <img src={isComplete ? completed : markComplete} alt="status icon" />
                                    </button>
                                </div>
                                <div className="requestType">Kitchen</div>
                                    <div className="requestDescriptionLabel">Description:</div>
                                    <div className="descriptionAndPriority">
                                        <div className="requestDescription">Garbage Disposal is making a weird noise.</div>
                                        <img src={medium} alt="" className="priorityIcon" />
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="lowPriorityLevel">
                        <div className="priorityLabel">Low Priority</div>
                        <div className="requestCards">
                            <div className="requestCard">
                                <div className="userRequest">
                                    <img src={barnRenter} alt="" className="userImg" />
                                    <div className="userName_PropTitle">
                                        <div className="renterName">Jake Moore</div>
                                        <div className="propRequestTitle">Red Barn House</div>
                                    </div>
                                    <button className="reqStatus" onClick = {toggleStatus}> 
                                        <img src={isComplete ? completed : markComplete} alt="status icon" />
                                    </button>
                                </div>
                                <div className="requestType">Bedroom</div>
                                    <div className="requestDescriptionLabel">Description:</div>
                                    <div className="descriptionAndPriority">
                                        <div className="requestDescription">Closet door hinge squeeks.</div>
                                        <img src={low} alt="" className="priorityIcon" />
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OwnerMaintenanceRequests