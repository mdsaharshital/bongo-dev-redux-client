import React from "react";

const AddBlogInputs = ({ register }) => {
  return (
    <>
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
        <label className="mb-2" htmlFor="urlToImage">
          Image Link
        </label>
        <input
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs bg-blue-300 text-white"
          type="text"
          name="urlToImage"
          id="urlToImage"
          {...register("urlToImage")}
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
        <label className="mb-2" htmlFor="publishedAt">
          Published at
        </label>
        <input
          type="datetime-local"
          name="publishedAt"
          id="publishedAt"
          placeholder="Type here"
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
          className="textarea textarea-bordered w-full max-w-xs bg-blue-300 text-white"
          {...register("description")}
        ></textarea>
      </div>
      <div className="flex justify-between items-center w-full">
        <input
          htmlFor="updateModalAction"
          className="cursor-pointer px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500"
          type="submit"
        />
      </div>
    </>
  );
};

export default AddBlogInputs;
