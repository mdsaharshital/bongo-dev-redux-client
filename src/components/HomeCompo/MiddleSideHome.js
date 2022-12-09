import React from "react";
import { useSelector } from "react-redux";
import HomeCard from "./HomeCard";

const MiddleSideHome = () => {
  const blogs = useSelector((state) => state.blog.blogs);
  if (!blogs.length) {
    return (
      <div className="lg:w-[60vw] h-[80vh] flex justify-center items-center">
        <progress className="progress w-56 xm-auto"></progress>
      </div>
    );
  }
  console.log(blogs);
  return (
    <div className="col-span-3 ">
      <div className="flex text-black mb-3">
        <h1 className="ml-2 text-xl mr-8">Latest</h1>
        <h1 className="ml-2 text-xl">First Upload</h1>
      </div>
      <div className="">
        {blogs.length ? (
          blogs.map((blog, index) => <HomeCard key={index} blog={blog} />)
        ) : (
          <p className="text-red-500 text-3xl font-bold text-center">
            No Blogs to show!
          </p>
        )}
      </div>
    </div>
  );
};

export default MiddleSideHome;
