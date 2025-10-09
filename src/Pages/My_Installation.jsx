import React, { useState } from "react";
import downloadIcon from "../assets/icon-downloads.png";
import starIcon from "../assets/icon-ratings.png";
import { toast } from "react-toastify";
import { getFromLocalStorage, removeFromLocalStorage } from "../Utils/localstorage";
import { downloadConvert } from "../Utils/downloadConvert";
import useApps from "../Hooks/useApps";
import { Link } from "react-router";
import NoAppsAvailable from "../Components/NoAppsAvailable";
import Loading from "../Components/Loading";
import Container from "../Components/Container";

const My_Installation = () => {
  const [savedApp, setSavedApp] = useState(() => getFromLocalStorage());
  const [sortType, setSortType] = useState("none");
  const { apps, loading } = useApps();
  const installedApp = apps.filter((app) => savedApp.includes(app.id));

  const sortedApps = (() => {
    if (sortType === "count-asc") {
      return [...installedApp].sort((a, b) => downloadConvert(a.downloads) - downloadConvert(b.downloads));
    } else if (sortType === "count-desc") {
      return [...installedApp].sort((a, b) => downloadConvert(b.downloads) - downloadConvert(a.downloads));
    } else {
      return installedApp;
    }
  })();

  const handleUninstall = (uninstalledApp) => {
    removeFromLocalStorage(uninstalledApp.id);
    setSavedApp((prev) => prev.filter((id) => id !== uninstalledApp.id));
    toast(`${uninstalledApp.title} uninstallation done!`);
  };

  return (
    <Container>
      <div className="max-w-7xl mx-auto px-3 my-9 sm:my-12 min-h-96">
        <h1 className="text-3xl sm:text-4xl font-semibold text-center">Your Installed Apps</h1>
        <p className="text-gray-500 text-center mt-5 mb-7 sm:mb-10 px-3">
          Explore All Trending Apps on the Market developed by us. We code for Millions
        </p>
        <div className="flex flex-col-reverse sm:flex-row space-y-4 sm:justify-between items-center">
          <h1 className="text-xl mt-5 sm:mt-0 sm:text-2xl font-bold">({sortedApps.length}) Apps Found</h1>
          <label htmlFor="" className="form-control w-48">
            <select
              className="select select-bordered h-10"
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
            >
              <option value="none">Sort By Downloads</option>
              <option value="count-asc">Low -&gt; High</option>
              <option value="count-desc">High -&gt; Low</option>
            </select>
          </label>
        </div>

        <div className="mt-4 sm:mt-6 space-y-4">
          {loading ? (
            <Loading></Loading>
          ) : !sortedApps.length ? (
            <NoAppsAvailable></NoAppsAvailable>
          ) : (
            sortedApps.map((app) => (
              <div
                key={app.id}
                className="sm:flex  justify-between items-center bg-white p-4 rounded-lg border border-gray-300 shadow hover:bg-[#f6f9f2]"
              >
                <div className="flex flex-col sm:flex-row  sm:items-cente gap-4">
                  <img
                    className="size-15 mx-auto rounded-lg object-cover border-gray-100 "
                    src={app.image}
                    alt={app.title}
                  />
                  <div className="space-y-2.5">
                    <h1 className="text-xl text-center sm:text-start font-bold">{app.title}</h1>
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
                <div className="text-center ">
                  <button
                  onClick={() => handleUninstall(app)}
                  className="btn w-full sm:w-fit mx-auto mt-3 sm:mt-0 bg-green-800 sm:bg-green-500 hover:bg-green-600 hover:scale-102 text-white "
                >
                  Uninstall
                </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </Container>
  );
};

export default My_Installation;
