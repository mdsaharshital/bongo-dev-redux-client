import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import AddBlogInputs from "../../components/DashboardComponent/AddBlogInputs";
import postBlogsThunk from "../../redux/thunk/blogs/postBlogs";

const AddBlog = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const submit = (data) => {
    const blog = {
      source: data.source,
      topic: data.topic,
      author: data.author,
      title: data.title,
      content: data.content,
      description: data.description,
      urlToImage: data.urlToImage,
      publishedAt: data.publishedAt,
    };
    console.log(blog);

    dispatch(postBlogsThunk(blog));
    reset();
    toast.success("Posted successfully");
  };

  return (
    <div className="flex justify-center items-center h-full ">
      <form
        className="shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white text-black"
        onSubmit={handleSubmit(submit)}
      >
        <AddBlogInputs register={register} />
      </form>
    </div>
  );
};

export default AddBlog;
