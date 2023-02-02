import React from "react";

import item_4 from "../assets/item-4.png";
import item_5 from "../assets/item-5.png";

const Blog = () => {
  return (
    <div className="mx-3 mb-10">
      <div className="text-center mt-28 my-16 px-3 lg:px-0">
        <p className="text-3xl md:text-5xl font-bold text-[#0c6e1c] uppercase">
          Blog
        </p>
        <p className="mt-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
          totam <br /> veniam maxime debitis namea excepturi porro.
        </p>
      </div>
      {/*  */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 ">
        <div className="shadow-lg">
          <img className="w-full rounded-md" src={item_4} alt="" />
        </div>
        <div className="px-3 py-6 bg-[#e9e5e5] rounded-md">
          <p className="text-2xl font-semibold text-[#0c6e1c]">
            Eat food. Not too muchmostly plants.
          </p>
          <p className="my-6">
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
            totam veniam maxime debitis namea excepturi porro.
          </p>
          <button className="px-8 py-3 text-white uppercase font-semibold rounded-br-2xl rounded-tl-2xl bg-[#0c6e1c]">
            Read More
          </button>
        </div>
        <div className="shadow-lg">
          <img className="w-full rounded-md" src={item_5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
