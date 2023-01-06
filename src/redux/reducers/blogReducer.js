import {
  COMPLETED_BLOGS,
  DELETE_BLOG,
  LOAD_BLOGS,
  READING_BLOGS,
  REMOVE_FROM_READ,
  POST_BLOGS,
  UPDATE_BLOG,
} from "../actionTypes/actionTypes";

const initialState = {
  blogs: [],
  readingBlogs: [],
  completeReadBlogs: [],
};

export const blogReducer = (state = initialState, action) => {
  const addedRead = state.readingBlogs.find(
    (blog) => blog._id === action.payload._id
  );

  const addCompleteRead = state.completeReadBlogs.find(
    (blog) => blog._id === action.payload._id
  );

  switch (action.type) {
    case LOAD_BLOGS:
      return {
        ...state,
        blogs: action.payload,
      };
    case POST_BLOGS:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };
    case DELETE_BLOG:
      return {
        ...state,
        blogs: state.blogs.filter((blog) => blog._id !== action.payload),
      };
    case UPDATE_BLOG:
      return {
        ...state,
        blogs: [
          ...state.blogs.filter((blog) => blog._id !== action.payload._id),
          action.payload,
        ],
      };
    case READING_BLOGS:
      if (addedRead) {
        return {
          ...state,
          readingBlogs: [...state.readingBlogs],
        };
      }
      return {
        ...state,
        readingBlogs: [...state.readingBlogs, action.payload],
      };
    case REMOVE_FROM_READ:
      const reamovedRead = state.readingBlogs.filter(
        (read) => read._id !== action.payload._id
      );
      return {
        ...state,
        readingBlogs: [...reamovedRead],
      };
    //
    case COMPLETED_BLOGS:
      if (addCompleteRead) {
        return {
          ...state,
          completeReadBlogs: [...state.completeReadBlogs],
        };
      }
      return {
        ...state,
        completeReadBlogs: [...state.completeReadBlogs, action.payload],
      };
    default:
      return state;
  }
};
