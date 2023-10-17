import React from "react";
import "./Wish1.css";
function Wish() {
  return (
    <section className="WishList__Parent--section">
      <section className="WishList__Result--section">
        <div
          className="WishList__Content--section animate__animated animate__bounceInUp"
          key=""
        >
          <section className="WishList--img__section">
            <img
              className="WishList--img__section"
              src="https://www.beyoung.in/api/cache/catalog/products/new_shirt_upload_21_10_2022/sky_blue_oxford_shirt_for_men_base_07_04_2023_400x533.jpg"
              alt=""
            />
          </section>
          <section className="WishList_Result--product_info--section">
            <section className="WishList_Result--name">
              <h3 className="WishList__name--h3">blue Shirt</h3>
            </section>
          </section>
        </div>
      </section>
    </section>
  );
}

export default Wish;
