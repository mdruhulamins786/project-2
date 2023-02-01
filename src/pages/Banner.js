import React from "react";
import { Link } from "react-router-dom";

import banner from "../assets/banner.png";
import tir from "../assets/tir.png";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${banner})`,
        backgroundPosition: `center`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="h-[700px] px-3"
    >
      <div className="mx-3 md:ml-28 flex items-center h-[600px]">
        <div>
          <h1 className="text-5xl font-bold text-[#0c6e1c]">American Food!</h1>
          <p className="text-3xl font-semibold text-[#0c6e1c] my-2">
            The Best Taste Food
          </p>

          <p className="py-6">
            Lorem, ipsum dolor sit amet consectetur
            <br />
            adipisicing elit. Necessitatibus ratione nisi fugiat
            <br />
            voluptate voluptatem quaerat rerum, at veritatis molestiae aperiam!
          </p>
          <div className="flex">
            <button className="px-8 py-3 text-white uppercase font-semibold rounded-br-2xl rounded-tl-2xl bg-[#0c6e1c] ">
              Order
            </button>
            <Link to="">
              <img className="h-12 ml-6" src={tir} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
