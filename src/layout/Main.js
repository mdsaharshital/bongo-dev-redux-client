import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Main = () => {
  return (
    <div className="bg-white">
      <Navbar />
    </div>
  );
};

export default Main;
