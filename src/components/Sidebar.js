import React from "react";
import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  const menu = (
    <>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="bloglist">Blog List</Link>
      </li>
      <li>
        <Link to="/" className="underline text-blue-300 cursor-pointer">
          Back to Home
        </Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="drawer drawer-mobile bg-white">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content relative ">
          {/* <!-- Page content here --> */}
          <Outlet />
          <div className="navbar bg-base-100 absolute bottom-0 justify-center lg:hidden">
            <div className="flex-none">
              <ul className="menu menu-horizontal p-0">{menu}</ul>
            </div>
          </div>
        </div>
        <div className="drawer-side bg-gray-200">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-60 bg-base-100 text-base-content">
            {menu}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
