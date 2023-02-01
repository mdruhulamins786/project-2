import React from "react";
import { Link } from "react-router-dom";

import banner from "../assets/special.png";

const Offer = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${banner})`,
          backgroundPosition: `center`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="h-[400px] px-3 my-28"
      >
        <div className="mx-3 lg:glass-none md:ml-28 flex flex-row-reverse  items-center h-[400px]">
          <div className="">
            <h1 className="text-xl md:text-5xl font-bold text-[#0c6e1c]">
              SALE 50% DISCOUNT
            </h1>
            <p className="text-3xl font-semibold text-[#0c6e1c] my-2">
              The Best Taste Food
            </p>

            <p className="py-6">
              Lorem, ipsum dolor sit amet consectetur
              <br />
              adipisicing elit. Necessitatibus ratione nisi fugiat
              <br />
              voluptate voluptatem quaerat rerum, at veritatis molestiae
              aperiam!
            </p>
            <div className="flex">
              <button className="px-8 py-3 text-white uppercase font-semibold rounded-br-2xl rounded-tl-2xl bg-[#0c6e1c] ">
                Order
              </button>
              <Link to="">
                <img className="h-12 ml-6" src="" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
