import React, { useState } from "react";
import "./UserRegAndLogin1.css";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Signup from "./SignUp/SignUp";

function UserRegAndLogin() {
  const [closeModal, setCloseModal] = useState(false);
  const [mail, setMail] = useState("");
  const [password, setPassWord] = useState("");

  function handleMailChange(e) {
    const mailSet = e.target.value;
    setMail(mailSet);
  }

  function handlePassWordChange(e) {
    const passwordSet = e.target.value;
    setPassWord(passwordSet);
  }

  function handleLoginClick() {}

  return (
    <section
      className="Reg__Log--Main"
      style={{ display: closeModal ? "none" : " " }}
    >
      <section className="Reg__Log--Modal">
        <div className="Reg__Log--Modal--img__div">
          <span
            class="material-symbols-outlined reg__Close--btn"
            onClick={() => {
              setCloseModal(true);
            }}
          >
            close
          </span>
          <img
            className="Reg__Log--Modal--img"
            src="https://www.beyoung.in/images/login-image-final.jpg"
          />
        </div>
        <div className="Reg__Log--Modal__info--parent">
          <div className="Reg__Log--Modal__info--child">
            <h3 className="h3Text">
              Login <span>or</span> Signup
            </h3>
            <p className="pText">Get Exciting Offers & Track Order</p>
          </div>
          <div className="Reg__Log--Modal__info--input__button--Parent">
            <input
              className="Reg__Log--Modal__info--input"
              type="email"
              placeholder="Email..."
              value={mail}
              onChange={handleMailChange}
            />
            <input
              className="Reg__Log--Modal__info--input"
              type="password"
              placeholder="Password..."
              value={password}
              onChange={handlePassWordChange}
            />
            <button
              className="Reg__Log--Modal__info--button"
              onClick={handleLoginClick}
            >
              LogIn
            </button>
            <Link to="/SignUp">
              <a className="Reg__Log--Modal__info--SignUp">Signup</a>
            </Link>
          </div>
          <a className="Reg__Log--Modal__info--Continueasguest" href="#">
            Forgot Password?
          </a>
        </div>
      </section>
      <Routes>
        <Route path="/SignUp" element={<Signup />} />
      </Routes>
    </section>
  );
}
export default UserRegAndLogin;
