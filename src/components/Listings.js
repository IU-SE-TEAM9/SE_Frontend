// import React, { useState, useRef } from 'react';
// import './Listings.css';
// import fitness from '../components/Assets/FitnessCenter.svg';
// import pool from '../components/Assets/Pool.svg';
// import laundry from '../components/Assets/Laundry.svg';
// import furnished from '../components/Assets/Furnished.svg';
// import computer from '../components/Assets/BusinessCenter.svg';
// import wifi from '../components/Assets/Wifi.svg';
// import pets from '../components/Assets/Pets.svg';
// import snack from '../components/Assets/SnackBar.svg';
// import lock from '../components/Assets/SecureEntries.svg';
// import grill from '../components/Assets/Grill.svg';
// import sliderData from './slider.json';

// const Listings = () => {
//     const [selectedFile, setSelectedFile] = useState(null);
//     const [amenities, setAmenities] = useState({
//         fitnessCenter: false,
//         pool: false,
//         inUnitLaundry: false,
//         furnished: false,
//         businessCenter: false,
//         wifiIncluded: false,
//         petFriendly: false,
//         snackBar: false,
//         secureEntries: false,
//         grill: false,
//     });
//     const fileInputRef = useRef(null);

//     const handleFileChange = (event) => {
//         setSelectedFile(event.target.files[0]);
//     };

//     const handleParagraphClick = () => {
//         fileInputRef.current.click();
//     };

    

    

//     const handleAmenityToggle = (amenity) => {
//         setAmenities({ ...amenities, [amenity]: !amenities[amenity] });
//     };

//     const getBorderStyle = (amenity) => {
//         return amenities[amenity]
//             ? { border: '2px solid #24b86f', backgroundColor: '#24b86f' }
//             : { border: '2px solid #ccc', backgroundColor: 'white' };
//     };

//   return (
//     <div>
//       <h2>List New Property</h2>
//       <hr />
//       <div className="a">
//         <div className="a1">
//           <p>Name your Listing</p>
//           <input type="text" className="ad" id="" />
//           <p> Property Address</p>
//           <input type="text" className="ad1" id="" placeholder="Address Line1" />
//           <input type="text" name="" id="" placeholder="Address Line2" />
//           <div className="addr1">
//             <input type="text" name="" id="" placeholder="Apt/Unit" />
//             <input type="text" name="" id="" placeholder="Zip Code" />
//           </div>
//           <div className="addt">
//             <h4>Rent: &nbsp; &nbsp; &nbsp;</h4>
//             <input type="text" name="" id="" placeholder="$0.00" />
//           </div>
//           <div className="bno mb-5">
//             <div className="bd">
//               <p># of Bedrooms &nbsp;</p>
//               <input type="text" name="" id="" placeholder="0" />
//             </div>
//             <div className="bd">
//               <p># of Bathrooms &nbsp;</p>
//               <input type="text" name="" id="" placeholder="0" />
//             </div>
//           </div>
//           <div className="LP">
//           <input type="submit" name="" id="" placeholder="0" value="List Property" />
//           </div>
//         </div>
//         <div className="b1 mt-2">
//           <div className="iu ">
//             <div className="image-upload-container">
//               <input
//                 type="file"
//                 onChange={handleFileChange}
//                 ref={fileInputRef}
//                 style={{ display: 'none' }}
//                 multiple
//               />
//               <p>
//                 Drag and drop files here, or <span id="undb1" onClick={handleParagraphClick}>click</span> to select a file
//                 <br /> (Only * .jpeg and * .png images will be accepted)
//               </p>
//               {selectedFile && <img src={URL.createObjectURL(selectedFile)} alt="Selected" />}
//             </div>
//             <div className="Overview1">
//               <div className="AmenityCol">
//                 <div className="AmenityLabel1">Select Amenities</div>
//                 <div className="Amenities1">
//                   {Object.keys(amenities).map((amenity, index) => (
//                     <div
//                       className="AmenityCard"
//                       key={index}
//                       onClick={() => handleAmenityToggle(amenity)}
//                       style={getBorderStyle(amenity)}
//                     >
//                       <img src={amenityIcons[amenity]} alt="" />
//                       <div className="AmenityName">{amenityNames[amenity]}</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Listings;
// const amenityIcons = {
//   fitnessCenter: fitness,
//   pool: pool,
//   inUnitLaundry: laundry,
//   furnished: furnished,
//   businessCenter: computer,
//   wifiIncluded: wifi,
//   petFriendly: pets,
//   snackBar: snack,
//   secureEntries: lock,
//   grill: grill,
// };

// const amenityNames = {
//   fitnessCenter: 'Fitness Center',
//   pool: 'Pool',
//   inUnitLaundry: 'In-Unit Laundry',
//   furnished: 'Furnished',
//   businessCenter: 'Business Center',
//   wifiIncluded: 'WiFi Included',
//   petFriendly: 'Pet Friendly',
//   snackBar: 'Snack Bar',
//   secureEntries: 'Secure Entries',
//   grill: 'Grill',
// };













import React, { useState, useRef } from 'react';
import Axios from 'axios';
import './Listings.css';
import fitness from '../components/Assets/FitnessCenter.svg';
import pool from '../components/Assets/Pool.svg';
import laundry from '../components/Assets/Laundry.svg';
import furnished from '../components/Assets/Furnished.svg';
import computer from '../components/Assets/BusinessCenter.svg';
import wifi from '../components/Assets/Wifi.svg';
import pets from '../components/Assets/Pets.svg';
import snack from '../components/Assets/SnackBar.svg';
import lock from '../components/Assets/SecureEntries.svg';
import grill from '../components/Assets/Grill.svg';

export default function Listings() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [amenities, setAmenities] = useState({
    fitnessCenter: false,
    pool: false,
    inUnitLaundry: false,
    furnished: false,
    businessCenter: false,
    wifiIncluded: false,
    petFriendly: false,
    snackBar: false,
    secureEntries: false,
    grill: false,
  });
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleParagraphClick = () => {
    fileInputRef.current.click();
  };

  const handleAmenityToggle = (amenity) => {
    setAmenities({ ...amenities, [amenity]: !amenities[amenity] });
  };

  const getBorderStyle = (amenity) => {
    return amenities[amenity]
      ? { border: '2px solid #24b86f', backgroundColor: '#24b86f' }
      : { border: '2px solid #ccc', backgroundColor: 'white' };
  };

  const [Address, setAddress] = useState('');
  const [description, setText2] = useState('');
  const [addr, setText3] = useState('');
  const [apt, setText4] = useState('');
  const [zip, setText5] = useState('');
  const [rent, setText6] = useState('');
  const [bed, setbed] = useState('');
  const [bath, setbath] = useState('');
  const [image, setImage] = useState(null);

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleText2Change = (e) => {
    setText2(e.target.value);
  };

  const handleText3Change = (e) => {
    setText3(e.target.value);
  };
  const handleText4Change = (e) => {
    setText4(e.target.value);
  };
  const handleText5Change = (e) => {
    setText5(e.target.value);
  };
  const handleText6Change = (e) => {
    setText6(e.target.value);
  };
  const handleText7Change = (e) => {
    setbed(e.target.value);
  };
  const handleText8Change = (e) => {
    setbath(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('address', Address);
    formData.append('description', description);
    formData.append('address', addr);
    formData.append('apt', apt);
    formData.append('zip', parseInt(zip));
    formData.append('rent', parseInt(rent));
    formData.append('bed', parseInt(bed));
    formData.append('bath', parseInt(bath));
    formData.append('image', image);

    console.log(Address,addr, description, apt, zip,rent,bed,bath, image)

    const apiUrl = "http://localhost:5000/api/apt/apartments";

    try {
      await Axios.post(apiUrl, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // const apiUrl = "http://localhost:5000/api/apt/apartments";
      // const requestOptions = {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'multipart/form-data'},
      //   body : formData
      // };


  // useEffect(() => {
  //   fetch(apiUrl, requestOptions)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log("called for data", data.data)
  //   })
  //   .catch((error) => {
  //       console.error('API Error:', error);
  //   });
  // // },[])

      // Reset the form after successful submission
      setAddress('');
      setText2('');
      setText3('');
      setText4('');
      setText5('');
      setText6('');
      setbed('');
      setbath('');
      setImage(null);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>List New Property</h2>
        <hr />

        <div className="a">
          <div className="a1">
            <p>Name your Listing</p>
            <input
              onChange={handleAddressChange}
              value={Address}
              type="text"
              id="name"
              placeholder="Address"
            />
            <p> Property Address</p>
            <input
              onChange={handleText2Change}
              value={description}
              type="text"
              id="Address"
              placeholder="Apartment Name"
            />
            <input
              onChange={handleText3Change}
              value={addr}
              type="text"
              id="seca"
              placeholder="Address2"
            />
            <div className="addr1">
            <input
              onChange={handleText4Change}
              value={apt}
              type="text"
              id="aptu"
              placeholder="Apt/Unit"
            />
            <input
              onChange={handleText5Change}
              value={zip}
              type="text"
              id="zipc"
              placeholder="Zip Code"
            />
             
            </div>
            <div className="addt">
              <h4>Rent: &nbsp; &nbsp; &nbsp;</h4>
              <input
              onChange={handleText6Change}
              value={rent}
              type="text"
              id="rent"
              placeholder="$0.00"
            />
            </div>
            <div className="bno mb-2">
              <div className="bd">
                <p># of Bedrooms &nbsp;</p>
                <input
              onChange={handleText7Change}
              value={bed}
              type="text"
              id="bed"
              placeholder="0"
            />
              </div>
              <div className="bd">
                <p># of Bathrooms &nbsp;</p>
                <input
              onChange={handleText8Change}
              value={bath}
              type="text"
              id="bath"
              placeholder="0"
            />
              </div>
              {/* <label>
                Image:
                <input type="file" onChange={handleImageChange} />
              </label> */}
              <br />
            </div>
            <div>
              <button type="submit">Submit</button>
              </div>
          </div>
          <div className="b1 mt-2">
            <div className="iu ">
            <label>
                Image:
                <input type="file" onChange={handleImageChange} />
              </label>
              {/* <br />
              <button type="submit">Submit</button> */}
              <div className="Overview1">
                <div className="AmenityCol">
                  <div className="AmenityLabel1">Select Amenities</div>
                  <div className="Amenities1">
                    {Object.keys(amenities).map((amenity, index) => (
                      <div
                        className="AmenityCard"
                        key={index}
                        onClick={() => handleAmenityToggle(amenity)}
                        style={getBorderStyle(amenity)}
                      >
                        <img src={amenityIcons[amenity]} alt="" />
                        <div className="AmenityName">{amenityNames[amenity]}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

const amenityIcons = {
  fitnessCenter: fitness,
  pool: pool,
  inUnitLaundry: laundry,
  furnished: furnished,
  businessCenter: computer,
  wifiIncluded: wifi,
  petFriendly: pets,
  snackBar: snack,
  secureEntries: lock,
  grill: grill,
};

const amenityNames = {
  fitnessCenter: 'Fitness Center',
  pool: 'Pool',
  inUnitLaundry: 'In-Unit Laundry',
  furnished: 'Furnished',
  businessCenter: 'Business Center',
  wifiIncluded: 'WiFi Included',
  petFriendly: 'Pet Friendly',
  snackBar: 'Snack Bar',
  secureEntries: 'Secure Entries',
  grill: 'Grill',
};

