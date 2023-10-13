import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes,NavLink } from "react-router-dom";
import "./MainMenu.css";
import BeyoungLogo from "./assets/BeyoungLogo.jpg";
import Search from "./Search/search";
import ManPage from "../../MenPage/MenPage";
import WomenPage from "../../WomenPage/WomenPage";
import HomePage from "../../HomePage/HomePage";
function MainMenu() {
  const [isVisible, setIsVisible] = useState(false);
  function HandleSearch() {
    setIsVisible(!isVisible);
  }
  return (
    <Router>
      <section className="Main__Menu--ParentContainer">
        <section className="Main__Menu--center">
          <section className="main__Menu">
            <div className="Logo__item--container">
              <div className="Main__Menu--logo">
                <NavLink to= "/">
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
                <button className="Main__Menu--btn">COMBOS</button>
                <button className="Main__Menu--btn">JEANS</button>
                <button className="Main__Menu--btn">SHOP THE LOOK</button>
                <button className="Main__Menu--btn">SHOP BY COLLECTION</button>
              </div>
            </div>
            <div className="Main__Menu--logoItems">
              <span
                class="material-symbols-outlined search"
                onClick={HandleSearch}
              >
                search
              </span>
              <span class="material-symbols-outlined favourite">favorite</span>
              <span class="material-symbols-outlined shoppingCart">
                shopping_cart
              </span>
            </div>
          </section>
        </section>
        <section className="Main__Menu--search">
          {isVisible && <Search />}
        </section>
      </section>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/ManPage" element={<ManPage />} />
        <Route path="/WomenPage" element={<WomenPage />} />
      </Routes>
    </Router>
  );
}

export default MainMenu;
