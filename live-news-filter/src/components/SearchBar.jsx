import React, { useRef } from 'react';

// Searchbar component
// This component allows users to input a search term and clear it.
export default function SearchBar({ value, onChange }) {
// Use reg to focus on input when clearing
  const inputRef = useRef();

  const handleClear = () => {
    onChange(''); // Clear 
    inputRef.current.focus(); // focus
  };


  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button onClick={handleClear}>Clear</button>
    </div>
  );
}
