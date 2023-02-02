import React from "react";
import logo from "../assets/item-4.png";

const Login = () => {
  return (
    <>
      <div className="grid md:grid-cols-2">
        <div className="hidden md:block">
          <img className="text-[#0c6e1c] w-full h-full" src={logo} alt="" />
        </div>
        <div className=" px-16 py-28 bg-white">
          <form action="">
            <p className="text-center mb-6 text-4xl font-semibold  text-[#0c6e1c]">
              Login Form
            </p>

            {/* email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="py-3 pl-1 rounded-sm outline-none border-b-2 border-[#0c6e1c]"
              />
            </div>
            {/* password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="py-3 pl-1 rounded-sm outline-none border-b-2 border-[#0c6e1c]"
              />
            </div>
            <div className="flex justify-center w-full">
              <button className="px-6 py-2 mt-6 text-white font-semibold rounded-br-2xl rounded-tl-2xl bg-[#0c6e1c]">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
