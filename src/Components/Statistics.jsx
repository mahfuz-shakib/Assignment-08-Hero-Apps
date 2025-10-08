import React from "react";

const Statistics = () => {
  return (
    <div className="btn-bg p-12 space-y-6">
      <h1 className="text-3xl font-semibold text-white text-center">
        Trusted By Millions, <br className=" sm:hidden" /> Built For You
      </h1>
      <div className="max-w-4xl  mx-auto flex flex-col sm:flex-row justify-between space-y-8 sm:space-y-0 text-white ">
        <div className="text-center space-y-3 text-lime-300">
          <p className="text-sm  text-gray-100">Total Downloads</p>
          <h1 className="text-4xl lg:text-5xl font-bold">29.6M</h1>
          <p className="text-sm text-gray-100 ">21% more than last month</p>
        </div>
        <div className="text-center space-y-3">
          <p className="text-sm  text-gray-100">Total Reviews</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-red-300">906K</h1>
          <p className="text-sm text-gray-100 ">46% more than last month</p>
        </div>
        <div className="text-center space-y-3">
          <p className="text-sm  text-gray-100">Active Apps</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-yellow-300">132+</h1>
          <p className="text-sm  text-gray-100">31 more will Launch</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
