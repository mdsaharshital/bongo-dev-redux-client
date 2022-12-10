import React from "react";
import { useDispatch } from "react-redux";
import { sortByTags } from "../redux/actions/filterAction";

const TagsBar = () => {
  const dispatch = useDispatch();
  return (
    <div className="relative">
      <div className="mx-auto divider">Tags</div>
      <ul>
        <li onClick={() => dispatch(sortByTags("politics"))}>
          <span>#politics</span>
        </li>
        <li onClick={() => dispatch(sortByTags("starNews"))}>
          <span>#starNews</span>
        </li>
        <li onClick={() => dispatch(sortByTags("sports"))}>
          <span>#sports</span>
        </li>
        <li onClick={() => dispatch(sortByTags("crime"))}>
          <span>#crime</span>
        </li>
        <li onClick={() => dispatch(sortByTags("other"))}>
          <span>#other</span>
        </li>
      </ul>
    </div>
  );
};

export default TagsBar;
