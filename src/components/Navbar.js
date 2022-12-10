import React from "react";
import logo from "../asstes/logo.png";
import { Link, Outlet, useLocation } from "react-router-dom";
import { MenuSide } from "./MenuSide";
import people from "../asstes/people.png";
import Footer from "./Footer";

const Navbar = () => {
  const { pathname } = useLocation();
  console.log("", pathname);
  const menuForNav = (
    <>
      {pathname === "/" ? (
        <></>
      ) : (
        <>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashBoard/bloglist">DashBoard</Link>
          </li>
        </>
      )}
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src={people} alt="" />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-white rounded-box w-52"
        >
          <li>
            <Link to="/" className="justify-between">
              Profile
              <span className="badge">New</span>
            </Link>
          </li>
          <li>
            <Link to="/">Settings</Link>
          </li>
          <li>
            <Link to="/">Logout</Link>
          </li>
        </ul>
      </div>
    </>
  );
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <div className="w-full navbar bg-white text-black shadow-sm">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">
            <Link to="/" className="btn btn-ghost normal-case text-xl">
              <img src={logo} className="w-10" alt="" />
            </Link>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal items-center">
              {/* <!-- Navbar menu content here --> */}
              {menuForNav}
            </ul>
          </div>
        </div>
        {/* <!-- Page content here --> */}
        <Outlet />
        <Footer />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100">
          {/* <!-- Sidebar content here --> */}
          {MenuSide}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
