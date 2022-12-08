import React from "react";
import LeftSideHome from "../../components/HomeCompo/LeftSideHome";
import MiddleSideHome from "../../components/HomeCompo/MiddleSideHome";
import RightSideHome from "../../components/HomeCompo/RightSideHome";

const Home = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 justify-items-stretch lg:px-[14vw] md:px-[14vw]">
      <LeftSideHome />
      <MiddleSideHome />
      <RightSideHome />
    </div>
  );
};

export default Home;
