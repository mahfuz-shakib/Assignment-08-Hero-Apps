import React from "react";
import Banner from "../Components/Banner";
import Apps from "./Apps";
import AppCard from "../Components/AppCard";
import useApps from "../Hooks/useApps";
import { Link } from "react-router";
import Loading from "../Components/Loading";
import Container from "../Components/Container";

const Home = () => {
  const { apps, loading } = useApps();
  const homeApps = apps.slice(0, 8);
  return (
    <div>
      <Banner></Banner>
      <Container>
        <div className="max-w-7xl mx-auto px-3 my-16 sm:my-20 space-y-5">
          <h1 className="text-3xl sm:text-4xl font-semibold text-center">Trending Apps</h1>
          <p className="text-gray-500 text-center mb-10 px-3">Explore All Trending Apps on the Market developed by us</p>
          {loading ? (
            <Loading></Loading>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
              {homeApps?.map((app) => (
                <AppCard key={app.id} app={app}></AppCard>
              ))}
            </div>
          )}
          <Link to="/apps">
            <div className="w-32 mx-auto hover:scale-103 mt-10">
              <button className=" w-full btn btn-bg text-white">Show All</button>
            </div>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Home;
