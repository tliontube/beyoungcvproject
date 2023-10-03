import React,{useState} from "react";
import LoginSignUp from "./LoginAndSignupBtn/LoginSignUp";
import UserRegAndLogin from "../../UserRegistrationAndLogin/UserRegAndLogin";
import "./NavTopBlack.css";
function NavTopBlack() {
  const [isVisible, setIsVisible] = useState(true);
  function visibility() {
    setIsVisible(!isVisible)
  }
  return (
    <div className="Nav__Parent--width">
      {isVisible ? <UserRegAndLogin /> : null}
      <section className="Nav__Child--1">
        <div className="Track__section">
          <span class="material-symbols-outlined">location_on</span>
          <button className="nav__btn">Track Order</button>
        </div>
        <LoginSignUp visible={visibility}/>
      </section>
    </div>
  );
}
export default NavTopBlack;
