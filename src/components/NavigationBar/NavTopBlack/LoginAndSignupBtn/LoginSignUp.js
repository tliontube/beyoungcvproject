import React from "react";
import "./LoginSignUp.css"
function LoginSignUp(props){
    return(
        <div className="login--signup__section">
        <button className="nav__btn" onClick={props.visible}>Login</button>
        <span>|</span>
        <button className="nav__btn" onClick={props.visible}>SignUp</button>
      </div>
    )
}

export default LoginSignUp;