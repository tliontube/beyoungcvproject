import React, { useEffect, useState } from "react";
import "./HomePage1.css";
function HomePage() {
  const [slide, setSlide] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlide((prevSlide) => !prevSlide);
    }, 6000);
    return () => clearInterval(intervalId);
  }, []);

  function handleClick() {
    setSlide((prevSlide) => !prevSlide);
  }
  return (
    <section className="Home__Page--slider">
      <section className="My__Slide--section">
        <div className={slide && "My__slide"}>
          <img
            className="slide__img1 fade"
            src="https://www.beyoung.in/api/catalog/home-19-8-23/new/combo-banner-desktop-vieww1.jpg"
          />
        </div>
        <div className={!slide && "My__slide"}>
          <img
            className="slide__img2 fade"
            src="https://www.beyoung.in/api/catalog/home-19-8-23/new/Boxer-home-page-banner-desktop-view1.jpg"
          />
        </div>
      </section>
      <section>
        <span
          id={slide && "dark_dot"}
          className="dot"
          onClick={handleClick}
        ></span>
        <span
          id={!slide && "dark_dot"}
          className="dot"
          onClick={handleClick}
        ></span>
      </section>
      <section className="Home__page--ads__Parent">
        <section className="Home__page--ads">
          <a className="Home__page--ads__1">
            <img
              src="https://www.beyoung.in/api/catalog/homepage-05-06-23/Travel-Campaign.jpg"
              alt="add Photo"
            />
          </a>
          <a className="Home__page--ads__2">
            <img
              src="https://www.beyoung.in/api/catalog/home-19-7-23/shop-the-look-home-page-section-f.jpg"
              alt="add Photo"
            />
          </a>
        </section>
      </section>
    </section>
  );
}

export default HomePage;
