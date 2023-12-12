/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import './OwnerProperties.css'
import verveRenter from '../Assets/exampleProfilePic.svg'
import verve1 from '../Assets//Verve/Verve1.png'
import verve2 from '../Assets//Verve/Verve2.png'
import verve3 from '../Assets//Verve/Verve3.png'
import x from '../Assets/x.svg'
import ownerPic from '../Assets/ownerPic.png'
import email from '../Assets/mail.svg'
import phone from '../Assets/phone.svg'
import julia from '../Assets/julia.png'
import devin from '../Assets/Devin.png'
import cait from '../Assets/caitlyn.png'
import stars from '../Assets/fiveStars.png'
import barn1 from '../Assets/barn1.png'
import barn2 from '../Assets/barn2.png'
import barn3 from '../Assets/barn3.png'
import barnRenter from '../Assets/barnRenter.png'
import addNewListing from '../Assets/addNewListing.png'
import Listings from "../Listings";

const OwnerProperties= () => {
    const [showListings, setShowListings] = useState(false);

    const handleAddNewButtonClick = () => {
        // Logic to show the listings.js component or perform any other action
        setShowListings(true);
    };
    return ( 
        <div >
            
            {showListings ? ( // Conditionally render the Listings component
                <Listings />
            ) : (
                <div className = "bigContainer">
            <div className="leftPanel">
                <div className="userInfo">
                    <img src={ownerPic} alt="" />
                    <div className="userName">Joe Smith</div>
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
                <div className="containerHead">
                    <div className="ownerPropertiesTitle">My Properties</div>
                    <div className="exitX"> <img src={x} alt="" /> </div>
                </div>
                <div className="ownerOverview">
                    <div className="ownerPropertiesTop">
                    <div className="ownerPropDetailsLabel">Properties</div>
                        <button className="addNewButton" onClick={handleAddNewButtonClick}>
                            <img src={addNewListing} alt="" className="addNew" />
                        </button>
                    </div>
                    <div className="ownerProperties">
                        <div className="OwnerPropDetails">
                            <div className="ownerPropDetContainer">
                                <div id="carousel1" class="carousel slide" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                        <li data-target="#carousel1" data-slide-to="0" class="active"></li>
                                        <li data-target="#carousel1" data-slide-to="1"></li>
                                        <li data-target="#carousel1" data-slide-to="2"></li>
                                    </ol>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                        <img class="d-block w-100" src={verve1} alt="First slide" />
                                        </div>
                                        <div class="carousel-item">
                                        <img class="d-block w-100" src={verve2} alt="Second slide" />
                                        </div>
                                        <div class="carousel-item">
                                        <img class="d-block w-100" src={verve3} alt="Third slide" />
                                        </div>
                                    </div>
                                    <a class="carousel-control-prev" href="#carousel1" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#carousel1" role="button" data-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                                <div className="ownerPropInfo">
                                    <div className="propAddr">
                                        <div className="OwnerPropertyName">Verve Bloomington</div>
                                        <div className="addr">1820 N Walnut St, Bloomington, IN 47404</div>
                                        <div className="propUnit">
                                            <div className="unit">Unit:</div>
                                            <div className="unitNum">418 A</div>
                                        </div>
                                    </div>
                                    <div className="propertyRenter">
                                        <div className="propRenterCard">
                                            <img src={verveRenter} alt="" className="ownerPic" />
                                            <div className="renterContact">
                                                <div className="renterContact">
                                                    <div className="renterName">Jane Doe</div>
                                                    <div className="renterEmail">
                                                        <img src={email} alt="" className="Icon" />
                                                        janedoe@gmail.com
                                                    </div>
                                                    <div className="renterPhone">
                                                        <img src={phone} alt="" className="Icon"/>
                                                        +1(123)456-7890 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ownerPropDetContainer">
                                <div id="carousel2" class="carousel slide" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                        <li data-target="#carousel2" data-slide-to="0" class="active"></li>
                                        <li data-target="#carousel2" data-slide-to="1"></li>
                                        <li data-target="#carousel2" data-slide-to="2"></li>
                                    </ol>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                        <img class="d-block w-100" src={barn1} alt="First slide" />
                                        </div>
                                        <div class="carousel-item">
                                        <img class="d-block w-100" src={barn2} alt="Second slide" />
                                        </div>
                                        <div class="carousel-item">
                                        <img class="d-block w-100" src={barn3} alt="Third slide" />
                                        </div>
                                    </div>
                                    <a class="carousel-control-prev" href="#carousel2" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#carousel2" role="button" data-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                                <div className="ownerPropInfo">
                                    <div className="propAddr">
                                        <div className="OwnerPropertyName">Red Barn House</div>
                                        <div className="addr">317 E 7th St, Bloomington, IN 47408</div>
                                    </div>
                                    <div className="propertyRenter">
                                        <div className="propRenterCard">
                                            <img src={barnRenter} alt="" className="ownerPic" />
                                            <div className="renterContact">
                                                <div className="renterContact">
                                                    <div className="renterName">Jake Moore</div>
                                                    <div className="renterEmail">
                                                        <img src={email} alt="" className="Icon" />
                                                        jakemoore@gmail.com
                                                    </div>
                                                    <div className="renterPhone">
                                                        <img src={phone} alt="" className="Icon"/>
                                                        +1(123)456-7890 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="feedbackLabel">Feedback</div>
                    <div className="ownerFeedback">
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
            </div>
            </div>
)};
        </div>
    )
}

export default OwnerProperties