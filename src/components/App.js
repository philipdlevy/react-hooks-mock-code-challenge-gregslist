import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  // state for the search bar
  const [search, setSearch] = useState("")

  // function callback for passing up the search term to change state to search
  // new search is something that iwll be called in the search.
  function handleSearch(newSearch) {
    setSearch(newSearch)
  }

  return (
    <div className="app">
      {/* passing down search callback function to headeer, then search */}
      <Header onSearch={handleSearch} />
      {/* sending down state for the search bar  */}
    <ListingsContainer search={search} />
    </div>
  );
}

export default App;
