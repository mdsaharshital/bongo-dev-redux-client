import React from "react";
import { MenuSide } from "../MenuSide";
import TagsBar from "../TagsBar";

const LeftSideHome = () => {
  return (
    <div className="hidden md:grid h-[90vh]  bg-white shadow-sm rounded-lg">
      <div className="">
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu w-60 text-black">
            {MenuSide}
            <TagsBar />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftSideHome;
