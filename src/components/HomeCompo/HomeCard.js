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
            <p className="text-xs">{blog.publishedAt.slice(0, 10)}</p>
          </div>
        </div>
        <div className="image-full">
          <h2
            className="card-title text-[22px] text-start  md:text-2xl lg:text-3xl font-bold md:ml-11 tooltip "
            data-tip={blog.title}
          >
            <Link
              onClick={() => dispatch(addReadingBlogs(blog))}
              to={`/BlogDetail/${blog._id}`}
            >
              {blog.title.slice(0, 55)}...
            </Link>
          </h2>
          <figure className="my-3 mb-6">
            <img src={blog?.urlToImage} alt="Shoes" />
          </figure>
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
