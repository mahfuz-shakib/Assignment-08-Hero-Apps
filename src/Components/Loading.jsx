import React from "react";
import image from "../assets/logo.png";
const Loading = () => {
  return (
  
   <div className="min-h-[70vh]">
     <div className="flex text-5xl font-bold gap-1 mt-20 justify-center items-center">
      L<img src={image} className="spinner-img size-12" aria-hidden="true" alt="" />ading...
    </div>
   </div>
  );
};

export default Loading;
