import React from "react";
import classes from "./search.module.scss";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button";
import { ReactComponent as MagIcon } from "../../assets/images/glass.svg";
import {
  fetchRecipesStartAsync,
  updateQuery,
} from "../../store/recipes/recipe.actions";

class Search extends React.Component {
  onSearchSubmit(e) {
    e.preventDefault();
    console.log(this.props.searchQuery);

    this.props.onSearch(this.props.searchQuery);
  }

  render() {
    return (
      <div className={classes.SearchForm}>
        <form className={classes.Search}>
          <input
            id="searchQuery"
            className={classes.SearchInput}
            type="text"
            placeholder="Search for recipes..."
            value={this.props.searchQuery}
            onChange={(e) => this.props.onUpdateQuery(e.target.value)}
          />
          <CustomButton onClick={(event) => this.onSearchSubmit(event)}>
            <MagIcon />
            <span>Search</span>
          </CustomButton>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    searchQuery: state.recipe.searchQuery,
    recipes: state.recipe.recipes,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: (query) => dispatch(fetchRecipesStartAsync(query)),
    onUpdateQuery: (val) => dispatch(updateQuery(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
