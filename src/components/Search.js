import React, { useState } from "react";

// getting search from header, from app as a callback function
function Search({ onSearch }) {
  // we need to make state to persist the data and have it be a controlled form
  const [currentState, setCurrentState] = useState("")


  function handleSubmit(e) {
    e.preventDefault();
    // setting current search state to the overall search state
    onSearch(currentState);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        // using current search state as value
        value={currentState}
        // call set search when value is changed to update state
        onChange={(e) => setCurrentState(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
