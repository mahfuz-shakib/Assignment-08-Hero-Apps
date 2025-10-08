import React, { useContext } from "react";
import { AppContext } from "../Context/Context";

const My_Installation = () => {
  const { installedApp, setInstalledApp } = useContext(AppContext);
  console.log(installedApp);

  return (
    <div className="max-w-7xl mx-auto px-3 my-12">
      <h1>My installation</h1>
    </div>
  );
};

export default My_Installation;
