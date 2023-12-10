import classes from "../modules/Button.module.scss";
import { useState } from "react";

const Button = ({
  handleButtonClick,
  handleClear,
  handleEqual,
  handleDelete,
  theme,
}) => {
  return (
    <div
      className={
        theme === "theme1"
          ? classes["container"]
          : theme === "theme2"
          ? classes["theme-2-container"]
          : theme === "theme3"
          ? classes["theme-3-container"]
          : ""
      }
    >
      <div className={classes["button-box"]}>
        <div className={classes["btn-section"]}>
          <button onClick={() => handleButtonClick("7")}>7</button>
          <button onClick={() => handleButtonClick("8")}>8</button>
          <button onClick={() => handleButtonClick("9")}>9</button>
          <button
            onClick={handleDelete}
            className={
              theme === "theme1"
                ? classes["delete-btn"]
                : theme === "theme2"
                ? classes["theme-2-delete-btn"]
                : theme === "theme3"
                ? classes["theme-3-delete-btn"]
                : ""
            }
          >
            DEL
          </button>
        </div>
        <div className={classes["btn-section"]}>
          <button onClick={() => handleButtonClick("4")}>4</button>
          <button onClick={() => handleButtonClick("5")}>5</button>
          <button onClick={() => handleButtonClick("6")}>6</button>
          <button onClick={() => handleButtonClick("+")}>+</button>
        </div>
        <div className={classes["btn-section"]}>
          <button onClick={() => handleButtonClick("1")}>1</button>
          <button onClick={() => handleButtonClick("2")}>2</button>
          <button onClick={() => handleButtonClick("3")}>3</button>
          <button onClick={() => handleButtonClick("-")}>-</button>
        </div>
        <div className={classes["btn-section"]}>
          <button onClick={() => handleButtonClick(".")}>.</button>
          <button onClick={() => handleButtonClick("0")}>0</button>
          <button onClick={() => handleButtonClick("/")}>/</button>
          <button onClick={() => handleButtonClick("*")}>X</button>
        </div>
      </div>
      <div className={classes["footer-buttons"]}>
        <button
          className={
            theme === "theme1"
              ? classes["reset"]
              : theme === "theme2"
              ? classes["theme-2-reset"]
              : theme === "theme3"
              ? classes["theme-3-reset"]
              : ""
          }
          onClick={handleClear}
        >
          RESET
        </button>
        <button
          className={
            theme === "theme1"
              ? classes["equal"]
              : theme === "theme2"
              ? classes["theme-2-equal"]
              : theme === "theme3"
              ? classes["theme-3-equal"]
              : ""
          }
          onClick={handleEqual}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Button;
