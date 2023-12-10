import React from "react";
import Result from "./components/Result";
import Button from "./components/Button";
import Header from "./components/Header";
import { useState } from "react";
import classes from "./modules/App.module.scss";

const App = () => {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    setInput((prevInputValue) => prevInputValue + value);
  };

  const handleDelete = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const handleEqual = () => {
    setInput(eval(input).toString());
  };

  const handleClear = () => {
    setInput("");
  };

  const themes = {
    theme1: "5px",
    theme2: "calc(50% - 5px)",
    theme3: "calc(100% - 10px)",
  };

  const [theme, setTheme] = useState("theme1");

  const changeTheme = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  return (
    <div
      className={
        theme === "theme1" ? classes["parent-container"] :
        theme === "theme2" ? classes["theme-2-body"] :
        theme === "theme3" ? classes["theme-3-body"] : ''
      }
    >
      <Header themes={themes} changeTheme={changeTheme} theme={theme} />
      <Result input={input} theme={theme}/>
      <Button
        handleButtonClick={handleButtonClick}
        handleEqual={handleEqual}
        handleClear={handleClear}
        handleDelete={handleDelete}
        theme={theme}
      />
    </div>
  );
};

export default App;
