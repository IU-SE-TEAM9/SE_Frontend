/* eslint-disable no-unused-vars */

import React from "react";
import './ChooseRole.css'
import { useState } from "react";

import x from '/Users/ashlynkennedy/Desktop/SE_Team9/SE_TEAM9/frontend/src/Components/Assets/x.svg'
import renter from '/Users/ashlynkennedy/Desktop/SE_Team9/SE_TEAM9/frontend/src/Components/Assets/Renter.svg'
import owner from '/Users/ashlynkennedy/Desktop/SE_Team9/SE_TEAM9/frontend/src/Components/Assets/PropertyOwner.svg'
import renterSelected from '/Users/ashlynkennedy/Desktop/SE_Team9/SE_TEAM9/frontend/src/Components/Assets/renterSelected.svg'
import ownerSelected from '/Users/ashlynkennedy/Desktop/SE_Team9/SE_TEAM9/frontend/src/Components/Assets/ownerSelected.svg'


const ChooseRole= () => {
    const [selectedRole, setSelectedRole] = useState(null);
    const [textColor, setTextColor] = useState('#24B86F');
    return (
        <div className = "container">
            <div className = "header">
                <div className="exit">
                    <img src={x} />
                </div>
                <div className = "text"> Sign Up </div>
                <div className="underline"></div>
            </div>
            <div className="roles">
                <button className={`role ${selectedRole === 'renter' ? 'selected' : ''}`}
                onClick={() => {
                    setSelectedRole('renter')
                    setTextColor('#24B86F')
                }}
                >
                {selectedRole === 'renter' ? (
                    <>
                        <img src={selectedRole === 'renter' ? renterSelected : renter} alt="" />
                        <div className="roleText" style = {{color: textColor }}>
                            I'm a Renter
                        </div>
                    </>
                ) : (
                    <>
                        <img src={renter} alt="" />
                        <div className="roleText">I'm a Renter</div>
                    </>
                 )}
                </button>
                <button className={`role ${selectedRole === 'owner' ? 'selected' : ''}`}
                onClick={() =>{
                    setSelectedRole('owner')
                    setTextColor('#24B86F')
                }}
                >
                {selectedRole === 'owner' ? (
                    <>
                        <img src={selectedRole === 'owner' ? ownerSelected : owner} alt="" />
                        <div className="roleText" style = {{color: textColor }}>
                            I'm a Property Owner
                        </div>
                    </>
                ) : (
                    <>
                        <img src={owner} alt="" />
                        <div className="roleText">I'm a Property Owner</div>
                    </>
                )}
                </button>
            </div>
            <button className="submit"> NEXT </button>
        </div>
    )
}

export default ChooseRole