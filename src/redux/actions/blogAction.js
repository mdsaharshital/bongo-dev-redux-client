import {
  COMPLETED_BLOGS,
  DELETE_BLOG,
  LOAD_BLOGS,
  POST_BLOGS,
  READING_BLOGS,
  REMOVE_FROM_READ,
  UPDATE_BLOG,
} from "../actionTypes/actionTypes";

export const loadBlogs = (blogs) => {
  return {
    type: LOAD_BLOGS,
    payload: blogs,
  };
};
export const postBlogs = (data) => {
  return {
    type: POST_BLOGS,
    payload: data,
  };
};
export const deleteBlog = (id) => {
  return {
    type: DELETE_BLOG,
    payload: id,
  };
};
export const updateABlog = (blog) => {
  return {
    type: UPDATE_BLOG,
    payload: blog,
  };
};
export const addReadingBlogs = (blog) => {
  return {
    type: READING_BLOGS,
    payload: blog,
  };
};
export const removeReading = (blog) => {
  return {
    type: REMOVE_FROM_READ,
    payload: blog,
  };
};
export const completeReading = (blog) => {
  return {
    type: COMPLETED_BLOGS,
    payload: blog,
  };
};
