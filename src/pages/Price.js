import React from "react";
import { Link } from "react-router-dom";

const Price = () => {
  const priceData = [
    {
      _id: 1,
      title: "Basic",
      price: 35,
      package_1: "6 pis Chiken",
      package_2: "3 pis Beef Chiken",
      package_3: "1 pis Burger",
    },

    {
      _id: 2,
      title: "Standart",
      price: 50,
      package_1: "6 pis Chiken",
      package_2: "3 pis Beef Chiken",
      package_3: "1 pis Burger",
    },

    {
      _id: 3,
      title: "Premium",
      price: 95,
      package_1: "6 pis Chiken",
      package_2: "3 pis Beef Chiken",
      package_3: "1 pis Burger",
    },
  ];

  return (
    <>
      <div className="text-center my-16 px-3 lg:px-0">
        <p className="text-3xl md:text-5xl font-bold text-[#0c6e1c] uppercase">
          Pricing
        </p>
        <p className="mt-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
          totam <br /> veniam maxime debitis namea excepturi porro.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mx-3 xl:mx-0 text-center">
        {priceData.map((prices) => {
          const { _id, title, price, package_1, package_2, package_3 } = prices;
          return (
            <>
              <div key={_id} className="glass">
                <div className="bg-[#0c6e1c] py-12 text-white">
                  <p className="text-3xl font-semibold">{title}</p>
                  <p className="text-4xl font-bold">${price}</p>
                </div>
                <div className="pt-16 bg-[#f1f1f1]">
                  <p className="text-lg text-[#0c6e1c]">{package_1}</p>
                  <p className="text-lg text-[#0c6e1c]">{package_2}</p>
                  <p className="text-lg text-[#0c6e1c]">{package_3}</p>
                  <button className="my-12">
                    {" "}
                    <Link
                      to=""
                      className="px-8 py-3 text-white uppercase font-semibold rounded-br-2xl rounded-tl-2xl bg-[#0c6e1c]"
                    >
                      Buy Now
                    </Link>
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Price;
