import React from "react";
import ReactSlider from "react-slider";
const Buttons = ({  onButtonClick, onSliderChange, sliderValues, handleTextInput}) => {
  return (
    <div>
      <button
        className="mx-2 bt"
        id="b1"
        onClick={() => onButtonClick("bed", 1)}
      >
        Bed 1
      </button>
      <button
        className="mx-2 bt"
        id="b2"
        onClick={() => onButtonClick("bed", 2)}
      >
        Bed 2
      </button>
      <button
        className="mx-2 bt"
        id="b3"
        onClick={() => onButtonClick("bed", 3)}
      >
        Bed 3
      </button>
      <button
        className="mx-2 bt"
        id="b4"
        onClick={() => onButtonClick("bed", 4)}
      >
        Bed 4
      </button>
      <button
        className="mx-2 bt"
        id="b5"
        onClick={() => onButtonClick("bed", 5)}
      >
        Bed 5
      </button>
      <button
        className="mx-2 bt"
        id="b6"
        onClick={() => onButtonClick("bath", 1)}
      >
        Bath 1
      </button>
      <button
        className="mx-2 bt"
        id="b7"
        onClick={() => onButtonClick("bath", 2)}
      >
        Bath 2
      </button>
      <button
        className="mx-2 bt"
        id="b8"
        onClick={() => onButtonClick("bath", 3)}
      >
        Bath 3
      </button>
      <button
        className="mx-2 bt"
        id="b9"
        onClick={() => onButtonClick("bath", 4)}
      >
        Bath 4
      </button>
      <button
        className="mx-2 bt"
        id="b10"
        onClick={() => onButtonClick("bath", 5)}
      >
        Bath 5
      </button>
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        defaultValue={sliderValues}
        ariaLabel={["Lower thumb", "Upper thumb"]}
        ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
        renderThumb={(props, state) => (
          <div {...props}>${state.valueNow}</div>
        )}
        pearling
        minDistance={10}
        min={0}
        max={100}
        step={10}
        onChange={onSliderChange}
      />
      <input type="text" placeholder="Filter by Description" onChange={(e) => handleTextInput(e.target.value)} />

    </div>
  );
};

export default Buttons;
