import { postBlogs } from "../../actions/blogAction";

const postBlogsThunk = (blog) => {
  return async (dispatch) => {
    const res = await fetch("https://bongo-dev-redux-server.vercel.app/blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    });
    const data = await res.json();
    if (data.acknowledged) {
      dispatch(postBlogs(blog));
    }
  };
};
export default postBlogsThunk;
