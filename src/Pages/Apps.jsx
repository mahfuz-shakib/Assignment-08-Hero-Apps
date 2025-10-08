import React, { useState } from "react";
import useApps from "../Hooks/useApps";
import AppCard from "../Components/AppCard";
import Loading from "../Components/Loading";
import NoAppsAvailable from "../Components/NoAppsAvailable";
import Container from "../Components/Container";

const Apps = () => {
  const { apps, loading, setLoading } = useApps();
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setLoading(true);
    const value = e.target.value.toLowerCase().trim().replaceAll("  ", "");
    setSearch(value);
  };
  let searchedApps = [];
  if (search) {
    searchedApps = apps.filter((app) => app.title.toLowerCase().includes(search));
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  } else {
    searchedApps = apps;
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  return (
    <Container>
      <div className="max-w-7xl mx-auto px-3 my-12 min-h-96">
        <h1 className="text-4xl font-semibold text-center">Our All Applications</h1>
        <p className="text-gray-500 text-center mt-5 mb-10">
          Explore All Apps on the Market developed by us.<br className="sm:hidden"></br> We code for Millions
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:justify-between items-center">
          <h1 className="text-2xl font-bold">({searchedApps.length}) Apps Found</h1>
          <label className="input h-10">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" onChange={handleSearch} value={search} required placeholder="Search App" />
          </label>
        </div>
        {loading ? (
          <Loading></Loading>
        ) : !searchedApps.length ? (
          <NoAppsAvailable></NoAppsAvailable>
        ) : (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {searchedApps?.map((app) => (
              <AppCard key={app.id} app={app}></AppCard>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export default Apps;
