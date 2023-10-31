import React,{useState,useRef} from 'react'
import "./Listings.css"
// import notBookmarked from '../components/Assets/magnifyingGlass.svg'
// import Bookmarked from '../components/Assets/Bookmarked.svg'
import fitness from '../components/Assets/FitnessCenter.svg'
import pool from '../components/Assets/Pool.svg'
import laundry from '../components/Assets/Laundry.svg'
import furnished from '../components/Assets/Furnished.svg'
import computer from '../components/Assets/BusinessCenter.svg'
import wifi from '../components/Assets/Wifi.svg'
import pets from '../components/Assets/Pets.svg'
import snack from '../components/Assets/SnackBar.svg'
import lock from '../components/Assets/SecureEntries.svg'
import grill from '../components/Assets/Grill.svg'
// import email from '../components/Assets/mail.svg'
// import phone from '../components/Assets/phone.svg'
// import joe from '../components/Assets/joe.svg'
// import message from '../components/Assets/message.svg'
export default function Listings() {
    const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleParagraphClick = () => {
    fileInputRef.current.click();
  };

  const handleUpload = () => {
    // You can perform upload logic here, like sending the file to a server
    // For this example, we'll just log the selected file to the console
    console.log(selectedFile);
  };
  return (
    <div>
      <h1> List New Property</h1>
      <hr />
      <div className="a">
        <div className="a1">
      <p>Name your Listing</p>
      <input type="text" name="" id="" />
      <label htmlFor=""> Property Address</label>
      <input type="text" name="" id="" placeholder='Address Line1' />
      <input type="text" name="" id="" placeholder='Address Line2' />
      <div className="addr1">
      <input type="text" name="" id="" placeholder='Apt/Unit' />
      <input type="text" name="" id="" placeholder='Zip Code' />
      </div>
      <div className="addt">
        <h4>Rent:</h4>
        <input type="text" name="" id="" placeholder='$0.00' />
      </div>
      </div>
      <div className='b1'>
        <div className="iu">
        <div className="image-upload-container">
      <input
        type="file"
        onChange={handleFileChange}
        ref={fileInputRef}
        style={{ display: 'none' }}
        multiple
      />
      <p>Drag and drop files here, or  <span  id="undb1" onClick={handleParagraphClick}>click </span> to select a file <br /> (Only * .jpeg and * .png images will be accepted)</p>
      {selectedFile && <img src={URL.createObjectURL(selectedFile)} alt="Selected" />}
      <button onClick={handleUpload} disabled={!selectedFile}>
        Upload Images
      </button>
    </div>
    <div className="Overview1">
                <div className="AmenityCol">
                <div className="AmenityLabel1"> Select Amenities</div>
                <div className="Amenities1">
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
                
            </div>
        </div>
      </div>
    </div>

    </div>
  )
}
