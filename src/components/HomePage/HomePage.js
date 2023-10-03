import React from "react";
import HomePageSlider from "./HomePageSlider/HomePageSlider";
import HomePageAds from "./HomePageAds/HomePageAds";
// import SavingSlider from "./BigSavingSwapper/BigSavingSwapper";
function HomePage() {

  return (
    <div>
      <HomePageSlider />
      <HomePageAds/>
    </div>
  );
}

export default HomePage;
