import { loadBlogs } from "../../actions/blogAction";

const fetchBlogs = () => {
  return async (dispatch) => {
    const res = await fetch("https://bongo-dev-redux-server.vercel.app/blogs");
    const data = await res.json();
    if (data.data.length) {
      dispatch(loadBlogs(data.data));
    }
  };
};
export default fetchBlogs;
