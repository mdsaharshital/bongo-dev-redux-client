import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ReadHistory = () => {
  const reading = useSelector((state) => state.blog.readingBlogs);
  const readingDone = useSelector((state) => state.blog.completeReadBlogs);
  console.log("rr", reading);
  console.log("dd", readingDone);
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-5 grid-cols-1 justify-items-stretch lg:px-[14vw] md:px-[7vw]  mt-8 gap-4">
      <div className=" col-span-3 mr-4 md:mr-0 p-3">
        <h1 className="text-black text-xl font-bold md:text-2xl">
          Continue Reading
        </h1>
        <hr className=" border border-slate-400 my-2" />
        {reading.length ? (
          reading.map((blog, index) => (
            <Link to={`/blog/${blog._id}`} key={index}>
              <div className="my-8 shadow-md p-4 rounded-md">
                <p className="text-black text-xl my-2 font-semibold">
                  {index + 1}. {blog.title}
                </p>
                <p className="text-sm text-slate-600">
                  {blog.description.slice(0, 160)}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <p>Nothing left to read</p>
        )}
      </div>
      <div className="col-span-2 p-3">
        <h1 className="text-black text-xl font-bold md:text-2xl">
          Already Read
        </h1>
        <hr className=" border border-slate-400 my-2" />
      </div>
    </div>
  );
};

export default ReadHistory;
