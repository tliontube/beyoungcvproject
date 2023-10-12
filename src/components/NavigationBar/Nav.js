import React from "react";
import "./Nav1.css";
import NavTopBlack from "./NavTopBlack/NavTopBlack";
import MainMenu from "./MainMenu/Mainmenu";


function Nav() {
  return (
    <section className="Nav-Parent">
      <NavTopBlack />
      <MainMenu />
    </section>
  );
}


export default Nav;
