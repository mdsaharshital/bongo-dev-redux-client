import { Link } from "react-router-dom";

export const MenuSide = (
  <>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/readhistory">Read History</Link>
    </li>
    <li>
      <Link to="/dashboard">Dashboard</Link>
    </li>
    <li className="hidden md:block">
      <Link to="/">khalal</Link>
    </li>
  </>
);
