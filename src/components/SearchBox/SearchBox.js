import React from "react";
import "./SearchBox.css";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div>
      <input
        className="search"
        placeholder="search cat"
        type="search"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
