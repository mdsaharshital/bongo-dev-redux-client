import React from "react";
import logo from "../asstes/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-white text-black">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img src={logo} className="w-10" alt="" />
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
