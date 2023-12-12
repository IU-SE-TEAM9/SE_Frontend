import React from 'react'
import './apt.css'
import ReactSlider from 'react-slider'
import { useState } from 'react';
import { useAptContext } from './AptContext';
 
export default function Aptf({ isFurnished, isPetsAllowed, onFurnishedChange, onPetsAllowedChange, iswasher, isdish, onwasherChange, ondishChange,isbalcony, isparking, onbalcony, onparking, onButtonClick, onSliderChange, sliderValues,filters }) {
  const handleFurnishedCheckbox = (e) => {
    onFurnishedChange(e.target.checked);
  };
 
  const handlePetsAllowedCheckbox = (e) => {
    onPetsAllowedChange(e.target.checked);
  };
  const handlewasherCheckbox = (e) => {
    onwasherChange(e.target.checked);
  };
  const handledishCheckbox = (e) => {
    ondishChange(e.target.checked);
  };
  const handlebalconyCheckbox = (e) => {
    onbalcony(e.target.checked);
  };
  const handleparkingCheckbox = (e) => {
    onparking(e.target.checked);
  };
  const [buttonColor, setButtonColor] = useState({
    button1: 'rgb(245, 244, 244)',
    button2: 'rgb(245, 244, 244)',
    button3: 'rgb(245, 244, 244)',
    button4: 'rgb(245, 244, 244)',
  });
 
    const [bc, setbc] = useState({
        button11: 'rgb(245, 244, 244)',
        button21: 'rgb(245, 244, 244)',
        button31: 'rgb(245, 244, 244)',
        button41: 'rgb(245, 244, 244)',
        button51: 'rgb(245, 244, 244)',
        button61: 'rgb(245, 244, 244)',
        
      });
      const [bc1, setbc1] = useState({
        button12: 'rgb(245, 244, 244)',
        button22: 'rgb(245, 244, 244)',
        button32: 'rgb(245, 244, 244)',
        button42: 'rgb(245, 244, 244)',
        button52: 'rgb(245, 244, 244)',
        button62: 'rgb(245, 244, 244)',
        
      });
      const [Color, setColor] = useState({
        button1: 'black',
        button2: 'black',
        button3: 'black',
        button4: 'black',
      });
    
      const [c, setc] = useState({
        button11: 'black',
        button21: 'black',
        button31: 'black',
        button41: 'black',
        button51: 'black',
        button61: 'black',
        
      });
      const [c1, setc1] = useState({
        button12: 'black',
        button22: 'black',
        button32: 'black',
        button42: 'black',
        button52: 'black',
        button62: 'black',
        
      });
      const handleToggle = (buttonId) => {
        const updatedButtonColor = {
          button1: buttonId === 'button1' ? 'rgb(22, 191, 135)' : 'rgb(245, 244, 244)',
          button2: buttonId === 'button2' ? 'rgb(22, 191, 135)' : 'rgb(245, 244, 244)',
          button3: buttonId === 'button3' ? 'rgb(22, 191, 135)' : 'rgb(245, 244, 244)',
          button4: buttonId === 'button4' ? 'rgb(22, 191, 135)' : 'rgb(245, 244, 244)',
        };
    
        const updatedColor = {
          button1: buttonId === 'button1' ? 'white' : 'black',
          button2: buttonId === 'button2' ? 'white' : 'black',
          button3: buttonId === 'button3' ? 'white' : 'black',
          button4: buttonId === 'button4' ? 'white' : 'black',
        };
    
        setButtonColor(updatedButtonColor);
        setColor(updatedColor);
      };
      const handleToggle1 = (buttonId1) => {
        const updatedButtonColor = {
              button11: buttonId1 === 'button11' ? 'rgb(22, 191, 135)' : 'rgb(245, 244, 244)',
    button21: buttonId1 === 'button21' ? 'rgb(22, 191, 135)' : 'rgb(245, 244, 244)',
    button31: buttonId1 === 'button31' ? 'rgb(22, 191, 135)' : 'rgb(245, 244, 244)',
    button41: buttonId1 === 'button41' ? 'rgb(22, 191, 135)' : 'rgb(245, 244, 244)',
    button51: buttonId1 === 'button51' ? 'rgb(22, 191, 135)' : 'rgb(245, 244, 244)',
    button61: buttonId1 === 'button61' ? 'rgb(22, 191, 135)' : 'rgb(245, 244, 244)',
        };
    
        const updatedColor = {
          button11: buttonId1 === 'button11' ? 'white' : 'black',
    button21: buttonId1 === 'button21' ? 'white' : 'black',
    button31: buttonId1 === 'button31' ? 'white' : 'black',
    button41: buttonId1 === 'button41' ? 'white' : 'black',
    button51: buttonId1 === 'button51' ? 'white' : 'black',
    button61: buttonId1=== 'button61' ? 'white' : 'black',
        };
    
        setbc(updatedButtonColor);
        setc(updatedColor);
      };
 
      const handleToggle2 = (buttonId2) => {
        const updatedButtonColor = {
               button12: buttonId2 === 'button12' ? 'rgb(22, 191, 135)' : 'rgb(245, 244, 244)',
    button22: buttonId2 === 'button22' ? 'rgb(22, 191, 135)' : 'rgb(245, 244, 244)',
    button32: buttonId2 === 'button32' ? 'rgb(22, 191, 135)' : 'rgb(245, 244, 244)',
    button42: buttonId2 === 'button42' ? 'rgb(22, 191, 135)' : 'rgb(245, 244, 244)',
    button52: buttonId2 === 'button52' ? 'rgb(22, 191, 135)' : 'rgb(245, 244, 244)',
    button62: buttonId2 === 'button62' ? 'rgb(22, 191, 135)' : 'rgb(245, 244, 244)',
        };
    
        const updatedColor = {
          button12: buttonId2 === 'button11' ? 'white' : 'black',
    button22: buttonId2 === 'button22' ? 'white' : 'black',
    button32: buttonId2 === 'button32' ? 'white' : 'black',
    button42: buttonId2 === 'button42' ? 'white' : 'black',
    button52: buttonId2 === 'button52' ? 'white' : 'black',
    button62: buttonId2=== 'button62' ? 'white' : 'black',
        };
    
        setbc1(updatedButtonColor);
        setc1(updatedColor);
      };   
  return (
    <div>
      <div className="filt py-4 px-2">
            <div className="apt">
            <button
            className="fil ml-3 mr-1 my-2"
            style={{ backgroundColor: buttonColor.button1, color:Color.button1 }}
            onClick={() => handleToggle('button1')}
          >
            Apartment
          </button>
          <button
            className="fil ml-3 mr-1 my-2"
            style={{ backgroundColor: buttonColor.button2, color:Color.button2 }}
            onClick={() => handleToggle('button2')}
          >
            House
          </button>
          <button
            className="fil ml-3 mr-1 my-2"
            style={{ backgroundColor: buttonColor.button3, color:Color.button3 }}
            onClick={() => handleToggle('button3')}
          >
            Town House
          </button>
          <button
            className="fil ml-3 mr-1 my-2"
            style={{ backgroundColor: buttonColor.button4, color:Color.button4 }}
            onClick={() => handleToggle('button4')}
          >
            Duplex
          </button>
            </div>
            <div className="range">
            <p className='ml-4'>Price Range Monthly:</p>
            <ReactSlider
  className="horizontal-slider"
  thumbClassName="example-thumb"
  trackClassName="example-track"
  defaultValue={[300, 3000]}
  ariaLabel={['Lower thumb', 'Upper thumb']}
  ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
  renderThumb={(props, state) => <div {...props}>${state.valueNow}</div>}
  pearling
  minDistance={400}
  min={300}
  max={3000}
  step={1}
  onChange={onSliderChange}
/>
 
</div>
<div className="bedr">
    <p className='ml-4'>Bedrooms</p>
    <div className="opt1">
    <button
  className={`mx-2 bt `}
  id="b11"
  style={{ backgroundColor: bc.button11, color: c.button11, textDecoration: 'none' }}
  onClick={() => {
    handleToggle1('button11');
    onButtonClick("bed", 1);
  }}
>
  1
</button>
<button
  className={`mx-2 bt `}
  style={{ backgroundColor: bc.button21, color:c.button21 }}
  onClick={() => {
    handleToggle1('button21');
    onButtonClick("bed", 2);
  }}
>
  2
</button>
<button
  className={`mx-2 bt `}
  style={{ backgroundColor: bc.button31, color:c.button31 }}
  onClick={() => {
    handleToggle1('button31');
    onButtonClick("bed", 3);
  }}
>
  3
</button>
<button
  className={`mx-2 bt `}
  style={{ backgroundColor: bc.button41, color:c.button41 }}
  onClick={() => {
    handleToggle1('button41');
    onButtonClick("bed", 4);
  }}
>
  4
</button>
<button
  className={`mx-2 bt `}
  style={{ backgroundColor: bc.button51, color:c.button51 }}
  onClick={() => {
    handleToggle1('button51');
    onButtonClick("bed", 5);
  }}
>
  5
</button>
<button
  className={`mx-2 bt `}
  style={{ backgroundColor: bc.button61, color:c.button61}}
  onClick={() => {
    handleToggle1('button61');
    onButtonClick("bed", 6);
  }}
>
  6+
</button>
    </div>
</div>
<div className="bedr" id="bath">
    <p className='ml-4'>Bathrooms</p>
    <div className="opt2">
    <button className='mx-2 bt ' style={{ backgroundColor: bc1.button12, color:c1.button12, textDecoration: 'none' }}
            onClick={() => {
              handleToggle2('button12');
              onButtonClick("bath", 1);
            }}>1</button>
        <button className='mx-2 bt' style={{ backgroundColor: bc1.button22, color:c1.button22 }}
            onClick={() => {
              handleToggle2('button22');
              onButtonClick("bath", 2);
            }}>2</button>
        <button className='mx-2 bt' style={{ backgroundColor: bc1.button32, color:c1.button32 }}
            onClick={() => {
              handleToggle2('button32');
              onButtonClick("bath", 3);
            }}>3</button>
        <button className='mx-2 bt' style={{ backgroundColor: bc1.button42, color:c1.button42 }}
            onClick={() => {
              handleToggle2('button42');
              onButtonClick("bath", 4);
            }}>4</button>
        <button className='mx-2 bt' style={{ backgroundColor: bc1.button52, color:c1.button52 }}
            onClick={() => {
              handleToggle2('button52');
              onButtonClick("bath", 5);
            }}>5</button>
        <button className='mx-2 bt'  style={{ backgroundColor: bc1.button62, color:c1.button62 }}
            onClick={() => {
              handleToggle2('button62');
              onButtonClick("bath", 6);
            }} id="six">6+</button>
    </div>
</div>
<div className="amen1">
    <p className='amen-title'>Amenities</p>
    <div className="chk">
    <div className="ch1 ml-4">
    <input
              className="chk2"
              type="checkbox"
              aria-label="Checkbox for following text input"
              onChange={(e) => {
                
               
                handleFurnishedCheckbox(e);
                
              }}
              // checked={isFurnished}
              // checked={filters.isFurnished}
              checked={isFurnished && filters.isFurnished}
              
            />
            <label className='ml-2'>Furnished</label>
          </div>
    </div>
    <div className="ch1 ml-4" >
    <input className="chk2" type="checkbox" aria-label="Checkbox for following text input" onChange={(e) => {
                
                
                handlePetsAllowedCheckbox(e);
                
              }}
              checked={isPetsAllowed && filters.isPetsAllowed}/>
    <label className='ml-2'>pets Allowed</label>
    </div>
    <div className="ch1 ml-4">
    <input type="checkbox" aria-label="Checkbox for following text input"
  onChange={(e) => {
                
   
    handlewasherCheckbox(e);
    
  }}
              checked={iswasher && filters.iswasher}/>
    <label className='ml-2'>In-Unit Washer & Dryer</label>
    </div>
    <div className="ch1 ml-4">
    <input type="checkbox" aria-label="Checkbox for following text input" onChange={(e) => {
                
                
                handledishCheckbox(e);
                
              }}
              checked={isdish && filters.isdish} />
    <label className='ml-2'>Dishwasher</label>
    </div>
    <div className="ch1 ml-4">
    <input type="checkbox" aria-label="Checkbox for following text input" onChange={(e) => {
                
                
                handlebalconyCheckbox(e);
                
              }}
              checked={isbalcony && filters.isbalcony} />
    <label className='ml-2'>Balcony</label>
    </div>
    <div className="ch1 ml-4">
    <input type="checkbox" aria-label="Checkbox for following text input" onChange={(e) => {
                
                
                handleparkingCheckbox(e);
                
              }}
              checked={isparking && filters.isparking}/>
    <label className='ml-2'>Parking</label>
    </div>
    
    </div>
</div>
    </div>
  )
}