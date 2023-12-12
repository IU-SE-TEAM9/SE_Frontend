/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CardSlider = ({ jsonData, filters }) => {
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

  const filteredData = jsonData
    .filter((item) => {
      return (
        (filters.bed ? parseInt(item.bed) === filters.bed : true) &&
        (filters.bath ? parseInt(item.bath) === filters.bath : true) &&
        (!filters.minRent || parseInt(item.rent) >= filters.minRent) &&
        (!filters.maxRent || parseInt(item.rent) <= filters.maxRent) &&
        // Add description filtering
        (filters.description
          ? item.description.toLowerCase().includes(filters.description.toLowerCase())
          : true)
      );
    })
    .slice(startIndex, endIndex);

  const Card = ({ data }) => (
    <Link to={`/propertydetails/${data._id}`}>
      <div className="card">
        <img src={`https://rentr.onrender.com/${data.image}`} alt={data.description} />
        
        <h3>{data.description}</h3>
        {/* <p>Address: {data.Address}</p> */}
      </div>
    </Link>
  );

  return (
    <div className="carousel">
      <div className="carousel-container">
        {filteredData.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>

      <div className="pagination">
        <button onClick={handlePrev} className="btn">
          {"<"}
        </button>
        {Array.from({ length: totalSlides }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageClick(index + 1)}
            className={`page-number ${currentSlide === index + 1 ? "active" : ""}`}
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
};

export default CardSlider;
