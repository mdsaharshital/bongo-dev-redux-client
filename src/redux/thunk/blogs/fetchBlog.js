import { loadBlogs } from "../../actions/blogAction";

const fetchBlogs = () => {
  return async (dispatch) => {
    const res = await fetch("blog.json");
    const data = await res.json();
    dispatch(loadBlogs(data));
  };
};
export default fetchBlogs;
