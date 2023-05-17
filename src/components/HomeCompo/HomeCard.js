import React, { useState } from "react";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { BiMessageRounded } from "react-icons/bi";
import { Link } from "react-router-dom";
import profilePic from "../../asstes/user-profile-icon.webp";
import { useDispatch } from "react-redux";
import { addReadingBlogs } from "../../redux/actions/blogAction";

const HomeCard = ({ blog }) => {
  const dispatch = useDispatch();
  const [isLoved, setIsLoved] = useState(false);
  return (
    <div className="card custom_card text-black rounded-lg shadow-sm my-2">
      <div className="card-body">
        <div className="flex items-center relative mb-3">
          <div className="w-8">
            <div className="avatar online">
              <div className="w-full rounded-full">
                <img src={profilePic} alt="profile" />
              </div>
            </div>
          </div>
          <div className="ml-2 absolute left-9 top-[0px]">
            <p className="text-xs">{blog.author ? blog.author : "Anonymous"}</p>
            <p className="text-xs">
              {blog.publishedAt.length > 10
                ? blog.publishedAt.slice(0, 10)
                : blog.publishedAt}
            </p>
          </div>
        </div>
        <div className="image-full">
          <div className="md:flex">
            <figure className="my-3 mb-6 lg:w-96">
              <img src={blog?.urlToImage} alt="Shoes" />
            </figure>
            <h2
              className="card-title text-[18px] text-start  md:text-[20px] lg:text-xl font-bold md:ml-11 tooltip "
              data-tip={blog.title}
            >
              <Link
                onClick={() => dispatch(addReadingBlogs(blog))}
                to={`/BlogDetail/${blog._id}`}
                className="hover:text-blue-500"
              >
                <h1>
                  {blog?.title.length > 55
                    ? blog?.title?.slice(0, 55)
                    : blog?.title}
                  ...
                </h1>
                <p className="text-[14px] text-gray-400">
                  {blog?.content?.slice(0, 66)}...
                </p>
              </Link>
            </h2>
          </div>
          <div className="card-actions justify-start items-center md:ml-11 mt-3 sm:flex-row">
            <p className="text-sm font-semibold">
              <span className="bg-green-300 px-2 py-0.5 rounded-full">
                #{blog?.topic}
              </span>
            </p>
            <div className="flex items-center">
              <span className="flex items-center ">
                {isLoved ? (
                  <HiHeart
                    fontSize={"24px"}
                    className="text-red-500 cursor-pointer"
                    onClick={() => setIsLoved(!isLoved)}
                  />
                ) : (
                  <HiOutlineHeart
                    fontSize={"24px"}
                    className="cursor-pointer"
                    onClick={() => setIsLoved(!isLoved)}
                  />
                )}
                <p className="ml-2">67</p>
              </span>
              <span className="flex items-center cursor-pointer ml-4 md:ml-6 lg:ml-8 xl:ml-12">
                <BiMessageRounded fontSize={"24px"} />
                <p className="ml-2">11 comments</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
