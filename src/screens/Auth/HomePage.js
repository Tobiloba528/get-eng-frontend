import React from "react";
import HomeBanner from "../../components/homeBanner";
import HomeFeature from "../../components/HomeFeature";
import HomeService from "../../components/HomeService";
import ScrollTop from '../../components/ScrollTop';

const HomePage = () => {
  return (
    <>
      <HomeBanner />
      <HomeFeature />
      <HomeService />
      <ScrollTop />
    </>
  );
};

export default HomePage;
