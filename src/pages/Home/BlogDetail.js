import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { RiBookmarkLine } from "react-icons/ri";

const BlogDetail = () => {
  const { id } = useParams("id");
  const arrayOfBlog = useSelector((state) =>
    state.blog.blogs.filter((blog) => blog._id === id)
  );
  const blog = arrayOfBlog[0];

  console.log(blog);
  return (
    <div>
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
              <p className="text-xs">
                {blog?.author ? blog?.author : "Anonymous"}
              </p>
              <p className="text-xs">{blog?.publishedAt?.slice(0, 10)}</p>
            </div>
          </div>
          <h2
            className="card-title text-[22px]  md:text-2xl lg:text-3xl font-bold ml-11 tooltip text-start"
            data-tip={blog?.title}
          >
            <Link to={`/BlogDetail/${blog?._id}`}>{blog?.title}</Link>
          </h2>
          <span className="flex items-center cursor-pointer">
            <p className="ml-11 mt-1 cursor-pointer ">
              #graphql #webdev #beginners #tutorial
            </p>
            <h1 className="mr-1">8m read</h1>
            <RiBookmarkLine fontSize={"20px"} />
          </span>
          <div className="card-actions justify-between items-center ml-11 mt-3">
            <div className="">
              <h1 className="first-letter:text-4xl">{blog?.content}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
