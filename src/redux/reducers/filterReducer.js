import {
  ALL_TAGS,
  RESET_FILTER,
  SORT_BY_DATE,
} from "../actionTypes/actionTypes";

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
    //
    case SORT_BY_DATE:
      if (action.payload.time === "new") {
        return {
          ...state,
          sortByTime: [
            ...action.payload.data.sort(function (a, b) {
              return new Date(b.publishedAt) - new Date(a.publishedAt);
            }),
          ],
        };
      } else if (action.payload.time === "old") {
        return {
          ...state,
          sortByTime: action.payload.data.sort(function (a, b) {
            return new Date(a.publishedAt) - new Date(b.publishedAt);
          }),
        };
      }
      return {
        ...state,
        sortByTime: [],
      };
    default:
      return state;
  }
};
