import React, { useState } from "react";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { BiMessageRounded } from "react-icons/bi";
import { RiBookmarkLine } from "react-icons/ri";

const HomeCard = ({ blog }) => {
  const [isLoved, setIsLoved] = useState(false);

  return (
    <div className="card custom_card text-black rounded-lg shadow-sm">
      <div className="card-body">
        <div className="flex items-center relative mb-3">
          <div className="w-8">
            <div className="avatar online">
              <div className="w-full rounded-full">
                <img src="https://placeimg.com/192/192/people" alt="" />
              </div>
            </div>
          </div>
          <div className="ml-2 absolute left-9 top-[0px]">
            <p className="text-xs">{blog.author}</p>
            <p className="text-xs">5 dec</p>
          </div>
        </div>
        <h2
          className="card-title text-[22px]  md:text-2xl lg:text-3xl font-bold ml-11 tooltip"
          data-tip={blog.title}
        >
          {blog.title.slice(0, 34)}...
        </h2>
        <p className="ml-11 mt-4 cursor-pointer">
          #graphql #webdev #beginners #tutorial
        </p>
        <div className="card-actions justify-between items-center ml-11 mt-3">
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
          <div className="">
            <span className="flex items-center cursor-pointer">
              <h1 className="mr-1">8m read</h1>
              <RiBookmarkLine fontSize={"20px"} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
