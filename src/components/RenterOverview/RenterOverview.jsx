import React from "react";
import './RenterOverview.css'
import profilePic from '../Assets/exampleProfilePic.svg'
import verve1 from '../../Components/Assets//Verve/Verve1.png'
import verve2 from '../../Components/Assets//Verve/Verve2.png'
import verve3 from '../../Components/Assets//Verve/Verve3.png'
import x from '../../Components/Assets/x.svg'
import ownerPic from '../../Components/Assets/ownerPic.png'
import email from '../../Components/Assets/mail.svg'
import phone from '../../Components/Assets/phone.svg'

const RenterOverview= () => {
    return ( 
        <div className = "bigContainer">
            <div className="leftPanel">
                <div className="userInfo">
                    <img src={profilePic} alt="" />
                    <div className="userName">Jane Doe</div>
                </div>
                <button className="Overview">Overview</button>
                <button className="actions">Documents</button>
                <button className="actions">Request Maintenance</button>
                <button className="actions">Contact Property Owner</button>
                <button className="actions">Inspections</button>
            </div>
            <div className="rightPanel">
                <div className="containerHead">
                    <div className="manageRentalsTitle">Overview</div>
                    <div className="exitX"> <img src={x} alt="" /> </div>
                </div>
                <div className="renterOverview">
                    <div className="Balance">
                        <div className="totalBalance"> 
                            <div className="BalanceAmt">$858.00</div>
                            <div className="BalanceLabel"><em> Balance </em></div>
                        </div>
                        <div className="charges">
                            <div className="charge">
                                <div className="nameDate">
                                    <div className="name">Charge - Rent</div>
                                    <div className="date">Oct. 1</div>
                                </div>
                                <div className="Amount">
                                    $715.00
                                </div>
                            </div>
                            <div className="charge">
                                <div className="nameDate">
                                    <div className="name">Charge - Garage Parking</div>
                                    <div className="date">Oct. 1</div>
                                </div>
                                <div className="Amount">
                                    $75.00
                                </div>
                            </div>
                            <div className="charge">
                                <div className="nameDate">
                                    <div className="name">Charge - Utilities</div>
                                    <div className="date">Oct. 1</div>
                                </div>
                                <div className="Amount">
                                    $20.00
                                </div>
                            </div>
                            <div className="charge">
                                <div className="nameDate">
                                    <div className="name">Charge - Electric</div>
                                    <div className="date">Oct. 1</div>
                                </div>
                                <div className="Amount">
                                    $35.00
                                </div>
                            </div>
                            <div className="charge">
                                <div className="nameDate">
                                    <div className="name">Charge - Renter's Insurance</div>
                                    <div className="date">Oct. 1</div>
                                </div>
                                <div className="Amount">
                                    $13.00
                                </div>
                            </div>
                        </div>
                        <button className="payBalance">Pay Balance</button>
                    </div>
                    <div className="propDetails">
                        <div className="propDetContainer">
                            <div className="propDetLabel">Property Details</div>
                            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                <ol class="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
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
                                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                            <div className="propInfo">
                                <div className="propAddr">
                                    <div className="propertyName">Verve Bloomington</div>
                                    <div className="addr">1820 N Walnut St, Bloomington, IN 47404</div>
                                    <div className="propUnit">
                                        <div className="unit">Unit:</div>
                                        <div className="unitNum">418 A</div>
                                    </div>
                                </div>
                                <div className="propertyOwner">
                                    <div className="propOwnerCard">
                                        <img src={ownerPic} alt="" className="ownerPic" />
                                        <div className="ownContact">
                                            <div className="ownContact">
                                                <div className="ownName">Joe Smith</div>
                                                <div className="ownEmail">
                                                    <img src={email} alt="" className="Icon" />
                                                    joesmsith@gmail.com
                                                </div>
                                                <div className="ownPhone">
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
            </div>
        </div>
    )
}

export default RenterOverview