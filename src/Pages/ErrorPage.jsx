import React from "react";
import errorPage from "../assets/error-404.png";
import { Link } from "react-router";
import Container from "../Components/Container";
const ErrorPage = () => {
  return (
    <Container>
      <div className="text-center space-y-8 min-h-96 my-12 ">
        <img src={errorPage} alt="" className="mx-auto size-84" />
        <h1 className="text-5xl font-bold text-red-600">Oops, page not found!</h1>
        <p className="text-gray-500">The page you are looking for is not available.</p>
        <div className="flex justify-center items-center flex-wrap gap-4">
          <Link to="/">
            <button className="btn btn-bg text-white hover:scale-102 py-3">Go Back!</button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default ErrorPage;
