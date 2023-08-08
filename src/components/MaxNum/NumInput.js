import React, { useState } from 'react';
import './NumberInput.css';

const NumberInput = () => {
  const [numbers, setNumbers] = useState('');
  const [maxNumber, setMaxNumber] = useState('');

  const handleInputChange = (event) => {
    setNumbers(event.target.value);
  };

  const findMaxNumber = () => {
    const numberArray = numbers.split(',').map(Number);
    const max = Math.max(...numberArray);
    setMaxNumber(max);
  };

  return (
    <div>
      <input
        type="text"
        value={numbers}
        onChange={handleInputChange}
        placeholder="Enter numbers separated by commas"
        className="userinput"
      />
      <button onClick={findMaxNumber}>Find Maximum</button>
      {maxNumber && <p>Maximum number: {maxNumber}</p>}
    </div>
  );
};

export default NumberInput;