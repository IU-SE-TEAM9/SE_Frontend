import React, { useState } from "react";
import './RequestMaintenance.css'
import profilePic from '../Assets/exampleProfilePic.svg'
import x from '../../Components/Assets/x.svg'
import lowUnselected from '../../Components/Assets/lowPriorityUnselected.png'
import mediumUnselected from '../../Components/Assets/MediumPriorityUnselected.png'
import highUnselected from '../../Components/Assets/HighPriorityUnselected.png'
import lowSelected from '../../Components/Assets/lowPrioritySelected.png'
import mediumSelected from '../../Components/Assets/MediumPrioritySelected.png'
import highSelected from '../../Components/Assets/HighPrioritySelected.png'

const RequestMaintenance= () => {
    const [lowPrioritySelected, setLowPrioritySelected] = useState(false);
    const [mediumPrioritySelected, setMediumPrioritySelected] = useState(false);
    const [highPrioritySelected, setHighPrioritySelected] = useState(false);

    const toggleLowPriority = () => {
        setLowPrioritySelected(!lowPrioritySelected);
        setMediumPrioritySelected(false);
        setHighPrioritySelected(false);
    };

    const toggleMediumPriority = () => {
        setLowPrioritySelected(false);
        setMediumPrioritySelected(!mediumPrioritySelected);
        setHighPrioritySelected(false);
    };

    const toggleHighPriority = () => {
        setLowPrioritySelected(false);
        setMediumPrioritySelected(false);
        setHighPrioritySelected(!highPrioritySelected);
    };

    const [pteYesSelected, setPteYesSelected] = useState(false);
    const [pteNoSelected, setPteNoSelected] = useState(false);

    const handlePteSelect = (button) => {
        if (button === "Yes") {
            setPteYesSelected(true);
            setPteNoSelected(false);
        } else {
            setPteYesSelected(false);
            setPteNoSelected(true);
        }
    };

    const [animalYesSelected, setAnimalYesSelected] = useState(false);
    const [animalNoSelected, setAnimalNoSelected] = useState(false);

    const handleAnimalSelect = (button) => {
        if (button === "Yes") {
            setAnimalYesSelected(true);
            setAnimalNoSelected(false);
        } else {
            setAnimalYesSelected(false);
            setAnimalNoSelected(true);
        }
    };

    return ( 
        <div className = "bigContainer">
            <div className="leftPanel">
                <div className="userInfo">
                    <img src={profilePic} alt="" />
                    <div className="userName">Jane Doe</div>
                </div>
                <button className="actions">Overview</button>
                <button className="actions">Documents</button>
                <button className="request">Request Maintenance</button>
                <button className="actions">Contact Property Owner</button>
                <button className="actions">Inspections</button>
            </div>
            <div className="rightPanel">
                <div className="containerHead">
                    <div className="manageRentalsTitle">Request Maintenance</div>
                    <div className="exitX"> <img src={x} alt="" /> </div>
                </div>
                <div className="form">
                    <div className="section">
                        <div className="roomPriority">
                            <div class="form-group">
                                <label for="exampleFormControlSelect1">Room/Area</label>
                                <select class="roomSelector" id="exampleFormControlSelect1">
                                <option>Kitchen</option>
                                <option>Living Room</option>
                                <option>Bedroom</option>
                                <option>Bathroom</option>
                                <option>Balcony</option>
                                <option>Other</option>
                                </select>
                            </div>
                            <div className="priority">
                                <div className="requestLabel">Priority:</div>
                                    <button className="selectPriority" onClick={toggleLowPriority}>
                                        <img src={lowPrioritySelected ? lowSelected : lowUnselected} alt="low priority Icon" />
                                    </button>
                                    <button className="selectPriority" onClick={toggleMediumPriority}>
                                        <img src={mediumPrioritySelected ? mediumSelected : mediumUnselected} alt="medium priority Icon" />
                                    </button>
                                    <button className="selectPriority" onClick={toggleHighPriority}>
                                        <img src={highPrioritySelected ? highSelected : highUnselected} alt="high priority Icon" />
                                    </button>
                            </div>
                        </div>
                        <div className="requestInfo">
                            <div className="requestLabel">Description</div>
                            <textarea class="descriptionInput" id="exampleFormControlTextarea1" rows="3"></textarea>
                            <div className="requestLabel">Do you agree to let the property owner and/or maintenance person enter your unit to work on this maintenance issue?</div>
                            <div className="yesNo">
                                <button
                                    className={`Yes ${pteYesSelected ? 'selected' : ''}`}
                                    onClick={() => handlePteSelect("Yes")}>
                                    Yes
                                </button>                                   
                                <button
                                    className={`No ${pteNoSelected ? 'selected' : ''}`}
                                    onClick={() => handlePteSelect("No")}>
                                    No
                                </button>
                            </div>
                            <div className="requestLabel">Do you have an animal?</div>
                            <div className="yesNo">
                                <button
                                    className={`Yes ${animalYesSelected ? 'selected' : ''}`}                                        onClick={() => handleAnimalSelect("Yes")}>
                                    Yes
                                </button>
                                <button
                                    className={`No ${animalNoSelected ? 'selected' : ''}`}
                                    onClick={() => handleAnimalSelect("No")}>
                                    No
                                </button>
                            </div>
                        </div>
                        <button className="submitRequest">Submit Request</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RequestMaintenance