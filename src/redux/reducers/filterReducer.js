import { ALL_TAGS, RESET_FILTER } from "../actionTypes/actionTypes";

const initialState = {
  sortByTime: [],
  sortByTags: [],
};
export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_TAGS:
      if (!state.sortByTags.includes(action.payload)) {
        return {
          ...state,
          sortByTags: [...state.sortByTags, action.payload],
        };
      } else {
        return {
          ...state,
          sortByTags: state.sortByTags.filter((tag) => tag !== action.payload),
        };
      }
    case RESET_FILTER:
      return {
        sortByTime: [],
        sortByTags: [],
      };
    default:
      return state;
  }
};
