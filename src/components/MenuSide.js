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
      <Link to="/dashboard/bloglist">Dashboard</Link>
    </li>
  </>
);
