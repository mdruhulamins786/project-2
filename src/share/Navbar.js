import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import love from "../assets/love.png";
import buy from "../assets/buy.png";

const Navbar = () => {
  return (
    <>
      <div className="navbar  bg-[#0c6e1c] py-6 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-4">
          <Link className="font-semibold" to="/register">
            Register
          </Link>
          /
          <Link className="font-semibold" to="/login">
            Login
          </Link>
          <div className="md:flex gap-3">
            <Link to="">
              <img className="" src={love} alt="" />
            </Link>
            <Link to="">
              <img className="" src={buy} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
