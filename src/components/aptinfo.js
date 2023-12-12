import React, { useState } from "react";
import { Link } from "react-router-dom";
import jsonData from "./slider.json";
import "./aptinfo.css";

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

  const Card = ({ data }) => (
    <Link to={`/propertydetails/${data.id}`} className="card-link">
      <div className="card">
        <img src={data.image} alt={data.description} />
        <h3>{data.description}</h3>
        <p>Address: {data.Address}</p>
      </div>
    </Link>
  );

  return (
    <div className="carousel">
      <div className="carousel-container">
        {jsonData.slice(startIndex, endIndex).map((item) => (
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
            className={`page-number ${currentSlide === index + 1 ? 'active' : ''}`}
          >
            {index + 1}
          </button>
        ))}

        <button onClick={handleNext} className="btn">
          {">"}
        </button>
      </div>
      <Link to="/login">
        <h1>hii</h1>
      </Link>
    </div>
  );
}
