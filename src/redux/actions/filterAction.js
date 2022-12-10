import { ALL_TAGS } from "../actionTypes/actionTypes";

export const sortByTags = (data) => {
  return {
    type: ALL_TAGS,
    payload: data,
  };
};
