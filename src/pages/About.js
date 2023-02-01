import React from "react";
import { Link } from "react-router-dom";

import youtube from "../assets/youtube.png";
import tir from "../assets/tir.png";

const About = () => {
  return (
    <>
      <div className="text-center my-16 px-3">
        <p className="text-5xl font-bold text-[#0c6e1c] uppercase">About Us</p>
        <p className="mt-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
          totam <br /> veniam maxime debitis namea excepturi
          porro.
        </p>
      </div>

      <div className="hero px-3">
        <div className="hero-content flex-col md:flex-row">
          <img
            src={youtube}
            className="max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="text-5xl font-bold text-[#0c6e1c]">
              Let food be thy medicine medicine!
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
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

      {/* 2 */}

      <div className="hero mt-10 px-3">
      <div className="hero-content flex-col md:flex-row-reverse">
          <img
            src={youtube}
            className="max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="text-5xl font-bold text-[#0c6e1c]">
              Let food be thy medicine medicine!
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
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
    </>
  );
};

export default About;
