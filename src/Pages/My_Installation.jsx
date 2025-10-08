import React, { useState } from "react";
import downloadIcon from "../assets/icon-downloads.png";
import starIcon from "../assets/icon-ratings.png";
import { toast } from "react-toastify";
import { getFromLocalStorage, removeFromLocalStorage, saveToLocalStorage } from "../Utils/localstorage";
import useApps from "../Hooks/useApps";
const My_Installation = () => {
  const [savedApp, setSavedApp] = useState(() => getFromLocalStorage());
  const [sortType, setSortType] = useState("none");
  const { apps } = useApps();
  const installedApp = apps.filter((app) => savedApp.includes(app.id));

  const sortedApps = (() => {
    if (sortType === "size-asc") {
      return [...installedApp].sort((a, b) => parseInt(a.size.slice(0, -3)) - parseInt(b.size.slice(0, -3)));
    } else if (sortType === "size-desc") {
      return [...installedApp].sort((a, b) => parseInt(b.size.slice(0, -3)) - parseInt(a.size.slice(0, -3)));
    } else {
      return installedApp;
    }
  })();
  const handleUninstall = (uninstalledApp) => {
    removeFromLocalStorage(uninstalledApp.id);
    setSavedApp(prev=>prev.filter(id=> id!==uninstalledApp.id));

    toast(`${uninstalledApp.title} uninstallation done!`);
  };
  return (
    <div className="max-w-7xl mx-auto px-3 my-12 min-h-96">
      <h1 className="text-4xl font-semibold text-center">Your Installed Apps</h1>
      <p className="text-gray-500 text-center mt-5 mb-10">
        Explore All Trending Apps on the Market developed by us.<br className="sm:hidden"></br> We code for Millions
      </p>
      <div className="flex flex-col sm:flex-row space-y-4 sm:justify-between items-center">
        <h1 className="text-2xl font-bold">({sortedApps.length}) Apps Found</h1>
        <label htmlFor="" className="form-control w-full max-w-xs">
          <select
            className="select select-bordered h-10"
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="none">Sort By Size</option>
            <option value="size-asc">Low -&gt; High</option>
            <option value="size-desc">High -&gt; Low</option>
          </select>
        </label>
      </div>

      <div className="mt-6 space-y-4">
        {sortedApps.map((app) => (
          <div
            key={app.id}
            className="flex justify-between items-center g-white p-4 rounded-lg border border-gray-300 shadow hover:bg-[#f6f9f2]"
          >
            <div className="flex items-cente gap-4">
              <img
                className="size-15 mx-auto rounded-lg object-cover border-gray-100 "
                src={app.image}
                alt={app.title}
              />
              <div className="space-y-2.5">
                <h1 className="text-xl font-bold">{app.title}</h1>
                <div className="flex justify-between gap-6">
                  <div className=" text-green-400 flex items-center gap-1.5">
                    <img className="size-4" src={downloadIcon} alt="downloadIcon" />
                    <span className="">{app.downloads}</span>
                  </div>
                  <div className="  text-orange-400 flex items-center gap-1.5">
                    <img className="size-4" src={starIcon} alt="starIcon" />
                    <span className="">{app.ratingAvg}</span>
                  </div>
                  <div className=" text-gray-500 flex items-center gap-1.5">
                    <span className="">{app.size}</span>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => handleUninstall(app)}
              className="btn w-fit bg-green-500 hover:bg-green-600 hover:scale-102 text-white"
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default My_Installation;
