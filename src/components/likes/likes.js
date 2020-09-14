import React from "react";
import classes from "./likes.module.scss";
import { ReactComponent as LikeIcon } from "../../assets/images/heart.svg";

const Likes = () => {
  return (
    <div className={classes.Likes}>
      <LikeIcon className={classes.Logo} />
    </div>
  );
};

export default Likes;
