import React from "react";
import { useSelector } from "react-redux";
import HomeCard from "./HomeCard";

const MiddleSideHome = () => {
  const blogs = useSelector((state) => state.blog.blogs);
  const sortByTag = useSelector((state) => state.filter.sortByTags);
  console.log("fil", sortByTag);
  let content;
  if (blogs.length) {
    content = blogs.map((blog, index) => <HomeCard key={index} blog={blog} />);
  }

  if (blogs.length && sortByTag) {
    content = blogs
      .filter((blog) => {
        if (sortByTag.length) {
          return sortByTag.includes(blog.topic);
        } else {
          return blog;
        }
      })
      .map((blog, index) => <HomeCard key={index} blog={blog} />);
  }
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
      <div className="">{content}</div>
    </div>
  );
};

export default MiddleSideHome;
