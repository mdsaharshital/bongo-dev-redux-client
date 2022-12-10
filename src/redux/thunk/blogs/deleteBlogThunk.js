import { deleteBlog, loadBlogs } from "../../actions/blogAction";

const deleteBlogThunk = (id) => {
  return async (dispatch) => {
    const res = await fetch(
      `https://bongo-dev-redux-server-production.up.railway.app/blog/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    if (data.acknowledged) {
      dispatch(deleteBlog(id));
    }
  };
};

export default deleteBlogThunk;
