import classes from "./header.module.scss";
import React from "react";

import Search from "../search/search";
import Likes from "../likes/likes";

const Header = () => (
  <div className={classes.Header}>
    <div className={classes.Logo}>
      <img alt="logo" src="/images/logo.png" />
    </div>
    <div className={classes.Search}>
      <Search />
    </div>
    <div className={classes.Likes}>
      <Likes />
    </div>
  </div>
);

export default Header;
