import React from "react";
import Carousel from "react-multi-carousel";
import "./ProductSlider.css";
import "react-multi-carousel/lib/styles.css";
function ProductSlider() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="Carousel__Parent--div">
      <div className="Carousel__child--div">
      <h3 className="SavingZone__text">BIG SAVING ZONE</h3>
        <Carousel className="Carousel" responsive={responsive} infinite={true}>
          <div className="Carousel__div">
            <a>
              <img
                className="Carousel__img"
                src="https://www.beyoung.in/api/catalog/home-19-8-23/combo-section0209.jpg"
              />
            </a>
          </div>
          <div className="Carousel__div">
            <a>
              <img
                className="Carousel__img"
                src="https://www.beyoung.in/api/catalog/home-page-07-02-23/polo-banner-homepage99.jpg"
              />
            </a>
          </div>
          <div className="Carousel__div">
            <a>
              <img
                className="Carousel__img"
                src="https://www.beyoung.in/api/catalog/home-19-7-23/Printed_t-shirt_big_saving_zone_banner.jpg"
              />
            </a>
          </div>
          <div className="Carousel__div">
            <a>
              <img
                className="Carousel__img"
                src="https://www.beyoung.in/api/catalog/home-19-8-23/new-shirt.jpg"
              />
            </a>
          </div>
          <div className="Carousel__div">
            <a>
              <img
                className="Carousel__img"
                src="https://www.beyoung.in/api/catalog/home-19-7-23/Pyjama-Pants-home-page-banner-big-saving-mode126.jpg"
              />
            </a>
          </div>
          <div className="Carousel__div">
            <a>
              <img
                className="Carousel__img"
                src="https://www.beyoung.in/api/catalog/homepage-05-06-23/Oversized-tshirt-banner-big-SAVING-ZONE0908.jpg"
              />
            </a>
          </div>
          <div className="Carousel__div">
            <a>
              <img
                className="Carousel__img"
                src="https://www.beyoung.in/api/catalog/home-19-7-23/Travel_collection_big_saving_zone_home_page_banner.jpg"
              />
            </a>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default ProductSlider;
