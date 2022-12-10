import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import postBlogsThunk from "../../redux/thunk/blogs/postBlogs";

const AddBlog = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const submit = (data) => {
    const blog = {
      source: { id: data.source, name: data.source },
      topic: data.topic,
      author: data.author,
      title: data.title,
      content: data.content,
      description: data.description,
      image: data.image,
      publishedAt: data.published,
    };
    console.log(blog);

    dispatch(postBlogsThunk(blog));
    // reset();
  };

  return (
    <div className="flex justify-center items-center h-full ">
      <form
        className="shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white text-black"
        onSubmit={handleSubmit(submit)}
      >
        <div className="flex flex-col w-full max-w-xs ">
          <label className="mb-2" htmlFor="source">
            Source
          </label>
          <input
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs bg-blue-300 text-white"
            type="text"
            id="source"
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
                className="input input-bordered w-full max-w-xs bg-blue-300 text-white"
                type="text"
                id="stockOut"
                name="author"
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
            {...register("topic")}
          >
            <option value="politics">politics</option>
            <option value="starTalk">starTalk</option>
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
            className="input input-bordered w-full max-w-xs bg-blue-300 text-white"
            type="text"
            name="title"
            id="title"
            {...register("title")}
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="image">
            Image Link
          </label>
          <input
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs bg-blue-300 text-white"
            type="text"
            name="image"
            id="image"
            {...register("image")}
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="content">
            Content
          </label>
          <input
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs bg-blue-300 text-white"
            type="text"
            name="content"
            id="content"
            {...register("content")}
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="published">
            Published at
          </label>
          <input
            type="datetime-local"
            name="published"
            id="published"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs bg-blue-300 text-white"
            {...register("published")}
          ></input>
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            className="textarea textarea-bordered w-full max-w-xs bg-blue-300 text-white"
            {...register("description")}
          ></textarea>
        </div>
        <div className="flex justify-between items-center w-full">
          <button
            className=" px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
