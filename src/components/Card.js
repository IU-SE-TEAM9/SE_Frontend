// Card.js
import React from "react";
import { Link } from "react-router-dom";

function Card({ data }) {
  return (
    <Link to="/prop">
      <div className="card">
        <img src={data.image} alt={data.description} />
        <h3>{data.description}</h3>
        <p>Address: {data.Address}</p>
      </div>
    </Link>
  );
}

export default Card;
