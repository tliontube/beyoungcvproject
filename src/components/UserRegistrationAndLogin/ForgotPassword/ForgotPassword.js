import React, { useState } from "react";
import "./ForgotPassword.css";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [closeModal, setCloseModal] = useState(false);
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassWord] = useState("");
  const projectId = "f104bi07c490";
  const [errorMessage, setErrorMessage] = useState(null);

  function handleMailChange(e) {
    const mailSet = e.target.value;
    setMail(mailSet);
  }
  function handleNameChange(e) {
    const nameSet = e.target.value;
    setName(nameSet);
  }

  function handlePassWordChange(e) {
    const passwordSet = e.target.value;
    setPassWord(passwordSet);
  }

  async function handleSignUpClick() {
    setErrorMessage(null);
    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/user/forgotPassword",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Added Content-Type
            projectID: projectId,
          },
          body: JSON.stringify({
            name: name,
            email: mail,
            password: password,
            appType: "ecommerce",
          }),
        }
      );
      if (response.ok) {
        console.log("successfully password reset");
        // Redirect or display a success message
      } else if (response.status === 401) {
        console.log(response.status);
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
            <h3 className="h3Text">Forgot Password</h3>
            <p className="pText">Get Exciting Offers & Track Order</p>
          </div>
          <div className="Reg__Log--Modal__info--input__button--Parent">
            <input
              className="Reg__Log--Modal__info--input"
              type="text"
              placeholder="Name..."
              value={name}
              onChange={handleNameChange}
            />
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
            <Link to="/Login">
            <button
              className="forgotPassword__Login-btn"
              onClick={handleSignUpClick}
            >
              Login
            </button>
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}
export default ForgotPassword;
