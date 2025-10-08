import React from "react";
import downloadIcon from "../assets/icon-downloads.png";
import starIcon from "../assets/icon-ratings.png";
import { Link } from "react-router";
const AppCard = ({ app }) => {
  const { image, title, id, downloads, ratingAvg } = app;
  return (
    <Link to={`/apps/${id}`}>
      <div className="bg-white p-4 rounded-lg border border-gray-300 shadow space-y-5 hover:scale-102 hover:cursor-pointer">
        <img className="size-52 mx-auto rounded-lg object-cover border-gray-100 " src={image} alt={title} />
        <h1 className="text-xl font-bold">{title}</h1>
        <div className="flex justify-between">
          <button className="btn bg-green-50 text-green-400 flex items-center gap-1.5">
            <img className="size-5" src={downloadIcon} alt="downloadIcon" />
            <span className="text-lg">{downloads}</span>
          </button>
          <button className="btn bg-orange-50 text-orange-400 flex items-center gap-1.5">
            <img className="size-5" src={starIcon} alt="starIcon" />
            <span className="text-lg">{ratingAvg}</span>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
