import React from 'react';
import { Link } from 'react-router';
import { CgUnavailable } from "react-icons/cg";
const NoAppsAvailable = () => {
    return (
        <div className="text-center space-y-5">
              <span className="text-7xl text-red-500 flex justify-center"><CgUnavailable/></span>
              <h1 className="text-5xl font-bold">No Apps Found.</h1>
              <div className="flex justify-center items-center flex-wrap gap-4 mt-12">
                <Link to="/">
                    <button className="btn w-32 btn-bg text-white hover:scale-102">Back Home</button>
                </Link>
              </div>
          </div>
    );
};

export default NoAppsAvailable;