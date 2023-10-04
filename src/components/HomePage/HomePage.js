import React from "react";
import HomePageSlider from "./HomePageSlider/HomePageSlider";
import HomePageAds from "./HomePageAds/HomePageAds";
import ProductSlider from "../CommomComponents/ProductSlider/ProductSlider";
import Footer from "./Footer/Footer";
// import SavingSlider from "./BigSavingSwapper/BigSavingSwapper";
function HomePage() {

  return (
    <div>  
      <HomePageSlider />
      <HomePageAds/>
      <ProductSlider/>
      <ProductSlider/>
      <Footer/>
    </div>
  );
}

export default HomePage;
