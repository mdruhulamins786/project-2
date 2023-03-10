import React from "react";
import About from "../pages/About";
import Banner from "../pages/Banner";
import Blog from "../pages/Blog";
import Discount from "../pages/Discount";
import Offer from "../pages/Offer";
import Price from "../pages/Price";
import Services from "../pages/Services";

const Home = () => {
  return (
    <div className="bg-[#f7f5f5]">
      <Banner />
      <About />
      <Services />
      <Discount />
      <Price />
      <Offer />
      <Blog />
    </div>
  );
};

export default Home;
