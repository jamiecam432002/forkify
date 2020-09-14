import React from "react";
import classes from "./search.module.scss";
import CustomButton from "../custom-button/custom-button";
import { ReactComponent as MagIcon } from "../../assets/images/glass.svg";

const Search = () => (
  <div className={classes.SearchForm}>
    <form className={classes.Search}>
      <input
        className={classes.SearchInput}
        type="text"
        placeholder="Search for recipes..."
      />
      <CustomButton>
        <MagIcon />
        <span>Search</span>
      </CustomButton>
    </form>
  </div>
);

export default Search;
