import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";
import { AppContext } from "../Context/Context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Root = () => {
  const [installedApp, setInstalledApp]=useState([])
  console.log(installedApp);
  return (
    <div>
      <ToastContainer></ToastContainer>
      <Navbar></Navbar>
      <AppContext.Provider value={{installedApp,setInstalledApp}}>
        <Outlet></Outlet>
      </AppContext.Provider>
      <Footer></Footer>
    </div>
  );
};

export default Root;
