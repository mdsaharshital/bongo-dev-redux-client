import { ALL_TAGS, RESET_FILTER } from "../actionTypes/actionTypes";

export const sortByTags = (data) => {
  return {
    type: ALL_TAGS,
    payload: data,
  };
};
export const resetFilters = () => {
  return {
    type: RESET_FILTER,
  };
};
