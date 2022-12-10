import {
  ALL_TAGS,
  RESET_FILTER,
  SORT_BY_DATE,
} from "../actionTypes/actionTypes";

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
export const sortByDate = (data, time) => {
  return {
    type: SORT_BY_DATE,
    payload: { data, time },
  };
};
