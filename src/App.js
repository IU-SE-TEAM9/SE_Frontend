import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/index';
import PropertyDetails from './components/PropertyDetails/PropertyDetails'; // Import the PropertyDetails component
// import Login from './components/Login/Login'; // Import the Login component
// import Listings from './components/Listings'
import RenterOverview from './components/RenterOverview/RenterOverview';
import OwnerProperties from './components/ownerdetails/OwnerProperties';
// import Apt1 from './components/apt1';
// import DataForm from './DataForm';
// import { MessageProvider } from './components/MessageContext'
// import Owner from './components/Owner';
// import Client from './components/Client';
// import AuthForm from './components/AuthForm';
// import ChatApp from './components/ChatApp';
// import CardSlider from "./components/cs";
// import Buttons from "./components/butt";
// import Slider from "./components/slider";
// import axios from "axios";
import MyAccount from "./components/MyAccount/MyAccount"
import ChangePassword from "./components/ChangePassword/ChangePassword"
import RenterDocuments from "./components/RenterDocuments/RenterDocuments"
import RequestMaintenance from "./components/RequestMaintenance/RequestMaintenance"
import ContactPropertyOwner from "./components/ContactPropertyOwner/ContactPropertyOwner"
import RenterInspections from "./components/RenterInspections/RenterInspections"
import ChatsPage from './components/ChatApp/chat';
import OwnerDocuments from './components/OwnerDocuments/OwnerDocuments';
import OwnerInspections from './components/OwnerInspections/OwnerInspections';
import OwnerMaintenanceRequests from './components/OwnerMaintenanceRequests/OwnerMaintenanceRequests';

function App() {
  const [jsonData, setJsonData] = useState([]);
  const [filters, setFilters] = useState({
    bed: null,
    bath: null,
    minRent: null,
    maxRent: null,
    description: "",
  });

  const apiUrl = "http://localhost:5000/api/apt/apartments";
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json'},
};


  useEffect(() => {
    fetch(apiUrl, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log("called for data", data.data)
      setJsonData(data.data);
    })
    .catch((error) => {
        console.error('API Error:', error);
    });
  },[])
  const handleButtonClick = (key, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: prevFilters[key] === value ? null : value,
    }));
  };

  const handleSliderChange = (values) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      minRent: values[0],
      maxRent: values[1],
    }));
  };
  const handleTextInput = (description) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      description: description,
    }));
  };
    const [showLogin, setShowLogin] = useState(false);

    const toggleLogin = () => {
        setShowLogin(!showLogin);
    };
    const [authenticatedUser, setAuthenticatedUser] = useState(null);

    const handleLogin = (username) => {
      // You might want to perform actual authentication here
      // For simplicity, this example sets the authenticated user directly
      setAuthenticatedUser(username);
    };
    return (
      <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/home" element={
            <>
              <Nav />
              <OwnerProperties />
              {/* Other components if needed */}
            </>
          } />

          <Route path="/login" element={
            <>
              <Header />
              <Hero 
                onSliderChange={handleSliderChange}
                sliderValues={[filters.minRent, filters.maxRent]}
                onButtonClick={handleButtonClick}
                jsonData={jsonData}
                filters={filters}
              />
              {/* Other components if needed */}
            </>
          } />

          <Route path="/user" element={
            <>
              <Header />
              <Hero />
            </>
          } />

          <Route path="/propertydetails/:id" element={
            <>
            <Header />
          <PropertyDetails />
          </>} />

          <Route path="/chats" element={
            <>
              <Header />
              <ChatsPage />
            </>
          }
          />

          <Route path="/MyAccount" element={<MyAccount />} />
          <Route path="/RenterOverview" element={<OwnerProperties /> } />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/overview" element={<RenterOverview />} />
          <Route path="/documents" element={<RenterDocuments />} />
          <Route path="/maintenance-requests" element={<RequestMaintenance />} />
          <Route path="/contact-owner" element={<ContactPropertyOwner />} />
          <Route path="/inspections" element={<RenterInspections />} />
          <Route path="/owner-documents" component={<OwnerDocuments/>} />
            {/* <Route path="/owner-requests" component={<OwnerMaintenanceRequests/>} />
            <Route path="/owner-inspections" component={<OwnerInspections/>} /> */}
            {/* <Route path="/ccontact-renter" component={ccontact} /> */}

          <Route path="/" element={
            <>
              <Nav handleTextInput={handleTextInput} />
              <Hero 
                onSliderChange={handleSliderChange}
                sliderValues={[filters.minRent, filters.maxRent]}
                onButtonClick={handleButtonClick}
                jsonData={jsonData}
                filters={filters}
              />
            </>
          } />
        </Routes>
      </div>
    </BrowserRouter>
    );
}

export default App;




// // src/App.js
// import React from 'react';
// import DataForm from './DataForm';
// import Listings from './components/Listings'

// function App() {
//   return (
//     <div className="App">
//       <h1>React Form to Submit Data</h1>
//       <DataForm />
//       <Listings />
//     </div>
//   );
// }

// export default App;
