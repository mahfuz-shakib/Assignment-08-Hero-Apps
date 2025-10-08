import React, { useState } from "react";
import useApps from "../Hooks/useApps";
import AppCard from "../Components/AppCard";

const Apps = () => {
  const { apps, loading, error } = useApps();
  const [search, setsearch]=useState(null)
  const handleSearch=e=>{
    const value = e.target.value.toLowerCase().trim().replaceAll('  ','');
    setsearch(value)
  }
  const searchedApps = search ? apps.filter(app=>app.title.toLowerCase().includes(search)) :apps;
  return (
    <div className="max-w-7xl mx-auto px-3 my-12">
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
          <input type="search" onChange={handleSearch} value={search}  required placeholder="Search App" />
        </label>
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {searchedApps.map((app) => (
          <AppCard key={app.id} app={app}></AppCard>
        ))}
      </div>
    </div>
  );
};

export default Apps;
