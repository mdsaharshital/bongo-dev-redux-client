import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import updateBlog from "./../redux/thunk/blogs/updateBlog";

const UpdateBlogModa = ({ id }) => {
  const gotBlog = useSelector((state) =>
    state.blog?.blogs?.find((blog) => blog?._id === id)
  );
  const { register, handleSubmit, reset } = useForm({
    mode: "onBlur",
  });
  console.log("blog", gotBlog);
  const dispatch = useDispatch();
  const submit = (data) => {
    const blogNew = {
      ...data,
    };
    console.log(blogNew);

    dispatch(updateBlog(blogNew, gotBlog._id));
    // reset();
  };
  useEffect(() => {
    if (gotBlog) {
      reset(gotBlog);
    }
  }, [gotBlog, reset]);
  return (
    <>
      {/* The button to open modal */}
      {/* <label htmlFor="updateModalAction" className="btn">
        open modal
      </label> */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="updateModalAction" className="modal-toggle" />
      <div className="modal  modal-bottom sm:modal-middle">
        <div className="p-6 rounded-md bg-white text-black">
          <div className="flex justify-center items-center h-full ">
            <form
              className="p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white text-black"
              onSubmit={handleSubmit(submit)}
            >
              <div className="flex flex-col w-full max-w-xs ">
                <label className="mb-2" htmlFor="source">
                  Source
                </label>
                <input
                  placeholder="Type here"
                  required
                  className="input input-bordered w-full max-w-xs bg-blue-300 text-white"
                  type="text"
                  id="source"
                  // defaultValue={gotBlog?.source.id}
                  {...register("source")}
                />
              </div>

              <div className="flex flex-col w-full max-w-xs">
                <div className="flex flex-col w-full max-w-xs">
                  <label className="mb-2 text-lg" htmlFor="stockOut">
                    Author
                  </label>
                  <div>
                    <input
                      placeholder="Type here"
                      required
                      className="input input-bordered w-full max-w-xs bg-blue-300 text-white"
                      type="text"
                      id="stockOut"
                      name="author"
                      // defaultValue={gotBlog?.author}
                      {...register("author")}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-full max-w-xs">
                <label className="mb-3" htmlFor="topic">
                  Topic
                </label>
                <select
                  className="input input-bordered w-full max-w-xs bg-blue-300 text-white cursor-pointer"
                  name="topic"
                  id="topic"
                  // defaultValue={gotBlog?.topic}
                  {...register("topic")}
                >
                  <option value={gotBlog?.topic}>{gotBlog?.topic}</option>
                  <option value="politics">politics</option>
                  <option value="starNews">StarNews</option>
                  <option value="crime">crime</option>
                  <option value="sports">sports</option>
                  <option value="other">other</option>
                </select>
              </div>
              <div className="flex flex-col w-full max-w-xs">
                <label className="mb-2" htmlFor="title">
                  Title
                </label>
                <input
                  placeholder="Type here"
                  required
                  className="input input-bordered w-full max-w-xs bg-blue-300 text-white"
                  type="text"
                  name="title"
                  id="title"
                  // defaultValue={gotBlog?.title}
                  {...register("title")}
                />
              </div>
              <div className="flex flex-col w-full max-w-xs">
                <label className="mb-2" htmlFor="urlToImage">
                  Image Link
                </label>
                <input
                  placeholder="Type here"
                  required
                  className="input input-bordered w-full max-w-xs bg-blue-300 text-white"
                  type="text"
                  name="urlToImage"
                  id="urlToImage"
                  // defaultValue={gotBlog?.urlToImage}
                  {...register("urlToImage")}
                />
              </div>
              <div className="flex flex-col w-full max-w-xs">
                <label className="mb-2" htmlFor="content">
                  Content
                </label>
                <input
                  placeholder="Type here"
                  required
                  className="input input-bordered w-full max-w-xs bg-blue-300 text-white"
                  type="text"
                  name="content"
                  id="content"
                  // defaultValue={gotBlog?.content}
                  {...register("content")}
                />
              </div>
              <div className="flex flex-col w-full max-w-xs">
                <label className="mb-2" htmlFor="publishedAt">
                  published at
                </label>
                <input
                  type="datetime-local"
                  name="publishedAt"
                  id="publishedAt"
                  placeholder="Type here"
                  required
                  // defaultValue={gotBlog?.publishedAt}
                  className="input input-bordered w-full max-w-xs bg-blue-300 text-white"
                  {...register("publishedAt")}
                ></input>
              </div>
              <div className="flex flex-col w-full max-w-xs">
                <label className="mb-2" htmlFor="description">
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  // defaultValue={gotBlog?.description}
                  className="textarea textarea-bordered w-full max-w-xs bg-blue-300 text-white"
                  {...register("description")}
                ></textarea>
              </div>
              <div className="flex justify-between items-center w-full">
                <button type="submit">
                  <label
                    htmlFor="updateModalAction"
                    className="cursor-pointer px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500"
                  >
                    Submit
                  </label>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateBlogModa;
