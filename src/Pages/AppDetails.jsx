import React, { useState } from "react";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import downloadIcon from "../assets/icon-downloads.png";
import ratingIcon from "../assets/icon-ratings.png";
import reviewIcon from "../assets/icon-review.png";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { toast } from "react-toastify";
import { addToLocalStorage, getFromLocalStorage } from "../Utils/localstorage";
import ErrorApp from "./ErrorApp";
import Loading from "../Components/Loading";
import Container from "../Components/Container";

const AppDetails = () => {
  const [installedApp] = useState(() => getFromLocalStorage());
  const { apps, loading } = useApps();
  const { id } = useParams();
  const appId = Number(id);

  const [install, setInstall] = useState(() => installedApp.some((id) => id === appId));
  const clickedApp = apps && apps.find((app) => app.id === appId);

  // show loading
  if (loading) return <Loading></Loading>;
  // show app not found error
  if (appId === isNaN || !apps.some((app) => app.id === appId)) {
    return <ErrorApp></ErrorApp>;
  }

  const { title, image, companyName, description, downloads, ratingAvg, ratings, reviews, size } = clickedApp;
  const chartData = [...ratings];
  chartData.reverse();

  const handleInstall = (newApp) => {
    addToLocalStorage(newApp.id);
    setInstall(true);
    toast(`${newApp.title} installed succesfully!`);
  };
  return (
    <Container>
      <div className="max-w-7xl mx-auto px-3 py-10 sm:py-12 space-y-4 min-h-96">
        <div className="flex flex-col space-y-2 sm:flex-row flex-start gap-5 sm:gap-10  items-center pb-6 border-b border-b-gray-300">
          <img className=" size-42 sm:size-64 object-cover rounded " src={image} alt={title} />
          <div className="sm:h-64 sm:flex flex-col justify-between w-full">
            <div className="space-y-3 text-center sm:text-start">
              <h1 className="text-2xl sm:text-3xl font-bold">{title}</h1>
              <p className="text-sm text-gray-500 pb-4 border-b border-b-gray-300">
                Developed by <span className="text-gradient">{companyName}</span>
              </p>
            </div>
            <div className=" flex flex-start my-6 sm:my-0 sm:gap-12">
              <div className="w-1/3 sm:w-fit text-center sm:text-start space-y-3 sm:space-y-2 border-r border-gray-300 sm:border-none ">
                <img className="size-7 mx-auto sm:mx-0 sm:size-8" src={downloadIcon} alt="downloadIcon" />
                <p>Total Downloads</p>
                <h1 className="text-xl sm:text-2xl font-bold">{downloads}</h1>
              </div>
              <div className="w-1/3 px-4 sm:w-fit text-center sm:text-start space-y-3 sm:space-y-2 border-r border-gray-300 sm:border-none ">
                <img className="size-7 mx-auto sm:mx-0 sm:size-8" src={ratingIcon} alt="ratingIcon" />
                <p>Average Ratings</p>
                <h1 className="text-xl sm:text-2xl font-bold">{ratingAvg}</h1>
              </div>
              <div className="w-1/3 px-4 sm:w-fit text-center sm:text-start space-y-3 sm:space-y-2 ">
                <img className="size-7 mx-auto sm:mx-0 sm:size-8" src={reviewIcon} alt="reviewIcon" />
                <p>Total Reviews</p>
                <h1 className="text-xl sm:text-2xl font-bold">{reviews}</h1>
              </div>
            </div>
            <button
              onClick={() => handleInstall(clickedApp)}
              disabled={install}
              className={`btn w-fit hover:scale-102 overflow-hidden bg-green-500 text-white ${
                install
                  ? "!bg-green-700"
                  : "bg-gradient-to-r from-green-600 via-green-500 to-green-600 animate-gradient-x"
              }`}
            >
              {install ? "Installed" : `Install Now ${size}`}
            </button>
          </div>
        </div>

        <div className=" border-b border-b-gray-300 space-y-3  my-8 pb-6">
          <h1 className="text-xl font-bold">Ratings</h1>
          <div className="h-84 w-full ">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} layout="vertical">
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis dataKey="count" type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#FF8811" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="space-y-3">
          <h1 className="text-xl font-semibold">Description</h1>
          <pre className="text-sm text-wrap text-gray-600 text-justify">{description}</pre>
        </div>
      </div>
    </Container>
  );
};

export default AppDetails;
