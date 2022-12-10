import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RiBookmarkLine } from "react-icons/ri";
import { IoIosDoneAll } from "react-icons/io";
import profilePic from "../../asstes/user-profile-icon.webp";
import { completeReading, removeReading } from "../../redux/actions/blogAction";

const BlogDetail = () => {
  const dispatch = useDispatch();
  const [isMarked, setIsMarked] = useState(false);
  const { id } = useParams("id");
  const blog = useSelector((state) =>
    state.blog.blogs.filter((blog) => blog._id === id)
  )[0];
  return (
    <div className="lg:px-[14vw]  mt-8 px-4">
      <div className="card custom_card text-black rounded-lg shadow-sm">
        <div className="card-body">
          <div className="flex items-center relative mb-3">
            <div className="w-8">
              <div className="avatar online">
                <div className="w-full rounded-full">
                  <img src={profilePic} alt="" />
                </div>
              </div>
            </div>
            <div className="ml-2 absolute left-9 top-[0px]">
              <p className="text-xs">
                {blog?.author ? blog?.author : "Anonymous"}
              </p>
              <p className="text-xs">{blog?.publishedAt?.slice(0, 10)}</p>
            </div>
          </div>
          <h2 className="card-title text-[22px] md:text-2xl lg:text-3xl font-bold md:ml-11 text-start">
            {blog?.title}
          </h2>
          <span className="flex items-center cursor-pointer">
            <p className="md:ml-11 mt-1 cursor-pointer ">
              #graphql #webdev #beginners #tutorial
            </p>
            <span className="flex items-center cursor-pointer">
              {isMarked ? (
                <h1 className="text-sm bg-green-500 text-gray-900 px-2 font-bold flex items-center">
                  Read <IoIosDoneAll fontSize={"20px"} />
                </h1>
              ) : (
                <span className="tooltip" data-tip={"Mark as Read"}>
                  <RiBookmarkLine
                    onClick={() => {
                      setIsMarked(!isMarked);
                      dispatch(removeReading(blog));
                      dispatch(completeReading(blog));
                    }}
                    fontSize={"20px"}
                  />
                </span>
              )}
            </span>
          </span>
          <hr />
          <div className="card-actions justify-between items-center md:ml-11 mt-3">
            <div className="">
              <figure className="my-3 mb-6">
                <img src={blog?.urlToImage} alt="Shoes" />
              </figure>
              <h1 className="first-letter:text-4xl tracking-wider leading-relaxed">
                {blog?.content}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
