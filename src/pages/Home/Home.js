import React from "react";
import LeftSideHome from "../../components/HomeCompo/LeftSideHome";
import MiddleSideHome from "../../components/HomeCompo/MiddleSideHome";
import RightSideHome from "../../components/HomeCompo/RightSideHome";

const Home = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 justify-items-stretch lg:px-[14vw]  mt-8 gap-4">
      <LeftSideHome />
      <MiddleSideHome />
      {/* <RightSideHome /> */}
    </div>
  );
};

export default Home;
