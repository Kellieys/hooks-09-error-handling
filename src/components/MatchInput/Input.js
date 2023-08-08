import React, { useState } from 'react';

const Input = () => {
  const [inputValue, setInputValue] = useState('');
  const [matches, setMatches] = useState([]);

  const list = ['apple', 'banana', 'cherry', 'orange', 'pear'];

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    // Use regex to find matches in the list
    const regex = new RegExp(value, 'i'); // Case-insensitive matching
    const matchedItems = list.filter((item) => regex.test(item));
    setMatches(matchedItems);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      {matches.length > 0 && (
        <ul>
          {matches.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Input;
