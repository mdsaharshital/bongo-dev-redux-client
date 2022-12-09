import { LOAD_BLOGS, READING_BLOGS } from "../actionTypes/actionTypes";

export const loadBlogs = (blogs) => {
  return {
    type: LOAD_BLOGS,
    payload: blogs,
  };
};
export const readingBlogs = (blog) => {
  return {
    type: READING_BLOGS,
    payload: blog,
  };
};
