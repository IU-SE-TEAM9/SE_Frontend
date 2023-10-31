import React from "react";
import './PropertyDetails.css'
import { useState } from "react";
import { useParams } from 'react-router-dom';
// import Carousel from 'react-bootstrap/Carousel';
import jsonData from '../carousel'
import notBookmarked from '../Assets/magnifyingGlass.svg'
import Bookmarked from '../Assets/Bookmarked.svg'
import fitness from '../Assets/FitnessCenter.svg'
import pool from '../Assets/Pool.svg'
import laundry from '../Assets/Laundry.svg'
import furnished from '../Assets/Furnished.svg'
import computer from '../Assets/BusinessCenter.svg'
import wifi from '../Assets/Wifi.svg'
import pets from '../Assets/Pets.svg'
import snack from '../Assets/SnackBar.svg'
import lock from '../Assets/SecureEntries.svg'
import grill from '../Assets/Grill.svg'
import email from '../Assets/mail.svg'
import phone from '../Assets/phone.svg'
import joe from '../Assets/joe.svg'
import message from '../Assets/message.svg'
// import verve1 from '../Assets//Verve/Verve1.png'
import studio from '../Assets/Verve/studio.png'

const PropertyDetails= () => {
    const { id } = useParams(); // Retrieve the property ID from the URL

  // Find the property details from the JSON data based on the ID
    const property = jsonData.find((item) => item.id === parseInt(id));
    const [isBookmarked, setIsBookmarked] = useState(false)
    const toggleBookmark = () => {setIsBookmarked(!isBookmarked)}
    const [selectedFloorplan, setSelectedFloorplan] = useState(null);
    const handleFloorplanSelection = (floorplan) => { setSelectedFloorplan(floorplan)}
    const floorplanDetails = {
        Studio: {
          image: studio,
          price: '$1,499',
          size: '343 sqft',
          bed: 'None',
          bath: '1'
        },
        '2 Beds': {
          image: '2bed-image.jpg',
          price: '$1,299',
          size: '779 sqft',
          bed: '2',
          bath: '2'
        },
        '3+ Beds': {
          image: '3plusbed-image.jpg',
          price: '$2,400',
          size: '1200 sq. ft',
          bed: 'None',
          bath: '1'
        }
      }
  
    return (
        <div>
            <div className="Overview-Top">
                <div className="propDetails">
                    <div className="propName"> Verve Bloomington </div>
                    <div className="propAddress"> 1820 N Walnut St, Bloomington, IN 47404 </div>
                </div>
                <button className="leaseApplication"> Apply to Lease </button>
                <button className="Bookmark" onClick = {toggleBookmark}>
                    <img src={isBookmarked ? Bookmarked : notBookmarked} alt="Bookmark Icon" />
                </button>
            </div>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={property.img1} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={property.img2} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={property.img3} alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <div className="Overview-Middle">
                <div className="AmenityCol">
                <div className="AmenityLabel">Amenities</div>
                <div className="Amenities">
                    <div className="AmenityCard">
                        <img src={fitness} alt="" />
                        <div className="AmenityName">Fitness Center</div>
                    </div>
                    <div className="AmenityCard">
                        <img src={pool} alt="" />
                        <div className="AmenityName">Pool</div>
                    </div>
                    <div className="AmenityCard">
                        <img src={laundry} alt="" />
                        <div className="AmenityName">In-Unit Laundry</div>
                    </div>
                    <div className="AmenityCard">
                        <img src={furnished} alt="" />
                        <div className="AmenityName">Furnished</div>
                    </div>
                    <div className="AmenityCard">
                        <img src={computer} alt="" />
                        <div className="AmenityName">Business Center</div>
                    </div>
                    <div className="AmenityCard">
                        <img src={wifi} alt="" />
                        <div className="AmenityName">WiFi Included</div>
                    </div>
                    <div className="AmenityCard">
                        <img src={pets} alt="" />
                        <div className="AmenityName">Pet Friendly</div>
                    </div>
                    <div className="AmenityCard">
                        <img src={snack} alt="" />
                        <div className="AmenityName">Snack Bar</div>
                    </div>
                    <div className="AmenityCard">
                        <img src={lock} alt="" />
                        <div className="AmenityName">Secure Entries</div>
                    </div>
                    <div className="AmenityCard">
                        <img src={grill} alt="" />
                        <div className="AmenityName">Grill</div>
                    </div>
                </div>
                </div>
                <div className="ownerCol">
                <div className="OwnerLabel">Property Owner</div>
                <div className="OwnerDetails">
                    <img className="ownerPic" src={joe} alt="" />
                    <div className="ownerContact">
                        <div className="ownerName">Joe Smith</div>
                        <div className="ownerEmail">
                            <img src={email} alt="" />
                            joesmsith@gmail.com
                        </div>
                        <div className="ownerPhone">
                            <img src={phone} alt="" />
                            +1(123)456-7890
                        </div>
                        <button className="messageOwner">
                            <img src={message} alt="" />
                            <div className="messageName">Message Joe</div>
                        </button>
                    </div>
                </div>
                </div>
            </div>
            <div>
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                {Object.keys(floorplanDetails).map((floorplanOption) => (
                <label
                    key={floorplanOption}
                    className={`btn btn-secondary ${
                    selectedFloorplan === floorplanOption ? 'active' : ''
                    }`}
                    onClick={() => handleFloorplanSelection(floorplanOption)}
                >
                    <input type="radio" name="options" id="option1" autoComplete="off" checked />
                    {floorplanOption}
                </label>
                ))}
            </div>
            <div className="floorplanDetails">
                {selectedFloorplan && (
                    <div>
                    <h2>{selectedFloorplan} Floorplan</h2>
                    <img src={floorplanDetails[selectedFloorplan].image} alt={`${selectedFloorplan} floorplan`} />
                    <p>Price: {floorplanDetails[selectedFloorplan].price}</p>
                    <p>Size: {floorplanDetails[selectedFloorplan].size}</p>
                    </div>
                )}
            </div>
            </div>
        </div>
    )
}

export default PropertyDetails