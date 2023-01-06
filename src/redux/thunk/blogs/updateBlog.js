import { updateABlog } from "../../actions/blogAction";

const updateBlog = (blog, id) => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:5000/blog`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ blog, id }),
    });
    const data = await res.json();
    if (data.acknowledged) {
      dispatch(updateABlog(blog));
    }
  };
};

export default updateBlog;
