import React from "react";
import { RiBookmarkLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { completeReading, removeReading } from "../../redux/actions/blogAction";

const ReadHistory = () => {
  const dispatch = useDispatch();
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
            <div className="my-8 shadow-md p-4 rounded-md relative" key={index}>
              <Link to={`/BlogDetail/${blog._id}`}>
                <p className="text-black text-xl mt-4 mb-2 font-semibold">
                  {index + 1}. {blog.title}
                </p>
              </Link>
              <p className="text-sm text-slate-600">
                {blog.description.length > 160
                  ? blog.description?.slice(0, 160)
                  : blog.description}
              </p>
              <span
                className="tooltip text-black cursor-pointer block absolute top-4 right-4"
                data-tip={"Mark as Read"}
              >
                <RiBookmarkLine
                  onClick={() => {
                    dispatch(removeReading(blog));
                    dispatch(completeReading(blog));
                  }}
                  fontSize={"20px"}
                />
              </span>
            </div>
          ))
        ) : (
          <p>Nothing left to read</p>
        )}
      </div>
      <div className="col-span-2 p-3">
        <h1 className="text-black text-xl font-bold md:text-2xl">
          Already Read Content
        </h1>
        <hr className=" border border-slate-400 my-2" />
        {readingDone.length ? (
          readingDone.map((blog, index) => (
            <Link to={`/BlogDetail/${blog._id}`} key={index}>
              <div className="my-8 shadow-md p-4 rounded-md">
                <p className="text-black text-xl my-2 font-semibold">
                  {index + 1}.{" "}
                  {blog?.title.length > 40
                    ? blog?.title?.slice(0, 40)
                    : blog?.title}
                </p>
                <p className="text-sm text-slate-600">
                  {blog.description.length > 100
                    ? blog.description?.slice(0, 100)
                    : blog.description}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <p>0 Read</p>
        )}
      </div>
    </div>
  );
};

export default ReadHistory;
