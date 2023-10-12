import React, { useState } from "react";
import "./search.css";
import { BrowserRouter as Router, Link, Route, Routes,useNavigate } from "react-router-dom";
import SearchResult from "../../../HomePage/SearchResult/SearchResult";
function Search() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");
  const projectId = "f104bi07c490";
  const navigate = useNavigate();

  async function fetchData(searchTerm) {
    if (searchTerm.trim() === "") {
      // If searchTerm is empty or contains only whitespace, do not make the API call
      return;
    }

    const dynamicApi = `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?search={"name":"${searchTerm}"}`;

    try {
      const response = await fetch(dynamicApi, {
        headers: {
          projectId: projectId,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setSearchResults(data.data);
        setsearchTerm(""); // Clear the searchTerm
      } else {
        console.error("Error:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
    navigate('/SearchResult')
  }

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
          <button
            className="search__Input--Button"
            onClick={() => fetchData(searchTerm)}
          >
            Search
          </button>
          <Routes>
            <Route path="/SearchResult" element={<SearchResult searchResults={searchResults}/>}/>
          </Routes>
          
      </div>
  );
}

export default Search;

{/* <SearchResult searchResults={searchResults} /> */}