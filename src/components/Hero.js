// Hero.js
import React, { useState } from 'react';
import './Hero.css';
import Aptf from './Aptf';
import Aptinfo from './aptinfo';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function Hero() {
  const [isFurnished, setIsFurnished] = useState(false);
  const [isPetsAllowed, setIsPetsAllowed] = useState(false);
  const [isWasherDryer, setIsWasherDryer] = useState(false);
  const [isDishwasher, setIsDishwasher] = useState(false);
  const [isBalcony, setIsBalcony] = useState(false);
  const [isParking, setIsParking] = useState(false);


  const handleFurnishedCheckboxChange = (isChecked) => {
    setIsFurnished(isChecked);
  };
  const handlePetsAllowedCheckboxChange = (isChecked) => {
    setIsPetsAllowed(isChecked);
  };
  const handleWasherDryerCheckboxChange = (isChecked) => {
    setIsWasherDryer(isChecked);
  };
  const handleDishwasherCheckboxChange = (isChecked) => {
    setIsDishwasher(isChecked);
  };
  const handleBalconyCheckboxChange = (isChecked) => {
    setIsBalcony(isChecked);
  };
  const handleParkingCheckboxChange = (isChecked) => {
    setIsParking(isChecked);
  };
  const handleClearAllFilters = () => {
    setIsFurnished(false);
    setIsPetsAllowed(false);
    setIsWasherDryer(false);
    setIsDishwasher(false);
    setIsBalcony(false);
    setIsParking(false);
  };
  return (
    <Router>
    <div className='con11'>
      <div className="con2">
        <Aptf
        isFurnished={isFurnished} onFurnishedChange={handleFurnishedCheckboxChange} 
        isPetsAllowed={isPetsAllowed} onPetsAllowedChange={handlePetsAllowedCheckboxChange} 
        iswasher={isWasherDryer} onwasherChange={handleWasherDryerCheckboxChange} 
        isdish={isDishwasher} ondishChange={handleDishwasherCheckboxChange} 
        isbalcony={isBalcony} onbalcony={handleBalconyCheckboxChange} 
        isparking={isParking} onparking={handleParkingCheckboxChange} 
        />
        <div className="drop1">
          <div className="drop mb-3">
            <p>sort by:</p>
            <div className="dropdown">
              <button className="btn btn-secondary btn-lg dropdown-toggle px-4" type="button" data-toggle="dropdown" aria-expanded="false" id="dropd">
                Best Match
              </button>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="#">Action</Link>
                <Link className="dropdown-item" to="#">Another action</Link>
                <Link className="dropdown-item" to="#">Something else here</Link>
              </div>
            </div>
          </div>
          <Aptinfo />
        </div>
        <div className="amen mt-5  mr-4">
          <div className="loc">
            <i className="bi bi-geo-alt mx-3 mb-3"></i>
            <p>Bloomington, In</p>
            </div>
            <div className="filo ml-3 my-3">
        {isFurnished && (
          <button onClick={() => setIsFurnished(false)} className=" ament1 ml-3 pl-4 py-2  my-2" >
            Furnished <i className="bi bi-x-circle-fill ml-4 mr-3"></i>
          </button>
        )}
      </div>
      <div className="filo ml-3 my-2">
        {isPetsAllowed && (
          <button onClick={() => setIsPetsAllowed(false)} className="ament1 ml-3 pl-4 py-2 mr-1 my-2" >
            PetsAllowed <i className="bi bi-x-circle-fill ml-2 mr-3"></i>
          </button>
        )}
      </div>
      <div className="filo ml-3 my-3">
        {isWasherDryer && (
          <button onClick={() => setIsWasherDryer(false)} className="ament1 ml-3 py-2 my-2" >
            <p className="mb-0 ">Laundry </p> <i className="bi bi-x-circle-fill ml-4"></i>
          </button>
        )}
      </div>
      <div className="filo ml-3 my-3">
        {isDishwasher && (
          <button onClick={() => setIsDishwasher(false)} className="ament1 ml-3 pl-4 py-2 mr-1 my-2" >
            Dishwasher <i className="bi bi-x-circle-fill ml-2 mr-3"></i>
          </button>
        )}
      </div>
      <div className="filo ml-3 my-3">
        {isBalcony && (
          <button onClick={() => setIsBalcony(false)} className="ament1 ml-3 py-2 my-2" >
            <p className="mb-0 mr-3 ml-3">Balcony </p> <i className="bi bi-x-circle-fill ml-3 mr-3"></i>
          </button>
        )}
      </div>
      <div className="filo ml-3 my-3">
        {isParking && (
          <button onClick={() => setIsParking(false)} className="ament1 ml-3 pl-4 py-2 mr-1 my-2" >
            <p className="mb-0 mr-2">Parking </p> <i className="bi bi-x-circle-fill ml-4 mr-3"></i>
          </button>
        )}
      </div>
      <div className="filo ml-3 my-3">
      {isFurnished || isPetsAllowed || isWasherDryer || isDishwasher || isBalcony || isParking ? (
            <div className="clear-filters-link mt-3 ml-3" onClick={handleClearAllFilters}>
              Clear all Filters
            </div>
          ) : null}
      </div>
        </div>
      </div>
    </div>
    </Router>
  );
}
