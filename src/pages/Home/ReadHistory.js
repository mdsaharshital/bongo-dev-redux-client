import React from "react";
import { useSelector } from "react-redux";

const ReadHistory = () => {
  const reading = useSelector((state) => state.blog.readingBlogs);
  const readingDone = useSelector((state) => state.blog.completeReadBlogs);
  console.log("rr", reading);
  console.log("dd", readingDone);
  return (
    <div>
      <h1>Read history</h1>
    </div>
  );
};

export default ReadHistory;
