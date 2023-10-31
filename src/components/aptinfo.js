import React, { useState } from "react";
import jsonData from "./slider.json";
import { Link } from 'react-router-dom';
import "./aptinfo.css";


function Card({ data, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={data.image} alt={data.description} />
      <h3>{data.description}</h3>
      <p>Address: {data.Address}</p>
    </div>
  );
}

export default function Aptinfo() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const cardsPerSlide = 9;
  const totalItems = jsonData.length;
  const totalSlides = Math.ceil(totalItems / cardsPerSlide);

  const handleNext = () => {
    if (currentSlide < totalSlides) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 1) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentSlide(pageNumber);
  };

  const getCardRange = () => {
    const start = (currentSlide - 1) * cardsPerSlide;
    const end = Math.min(currentSlide * cardsPerSlide, totalItems);
    return [start, end];
  };

  const [startIndex, endIndex] = getCardRange();

  const handleCardClick = (id) => {
    // Redirect to the property details page
    // You can modify the route path according to your requirement
    window.location.href = `/propertydetails/${id}`;
  };

  return (
    <div className="carousel">
      <div className="carousel-container">
        {jsonData.slice(startIndex, endIndex).map((item) => (
          <Card key={item.id} data={item} onClick={() => handleCardClick(item.id)} />
        ))}
      </div>

      <div className="pagination">
        <button onClick={handlePrev} className="btn ">
        {"<"}
        </button>
        {Array.from({ length: totalSlides }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageClick(index + 1)}
            className={`page-number ${currentSlide === index + 1 ? 'active' : ''}`}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={handleNext} className="btn">
        {">"}
        </button>
      </div>
    </div>
  );
}