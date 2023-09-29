import React from "react";
import "./Nav1.css";
function Nav() {
  return (
    <section className="Nav-Parent">
      <section className="Nav__Child--1">
        <div className="Track__section">
          <span class="material-symbols-outlined">location_on</span>
          <button>Track Order</button>
        </div>
        <div>
          <button>Login</button>
          <span>|</span>
          <button>SignUp</button>
        </div>
      </section>
      <section>

      </section>
    </section>
  );
}
export default Nav;
