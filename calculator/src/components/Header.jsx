import React, { useState } from "react";
import classes from '../modules/Header.module.scss'

const Header = ({changeTheme, theme, themes}) => {
 

  return (
    <header>
      <h1 className={classes['logo']}>calc</h1>
      <section className={classes['theme-container']}>
        <div className={classes['theme-labels']}>
          <p onClick={() => changeTheme("theme1")}>1</p>
          <p onClick={() => changeTheme("theme2")}>2</p>
          <p onClick={() => changeTheme("theme3")}>3</p>
        </div>
        <div className={classes['slider']}>
          <div id={classes['switch-btn']} style={{ left: themes[theme] }} />
        </div>
        <div className={classes['theme-title']}>THEME</div>
      </section>
    </header>
  );
};

export default Header;