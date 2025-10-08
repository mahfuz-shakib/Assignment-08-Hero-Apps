import React, { useContext } from "react";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import downloadIcon from "../assets/icon-downloads.png";
import ratingIcon from "../assets/icon-ratings.png";
import reviewIcon from "../assets/icon-review.png";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { AppContext } from "../Context/Context";
import { toast } from "react-toastify";

const AppDetails = () => {
  const { installedApp, setInstalledApp } = useContext(AppContext);
  const { id } = useParams();
  const { apps, loading } = useApps();
  const clickedApp = apps && apps.find((app) => app.id === Number(id));
  if (loading) return <p>Loading....</p>;
  const { title, image, companyName, description, downloads, ratingAvg, ratings, reviews, size } = clickedApp;
  const chartData = [...ratings];
  chartData.reverse();

  const handleInstall = (newApp) => {
    setInstalledApp([...installedApp, newApp]);
    toast(`${newApp.title} installed succesfully!`)
  };
  return (
    <div className="bg-gray-100 ">
      <div className="max-w-7xl mx-auto px-3 py-12 space-y-4">
        <div className="flex flex-col sm:flex-row flex-start gap-5 sm:gap-6  items-center pb-4 border-b border-b-gray-300">
          <img className="size-64 rounded" src={image} alt={title} />
          <div className="sm:h-64 sm:flex flex-col justify-between w-full">
            <div className="space-y-3">
              <h1 className="text-3xl font-bold">{title}</h1>
              <p className="text-sm text-gray-500 pb-3 border-b border-b-gray-300">
                Developed by <span className="text-gradient">{companyName}</span>
              </p>
            </div>
            <div className=" flex flex-start gap-12">
              <div className="space-y-2 ">
                <img className="size-8" src={downloadIcon} alt="downloadIcon" />
                <p>Downloads</p>
                <h1 className="text-2xl font-bold">{downloads}</h1>
              </div>
              <div className="space-y-2 ">
                <img className="size-8" src={ratingIcon} alt="ratingIcon" />
                <p>Average Ratings</p>
                <h1 className="text-2xl font-bold">{ratingAvg}</h1>
              </div>
              <div className="space-y-2 ">
                <img className="size-8" src={reviewIcon} alt="reviewIcon" />
                <p>Total Reviews</p>
                <h1 className="text-2xl font-bold">{reviews}</h1>
              </div>
            </div>
            <button
              onClick={() => handleInstall(clickedApp)}
              className="btn w-fit bg-green-500 hover:bg-green-600 hover:scale-102 text-white"
            >
              Install Now ({size})
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
        <div className="space-y-2">
          <h1 className="text-xl font-semibold">Description</h1>
          <p className="text-sm text-gray-600 text-justify">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
