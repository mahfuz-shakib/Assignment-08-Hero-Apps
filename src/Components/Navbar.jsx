import React from "react";
import { Link, NavLink, useLocation } from "react-router";
import Container from "./Container";
import logo from "..//assets/logo.png";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const path = useLocation().pathname;
  const menus = ["Home", "Apps", "My Installation"];
  const links = menus.map((menu, index) => (
    <li key={index}>
      <NavLink
        to={`/${menu.toLowerCase().replaceAll(" ", "")}`}
        className={menu === "Home" && path === "/" ? "default-active" : ""}
      >
        {menu}
      </NavLink>
    </li>
  ));

  return (
    <div className="bg-base-100 shadow-sm">
      <Container>
        <div className="navbar max-w-7xl mx-auto px-1 md:px-2 lg:px-3">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <Link to="/">
              <div className="btn border-none bg-white shadow-none hover:scale-102 hover:cursor-pointer">
                <img className="size-8 hover:cursor-pointer" src={logo} alt="logo" />
                <button className="text-2xl  text-gradient hover:cursor-pointer">HERO.IO</button>
              </div>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-2 md:text-base">{links}</ul>
          </div>
          <div className="navbar-end">
            <Link to="https://github.com/mahfuz-shakib" target="blank">
              <button className="btn btn-bg text-white md:text-base hover:scale-102 hover:bg-violet-600">
                <span className="">
                  <FaGithub />
                </span>
                <span>Contribute</span>
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
