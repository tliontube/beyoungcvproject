import React, { useState } from "react";
import "./search.css";

function Search(props) {
  const [searchTerm, setsearchTerm] = useState("");

  const handleSearch = (e) => {
    setsearchTerm(e.target.value);
  };
  return (
    <div className="search__input--Parent">
      <input
        className="search__Input"
        type="text"
        placeholder="Search entire store here..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <button className="search__Input--Button" onClick={fetchData}>
        Search
      </button>
    </div>
  );
}

export default Search;
