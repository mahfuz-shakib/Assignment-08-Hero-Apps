import React from "react";
import image from "../assets/logo.png";
const Loading = () => {
  return (
    // <div className="flex w-52 flex-col gap-4 justify-center I items-center mx-auto">
    //   <div className="skeleton h-32 w-full"></div>
    //   <div className="skeleton h-4 w-28"></div>
    //   <div className="skeleton h-4 w-full"></div>
    //   <div className="skeleton h-4 w-full"></div>
    // </div>
    <div className="flex text-5xl mt-16 font-bold gap-1 justify-center items-center">
      L<img src={image} className="spinner-img size-12" aria-hidden="true" alt="" />ading...
    </div>
  );
};

export default Loading;
