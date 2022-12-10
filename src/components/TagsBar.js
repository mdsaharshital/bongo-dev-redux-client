import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortByTags } from "../redux/actions/filterAction";

const TagsBar = () => {
  const dispatch = useDispatch();
  const sortByTag = useSelector((state) => state.filter.sortByTags);
  return (
    <div className="relative">
      <div className="mx-auto divider">Tags</div>
      <ul className="">
        <li className="my-0.5" onClick={() => dispatch(sortByTags("politics"))}>
          <span
            className={
              sortByTag.includes("politics")
                ? `text-blue-500`
                : "text-slate-600"
            }
          >
            #politics
          </span>
        </li>
        <li className="my-0.5" onClick={() => dispatch(sortByTags("starNews"))}>
          <span
            className={
              sortByTag.includes("starNews")
                ? `text-green-500 `
                : "text-slate-600"
            }
          >
            #starNews
          </span>
        </li>
        <li className="my-0.5" onClick={() => dispatch(sortByTags("sports"))}>
          <span
            className={
              sortByTag.includes("sports")
                ? `text-yellow-500 `
                : "text-slate-600"
            }
          >
            #sports
          </span>
        </li>
        <li className="my-0.5" onClick={() => dispatch(sortByTags("crime"))}>
          <span
            className={
              sortByTag.includes("crime")
                ? `text-purple-500 `
                : "text-slate-600"
            }
          >
            #crime
          </span>
        </li>
        <li className="my-0.5" onClick={() => dispatch(sortByTags("other"))}>
          <span
            className={
              sortByTag.includes("other")
                ? `text-orange-400 `
                : "text-slate-600"
            }
          >
            #other
          </span>
        </li>
      </ul>
    </div>
  );
};

export default TagsBar;
