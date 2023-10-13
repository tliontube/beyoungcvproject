import React, { useState } from "react";
import "./UserRegAndLogin1.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Signup from "./SignUp/SignUp";

function UserRegAndLogin() {
  const [closeModal, setCloseModal] = useState(false);
  const [mail, setMail] = useState("");
  const [password, setPassWord] = useState("");
  const projectId = "f104bi07c490";
  const [errorMessage, setErrorMessage] = useState(""); // Added for error handling

  function handleMailChange(e) {
    const mailSet = e.target.value;
    setMail(mailSet);
  }

  function handlePassWordChange(e) {
    const passwordSet = e.target.value;
    setPassWord(passwordSet);
  }

  async function handleLoginClick() {
    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Added Content-Type
            projectID: projectId,
          },
          body: JSON.stringify({
            email: mail,
            password: password,
            appType: "ecommerce",
          }),
        }
      );
      if (response.ok) {
        console.log("successfully login");
        // Redirect or display a success message
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message); // Example error handling
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  }

  return (
    <section
      className="Reg__Log--Main"
      style={{ display: closeModal ? "none" : "" }}
    >
      <section className="Reg__Log--Modal">
        <div className="Reg__Log--Modal--img__div">
          <span
            className="material-symbols-outlined reg__Close--btn" // Use className
            onClick={() => {
              setCloseModal(true);
            }}
          >
            close
          </span>
          <img
            className="Reg__Log--Modal--img"
            src="https://www.beyoung.in/images/login-image-final.jpg"
            alt="Login Image"
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
          {errorMessage && (
            <div className="error-message">{errorMessage}</div>
          )}
        </div>
      </section>
      <Routes>
        <Route path="/SignUp" element={<Signup />} />
      </Routes>
    </section>
  );
}

export default UserRegAndLogin;
