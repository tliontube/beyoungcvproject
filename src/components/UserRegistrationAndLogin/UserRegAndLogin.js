import React,{useState} from "react";
import "./UserRegAndLogin1.css";
function UserRegAndLogin() {
  const [closeModal, setCloseModal] = useState(false);
  return (
    <section className="Reg__Log--Main" style={{ display: closeModal ? "none" : " "}}>
      <section className="Reg__Log--Modal">
        <div className="Reg__Log--Modal--img__div">
          <span class="material-symbols-outlined reg__Close--btn" onClick={()=>{
              setCloseModal(true);
          }}>close</span>
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
              type="tel"
              placeholder="Phone Number*"
            />
            <button className="Reg__Log--Modal__info--button">
              Login with OTP
            </button>
          </div>
          <a className="Reg__Log--Modal__info--Continueasguest" href="#">
            Continue as Guest
          </a>
        </div>
      </section>
    </section>
  );
}
export default UserRegAndLogin;
