import React from "react";
import Search from "./Search";

// getting search callback function from app, sending down to search
function Header({ onSearch }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      {/* sending callback from app to search for changing the search */}
      <Search onSearch={onSearch} />
    </header>
  );
}

export default Header;
