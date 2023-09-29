import React from "react";
import "./MainMenu.css";
import BeyoungLogo from "./assets/BeyoungLogo.jpg";
function MainMenu() {
  return (
    <section className="Main__Menu--center">
      <section className="main__Menu">
        <div className="Logo__item--container">
        <div className="Main__Menu--logo">
          <img className="Main__Menu--logoImage" src={BeyoungLogo} />
        </div>
        <div className="Main__Menu--item">
          <button className="Main__Menu--btn">MEN</button>
          <button className="Main__Menu--btn">WOMEN</button>
          <button className="Main__Menu--btn">COMBOS</button>
          <button className="Main__Menu--btn">JOGGERS</button>
          <button className="Main__Menu--btn">SHOP THE LOOK</button>
          <button className="Main__Menu--btn">SHOP BY COLLECTION</button>
        </div>
        </div>
        <div className="Main__Menu--logoItems">
          <span class="material-symbols-outlined search">search</span>
          <span class="material-symbols-outlined favourite">favorite</span>
          <span class="material-symbols-outlined shoppingCart">
            shopping_cart
          </span>
        </div>
      </section>
    </section>
  );
}

export default MainMenu;
