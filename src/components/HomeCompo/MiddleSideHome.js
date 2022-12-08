import React from "react";
import HomeCard from "./HomeCard";

const MiddleSideHome = () => {
  return (
    <div className="col-span-3 ">
      <div className="flex text-black mb-3">
        <h1 className="ml-2 text-xl">Latest</h1>
        <h1 className="ml-2 text-xl">First Upload</h1>
      </div>
      <div className="h-[80vh]">
        <HomeCard />
      </div>
    </div>
  );
};

export default MiddleSideHome;
