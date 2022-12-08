import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard";
import Main from "../layout/Main";
import BlogDetail from "../pages/Home/BlogDetail";
import BlogList from "../pages/Dashboard/BlogList";
import Home from "./../pages/Home/Home";
import ReadHistory from "../pages/Home/ReadHistory";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/readhistory",
        element: <ReadHistory />,
      },
      {
        path: "/BlogDetail/:id",
        element: <BlogDetail />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/bloglist",
        element: <BlogList />,
      },
    ],
  },
]);
export default routes;
