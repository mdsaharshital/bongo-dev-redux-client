import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetFilters, sortByDate } from "../../redux/actions/filterAction";
import HomeCard from "./HomeCard";

const MiddleSideHome = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog.blogs);
  const sortByTag = useSelector((state) => state.filter.sortByTags);
  const sortByTime = useSelector((state) => state.filter.sortByTime);
  console.log("fil", sortByTime);
  let content;
  if (blogs.length) {
    content = blogs.map((blog, index) => <HomeCard key={index} blog={blog} />);
  }

  if (blogs.length && (sortByTag || sortByTime)) {
    content = blogs
      .filter((blog) => {
        if (sortByTime.length) {
          return { ...sortByTime };
        } else {
          return blog;
        }
      })
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
      <div className="flex text-black mb-3 justify-between px-4">
        <div className="flex">
          <h1
            className="ml-2 mr-8 cursor-pointer"
            onClick={() => dispatch(sortByDate(blogs, "new"))}
          >
            Latest
          </h1>
          <h1
            className="ml-2 cursor-pointer"
            onClick={() => dispatch(sortByDate(blogs, "old"))}
          >
            First Upload
          </h1>
        </div>
        <h1
          onClick={() => {
            dispatch(sortByDate(blogs, "new"));
            dispatch(resetFilters());
          }}
          className="btn btn-ghost btn-sm"
        >
          Reset
        </h1>
      </div>
      <div className="">{content}</div>
    </div>
  );
};

export default MiddleSideHome;
