import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import fetchBlogs from "../redux/thunk/blogs/fetchBlog";

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);
  return (
    <div className="bg-slate-50">
      <Navbar />
    </div>
  );
};

export default Main;
