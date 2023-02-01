import React from "react";
import { Link } from "react-router-dom";

import item_1 from "../assets/item-1.png";
import item_2 from "../assets/item-2.png";
import item_3 from "../assets/item-3.png";
import tir from "../assets/tir.png";

const Services = () => {
  const data = [
    {
      _id: 1,
      title: "Peanut butter",
      price: 45,
      discription: `Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae
            et a id nisi`,
      photo: item_1,
    },

    {
      _id: 2,
      title: "Pumpkin pie",
      price: 25,
      discription: `Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi`,
      photo: item_2,
    },

    {
      _id: 3,
      title: "Jambalaya",
      price: 55,
      discription: `Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi`,
      photo: item_3,
    },
  ];

  return (
    <>
      <div className="text-center mt-28 my-16 px-3 lg:px-0">
        <p className="text-3xl md:text-5xl font-bold text-[#0c6e1c] uppercase">
          Services
        </p>
        <p className="mt-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
          totam <br /> veniam maxime debitis namea excepturi porro.
        </p>
      </div>
      {/* 1 */}
      <div>
        {data.map((item) => {
          const { _id, title, discription, price, photo } = item;
          return (
            <div key={_id}>
              {" "}
              <div className="hero mt-10 px-3 lg:px-0">
                <div className="hero-content flex-col md:flex-row-reverse">
                  <img
                    src={photo}
                    className="max-w-sm rounded-lg shadow-2xl"
                    alt=""
                  />
                  <div>
                    <div className="flex justify-between">
                      <p className="text-3xl md:text-5xl font-bold text-[#0c6e1c]">
                        {title}
                      </p>
                      <p className="text-xl md:text-3xl font-bold text-[#0c6e1c]">
                        ${price}
                      </p>
                    </div>
                    <p className="py-6">{discription}</p>
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
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Services;
