import React, { useState } from "react";

const Slider = ({ onSliderChange }) => {
  const [sliderValue, setSliderValue] = useState([0, 1000]);

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
    onSliderChange(newValue);
  };

  return (
    <div>
      <label>Rent Range:</label>
      <div>
        <span>${sliderValue[0]}</span>
        <input
          type="range"
          value={sliderValue}
          min={0}
          max={1000}
          step={10}
          onChange={handleSliderChange}
        />
        <span>${sliderValue[1]}</span>
      </div>
    </div>
  );
};

export default Slider;
