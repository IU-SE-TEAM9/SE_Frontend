import React, { useState } from 'react';
import Axios from 'axios';

export default function DataForm() {
//   const url = 'http://localhost:3000/data/Create';
//   const [data, setData] = useState({
//     id: 1, // Initial id value
//     name: '',
//     address: '',
//   });

//   function submit(e) {
//     e.preventDefault();
  
//     console.log('Submitting data:', {
//       id: data.id,
//       name: data.name,
//       address: data.address,
//     });
  
//     Axios.post(url, {
//       id: data.id,
//       name: data.name,
//       address: data.address,
//     })
//       .then(response => {
//         console.log('Server response:', response.data);
//       })
//       .catch(error => {
//         console.error('Axios error:', error);
//       });
  
//     // Increment id for the next entry
//     setData((prevData) => ({
//       id: prevData.id + 1,
//       name: '',
//       address: '',
//     }));
//   }
  

//   function handle(e) {
//     const newdata = { ...data };
//     newdata[e.target.id] = e.target.value;
//     setData(newdata);
//     console.log(newdata);
//   }

//   return (
//     <div>
//       <form onSubmit={(e) => submit(e)}>
//         <input
//           onChange={(e) => handle(e)}
//           value={data.name}
//           type="text"
//           id="name"
//           placeholder="name"
//         />
//         <input
//           onChange={(e) => handle(e)}
//           value={data.address}
//           type="text"
//           id="address"
//           placeholder="address"
//         />
//         <button type="submit">submit</button>
//       </form>
//     </div>
//   );
// }



//2nd attempt

//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//   };

//   const handleUpload = () => {
//     const formData = new FormData();
//     formData.append('image', selectedFile);

//     fetch('http://localhost:3000/upload', {
//       method: 'POST',
//       body: formData,
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('Image uploaded successfully:', data);
//       })
//       .catch((error) => {
//         console.error('Error uploading image:', error);
//       });
//   };

//   return (
//     <div>
//       <h1>Image Upload</h1>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUpload}>Upload Image</button>
//     </div>
//   );
// };


 // 3trd attempt
 const [text, setText] = useState('');
 const [text2, setText2] = useState('');
  const [image, setImage] = useState(null);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  const handleText2Change = (e) => { // Added handler for text2
    setText2(e.target.value);
  };
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('text', text);
    formData.append('text2', text2);
    formData.append('image', image);

    try {
      await Axios.post('/update', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Reset the form after successful submission
      setText('');
      setText2('');
      setImage(null);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Text:
          <input type="text" value={text} onChange={handleTextChange} />
        </label>
        <br />
        <label>
        Text 2:
        <input type="text" value={text2} onChange={handleText2Change} />
      </label>
      <br />
        <label>
          Image:
          <input type="file" onChange={handleImageChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}






// import React, { useState, useEffect, useRef } from 'react';
// import Axios from 'axios';
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

// export default function Listings() {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [amenities, setAmenities] = useState({
//     fitnessCenter: false,
//     pool: false,
//     inUnitLaundry: false,
//     furnished: false,
//     businessCenter: false,
//     wifiIncluded: false,
//     petFriendly: false,
//     snackBar: false,
//     secureEntries: false,
//     grill: false,
//   });
//   const fileInputRef = useRef(null);

//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//   };

//   const handleParagraphClick = () => {
//     fileInputRef.current.click();
//   };

//   const handleAmenityToggle = (amenity) => {
//     setAmenities({ ...amenities, [amenity]: !amenities[amenity] });
//   };

//   const getBorderStyle = (amenity) => {
//     return amenities[amenity]
//       ? { border: '2px solid #24b86f', backgroundColor: '#24b86f' }
//       : { border: '2px solid #ccc', backgroundColor: 'white' };
//   };

//   const [text, setText] = useState('');
//   const [text2, setText2] = useState('');
//   const [text3, setText3] = useState('');
//    const [image, setImage] = useState(null);
 
//    const handleTextChange = (e) => {
//      setText(e.target.value);
//    };
//    const handleText2Change = (e) => { // Added handler for text2
//      setText2(e.target.value);
//    };
//    const handleText3Change = (e) => { // Added handler for text2
//     setText3(e.target.value);
//   };
//    const handleImageChange = (e) => {
//      setImage(e.target.files[0]);
//    };
 
//    const handleSubmit = async (e) => {
//      e.preventDefault();
 
//      const formData = new FormData();
//      formData.append('text', text);
//      formData.append('text2', text2);
//      formData.append('text3', text3);
//      formData.append('image', image);
 
//      try {
//        await Axios.post('/update', formData, {
//          headers: {
//            'Content-Type': 'multipart/form-data',
//          },
//        });
 
//        // Reset the form after successful submission
//        setText('');
//        setText2('');
//        setText3('');
//        setImage(null);
//      } catch (error) {
//        console.error('Error submitting form:', error);
//      }
//    };
 

//   return (
//     <div>
//       <form onSubmit= {handleSubmit}>
//         <h2>List New Property</h2>
//         <hr />

//         <div className="a">
//           <div className="a1">
//             <p>Name your Listing</p>
//             <input
//               onChange={handleTextChange}
//               value={text}
//               type="text"
//               id="name"
//               placeholder="name"
//             />
//             <p> Property Address</p>
//             <input
//               onChange={handleText2Change}
//               value={text2}
//               type="text"
//               id="address"
//               placeholder="address1"
//             />
//             <input
//               onChange={handleText3Change}
//               value={text3}
//               type="text"
//               id="seca"
//               placeholder="address2"
//             />
//             <div className="addr1">
//               <input
//                 // onChange={(e) => handle(e)}
//                 // value={data.aptu}
//                 type="text"
//                 id="aptu"
//                 placeholder="Apt/Unit"
//               />
//               <input
//                 // onChange={(e) => handle(e)}
//                 // value={data.zipc}
//                 type="text"
//                 id="zipc"
//                 placeholder="Zip Code"
//               />
//             </div>
//             <div className="addt">
//               <h4>Rent: &nbsp; &nbsp; &nbsp;</h4>
//               <input
//                 // onChange={(e) => handle(e)}
//                 // value={data.rent}
//                 type="text"
//                 id="rent"
//                 placeholder="$0.00"
//               />
//             </div>
//             <div className="bno mb-5">
//               <div className="bd">
//                 <p># of Bedrooms &nbsp;</p>
//                 <input
//                   // onChange={(e) => handle(e)}
//                   // value={data.bed}
//                   type="text"
//                   id="bed"
//                   placeholder="0"
//                 />
//               </div>
//               <div className="bd">
//                 <p># of Bathrooms &nbsp;</p>
//                 <input
//                   // onChange={(e) => handle(e)}
//                   // value={data.bath}
//                   type="text"
//                   id="bath"
//                   placeholder="0"
//                 />
//               </div>
//               <label>
//           Image:
//           <input type="file" onChange={handleImageChange} />
//         </label>
//         <br />
//         <button type="submit">Submit</button>
//             </div>
            
//           </div>
//           <div className="b1 mt-2">
//             <div className="iu ">
//             <input type="file" onChange={handleFileChange} />
//       <button >Upload Image</button>
//               <div className="Overview1">
//                 <div className="AmenityCol">
//                   <div className="AmenityLabel1">Select Amenities</div>
//                   <div className="Amenities1">
//                     {Object.keys(amenities).map((amenity, index) => (
//                       <div
//                         className="AmenityCard"
//                         key={index}
//                         onClick={() => handleAmenityToggle(amenity)}
//                         style={getBorderStyle(amenity)}
//                       >
//                         <img src={amenityIcons[amenity]} alt="" />
//                         <div className="AmenityName">
//                           {amenityNames[amenity]}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           </div>
//       </form>
//     </div>
//   );
// }

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
