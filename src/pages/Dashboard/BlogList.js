import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchBlogs from "../../redux/thunk/blogs/fetchBlog";
import { FaRegEdit } from "react-icons/fa";
import deleteBlogThunk from "../../redux/thunk/blogs/deleteBlogThunk";

const BlogList = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog.blogs);
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);
  if (!blogs.length) {
    return (
      <div className="lg:w-[60vw] h-[80vh] flex justify-center items-center">
        <progress className="progress w-56 xm-auto"></progress>
      </div>
    );
  }
  console.log("dash", blogs);
  return (
    <div class="flex flex-col justify-center items-center h-full w-full ">
      <div class="w-full max-w-7xl mx-auto rounded-lg  bg-white shadow-lg border border-gray-200">
        <header class="px-5 py-4 border-b border-gray-100">
          <div class="font-semibold text-gray-800">All Blogs</div>
        </header>

        <div class="overflow-x-auto p-3 my-4">
          <table class="table-auto w-full">
            <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
              <tr>
                <th></th>
                <th class="p-2">
                  <div class="font-semibold text-left">Blog Title</div>
                </th>
                <th class="p-2">
                  <div class="font-semibold text-left">Author</div>
                </th>
                <th class="p-2">
                  <div class="font-semibold text-left">published At</div>
                </th>
                <th class="p-2">
                  <div class="font-semibold text-left">Source</div>
                </th>
                <th class="p-2">
                  <div class="font-semibold text-center">Action</div>
                </th>
              </tr>
            </thead>

            <tbody class="text-sm divide-y divide-gray-100">
              {blogs.map(
                ({ title, author, source, publishedAt, _id }, index) => (
                  <tr>
                    <td class="p-2">
                      <div class="font-medium text-gray-800">{index + 1}</div>
                    </td>
                    <td class="p-2">
                      <div
                        class="font-medium text-gray-800 tooltip"
                        data-tip={title}
                      >
                        {title.length > 85 ? title?.slice(0, 85) : title}
                      </div>
                    </td>
                    <td class="p-2">
                      {author ? (
                        <div class="text-left capitalize">{author}</div>
                      ) : (
                        <div class="text-left capitalize">Anonymous</div>
                      )}
                    </td>
                    <td class="p-2">
                      <div class="text-left">
                        <p className="text-green-500 font-medium">
                          {publishedAt?.slice(0, 10)}
                        </p>
                      </div>
                    </td>
                    <td class="p-2">
                      <div class="text-left font-medium text-indigo-500">
                        {source.name}
                      </div>
                    </td>
                    <td class="p-2">
                      <div class="flex justify-center items-center">
                        <button
                          onClick={() => dispatch(deleteBlogThunk(_id))}
                          className="mr-2"
                        >
                          <svg
                            class="w-8 h-8 hover:text-red-600 rounded-full hover:bg-gray-100 p-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            ></path>
                          </svg>
                        </button>
                        <button className="w-8 h-8 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1">
                          <FaRegEdit fontSize={"24px"} />
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
