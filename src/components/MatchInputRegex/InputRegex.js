import React, { useState } from 'react';

const InputRegex = () => {
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    // Use regex for input validation
    const regex = /^\d{3}-\d{3}-\d{4}$/; // Example regex for phone number pattern
    setIsValid(regex.test(value));
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      {!isValid && <p>Please enter a valid phone number (e.g., 123-456-7890)</p>}
    </div>
  );
};

export default InputRegex;
