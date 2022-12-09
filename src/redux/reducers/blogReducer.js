import { LOAD_BLOGS, READING_BLOGS } from "../actionTypes/actionTypes";

const initialState = {
  blogs: [],
  readingBlogs: [],
  completeReadBlogs: [],
};

export const blogReducer = (state = initialState, action) => {
  const newRead = state.readingBlogs.find(
    (blog) => blog._id === action.payload._id
  );
  console.log(newRead);
  switch (action.type) {
    case LOAD_BLOGS:
      return {
        ...state,
        blogs: action.payload,
      };
    case READING_BLOGS:
      if (newRead) {
        return {
          ...state,
          readingBlogs: [...state.readingBlogs],
        };
      }
      return {
        ...state,
        readingBlogs: [...state.readingBlogs, action.payload],
      };

    default:
      return state;
  }
};
