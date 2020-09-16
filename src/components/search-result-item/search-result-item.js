import classes from "./search-result-item.module.scss";
import React from "react";

const SearchResultItem = ({ publisher, title, image }) => {
  return (
    <div className={classes.Result}>
      <div className={classes.ResultLink}>
        <figure className={classes.ResultFig}>
          <img src={image} alt={title} />
        </figure>
        <div className={classes.ResultData}>
          <h4 className={classes.ResultName}>{title}</h4>
          <p className={classes.ResultAuthor}>{publisher}</p>
        </div>
      </div>
    </div>
  );
};

export default SearchResultItem;
