
import React, { useState } from 'react';
import Aptf from './Aptf';

export default function Shared() {
    const [isFurnished, setIsFurnished] = useState(false);

  const handleFurnishedCheckboxChange = (isChecked) => {
    setIsFurnished(isChecked);
  };
  return (
    <div>
      <Aptf isFurnished={isFurnished} onFurnishedCheckboxChange={handleFurnishedCheckboxChange} />
      
    </div>
  )
}
