import React from "react";
import { Link } from "react-router";
import appError from "../assets/App-Error.png";
import Container from "./Container";
const NoAppsAvailable = () => {
  return (
    <Container>
      <div className="text-center space-y-5 sm:space-y-6 min-h-96 my-8 ">
        <img src={appError} alt="" className="mx-auto size-48" />
        <h1 className="text-3xl sm:text-4xl font-bold text-red-600">OPPS!! APP NOT FOUND</h1>
        <p className="text-gray-500">The App you are requesting is not found on our system. please try another apps</p>
        <div className="flex justify-center items-center flex-wrap gap-4">
          <Link to="/">
            <button className="btn btn-bg text-white hover:scale-102 py-3">Go Back!</button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default NoAppsAvailable;
