import React from "react";
import heroImg from "../assets/hero.png";
import playStore from "../assets/googlePlay.png";
import appStore from "../assets/appStore.png";
import Container from "./Container";
import { Link } from "react-router";
import Statistics from "./Statistics";
const Banner = () => {
  return (
    <div className="mt-12">
      <Container>
        <h1 className="text-5xl font-bold text-center space-y-2">
          <p>We Build</p>
          <p>
            <span className="text-gradient">Productive</span> Apps
          </p>
        </h1>
        <p className="text-gray-400 mt-5 text-center px-5">
          At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.{" "}
          <br className="hidden sm:block"></br> Our goal is to turn your ideas into digital experiences that truly make
          an impact.
        </p>
        <div className="w-fit mx-auto sm:space-x-4 space-y-3 sm:space-y-0 mt-6">
          <Link to="https://play.google.com/store/games?hl=en&pli=1" target="blank">
            <button className="btn outline outline-sky-300 bg-white hover:scale-102  w-36 ">
              <img className="size-5" src={playStore} alt="playStore icon" />
              <span>Google Play</span>
            </button>{" "}
            <br className="sm:hidden"></br>
          </Link>
          <Link to="https://www.apple.com/app-store/" target="blank">
            <button className="btn outline outline-sky-300 bg-white hover:scale-102  w-36">
              <img className="size-5" src={appStore} alt="appStore icon" />
              <span>App Store</span>
            </button>
          </Link>
        </div>
        <div>
          <img className="mx-auto mt-8 h-84" src={heroImg} alt="heroImg" />
        </div>
      </Container>
      <Statistics></Statistics>
    </div>
  );
};

export default Banner;
