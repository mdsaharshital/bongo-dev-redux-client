import React from "react";
import { useSelector } from "react-redux";
import HomeCard from "./HomeCard";

const MiddleSideHome = () => {
  const blogs = useSelector((state) => state.blog.blogs);
  console.log(blogs);
  return (
    <div className="col-span-3 ">
      <div className="flex text-black mb-3">
        <h1 className="ml-2 text-xl mr-8">Latest</h1>
        <h1 className="ml-2 text-xl">First Upload</h1>
      </div>
      <div className="">
        {blogs.map((blog, index) => (
          <HomeCard key={index} blog={blog} index={index} />
        ))}
      </div>
    </div>
  );
};

export default MiddleSideHome;
