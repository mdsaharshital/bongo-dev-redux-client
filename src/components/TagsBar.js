import React from "react";
import { useDispatch } from "react-redux";
import { sortByTags } from "../redux/actions/filterAction";

const TagsBar = () => {
  const dispatch = useDispatch();
  return (
    <div className="relative">
      <div className="mx-auto divider">Tags</div>
      <ul>
        <li onClick={() => dispatch(sortByTags("#webdevelopment"))}>
          <span>#webdevelopment</span>
        </li>
        <li onClick={() => dispatch(sortByTags("#career"))}>
          <span>#career</span>
        </li>
        <li onClick={() => dispatch(sortByTags("#technews"))}>
          <span>#technews</span>
        </li>
        <li onClick={() => dispatch(sortByTags("#joblisting"))}>
          <span>#joblisting</span>
        </li>
      </ul>
    </div>
  );
};

export default TagsBar;
