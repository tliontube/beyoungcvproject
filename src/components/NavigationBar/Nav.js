import React from "react";
import "./Nav1.css";
import MainMenu from "./MainMenu/Mainmenu";
function Nav() {
  return (
    <section className="Nav-Parent">
      <div className="Nav__Parent--width">
        <section className="Nav__Child--1">
          <div className="Track__section">
            <span class="material-symbols-outlined">location_on</span>
            <button className="nav__btn">Track Order</button>
          </div>
          <div className="login--signup__section">
            <button className="nav__btn">Login</button>
            <span>|</span>
            <button className="nav__btn">SignUp</button>
          </div>
        </section>
      </div>
      <MainMenu />
    </section>
  );
}
export default Nav;
