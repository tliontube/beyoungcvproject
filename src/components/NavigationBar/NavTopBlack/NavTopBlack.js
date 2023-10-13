import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import UserRegAndLogin from "../../UserRegistrationAndLogin/UserRegAndLogin";
import SignUp from "../../UserRegistrationAndLogin/SignUp/SignUp"
import "./NavTopBlack.css";
function NavTopBlack() {
  return (
    <Router>
      <div className="Nav__Parent--width">
        <section className="Nav__Child--1">
          <div className="Track__section">
            <span class="material-symbols-outlined">location_on</span>
            <button className="nav__btn">Track Order</button>
          </div>
          <div className="login--signup__section">
            <Link to="/Login">
              <button className="nav__btn">Login</button>
            </Link>
            <span>|</span>
            <Link to="/SignUp">
              <button className="nav__btn">SignUp</button>
            </Link>
          </div>
        </section>
      </div>
      <Routes>
        <Route path="/Login" element={<UserRegAndLogin/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
      </Routes>
    </Router>
  );
}
export default NavTopBlack;
