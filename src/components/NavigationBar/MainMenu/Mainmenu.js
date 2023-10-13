import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import "./MainMenu.css";
import BeyoungLogo from "./assets/BeyoungLogo.jpg";
import SearchResult from "../../HomePage/SearchResult/SearchResult"
import ManPage from "../../MenPage/MenPage";
import WomenPage from "../../WomenPage/WomenPage";
import HomePage from "../../HomePage/HomePage";
import Jeans from "../../JeansPage/JeansPage";
import Joggers from "../../Joggers/Joggers";
import Pyjamas from "../../Pyjamas/Pyjamas";
function MainMenu() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");
  const projectId = "f104bi07c490";

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
  }
  const handleSearch = (e) => {
    setsearchTerm(e.target.value);
  };
  return (
    <Router>
      <section className="Main__Menu--ParentContainer">
        <section className="Main__Menu--center">
          <section className="main__Menu">
            <div className="Logo__item--container">
              <div className="Main__Menu--logo">
                <NavLink to="/">
                  <img className="Main__Menu--logoImage" src={BeyoungLogo} />
                </NavLink>
              </div>
              <div className="Main__Menu--item">
                <Link to="/ManPage">
                  <button className="Main__Menu--btn">MEN</button>
                </Link>
                <Link to="/WomenPage">
                  <button className="Main__Menu--btn">WOMEN</button>
                </Link>
                <Link to="/joggers">
                  <button className="Main__Menu--btn">JOGGERS</button>
                </Link>
                <Link to="/jeans">
                  <button className="Main__Menu--btn">JEANS</button>
                </Link>
                <Link to="/pyjamas">
                  <button className="Main__Menu--btn">KURTI</button>
                </Link>
              </div>
            </div>
            <div className="Main__Menu--logoItems">
              <input
                className="search__Input"
                type="text"
                placeholder="Search entire store here..."
                value={searchTerm}
                onChange={handleSearch}
              />
              <Link to="/searchResult">
              <span
                class="material-symbols-outlined search"
                onClick={() => fetchData(searchTerm)}
              >
                search
              </span>
              </Link>
              <span class="material-symbols-outlined favourite">favorite</span>
              <span class="material-symbols-outlined shoppingCart">
                shopping_cart
              </span>
            </div>
          </section>
        </section>
      </section>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ManPage" element={<ManPage />} />
        <Route path="/joggers" element={<Joggers />} />
        <Route path="/pyjamas" element={<Pyjamas />} />
        <Route path="/searchResult" element={<SearchResult searchResults={searchResults}/>}/>
        <Route path="/jeans" element={<Jeans />} />
        <Route path="/WomenPage" element={<WomenPage />} />
      </Routes>
    </Router>
  );
}

export default MainMenu;
