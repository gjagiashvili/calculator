import React from "react";
import classes from "../modules/result.module.scss";

const Result = ({ input, theme }) => {
  return (
    <>
      <div
        className={
          theme === "theme1"
            ? classes["result-div"]
            : theme === "theme2"
            ? classes["theme-2-result-div"]
            : theme === "theme3"
            ? classes["theme-3-result-div"]
            : ""
        }
      >
        <h1>{input ? input : "0"}</h1>
      </div>
    </>
  );
};

export default Result;
