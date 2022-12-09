import {
  COMPLETED_BLOGS,
  LOAD_BLOGS,
  READING_BLOGS,
  REMOVE_FROM_READ,
} from "../actionTypes/actionTypes";

export const loadBlogs = (blogs) => {
  return {
    type: LOAD_BLOGS,
    payload: blogs,
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
