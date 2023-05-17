import React from "react";
import { MenuSide } from "../MenuSide";
import TagsBar from "../TagsBar";

const LeftSideHome = () => {
  return (
    <div className="bg-white">
      <div className="hidden md:grid h-[90vh]   shadow-sm rounded-lg fixed">
        <div className="">
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu w-full text-black">
              {MenuSide}
              <TagsBar />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideHome;
