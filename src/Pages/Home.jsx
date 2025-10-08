import React from "react";
import Banner from "../Components/Banner";
import Apps from "./Apps";
import AppCard from "../Components/AppCard";
import useApps from "../Hooks/useApps";
import { Link } from "react-router";

const Home = () => {
  const { apps, loading, error } = useApps();
  const homeApps = apps.slice(0, 8);
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto px-3 my-20 space-y-5">
        <h1 className="text-4xl font-semibold text-center">Trending Apps</h1>
        <p className="text-gray-500 text-center mb-10">Explore All Trending Apps on the Market developed by us</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {homeApps?.map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>
        <Link to="/apps">
          <div className="w-32 mx-auto hover:scale-103 mt-10">
            <button className=" w-full btn btn-bg text-white">Show All</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
