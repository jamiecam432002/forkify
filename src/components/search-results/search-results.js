import classes from "./search-results.module.scss";
import React from "react";
import SearchResultsList from "../search-results-list/search-results-list";
import { connect } from "react-redux";

class SearchResults extends React.Component {
  render() {
    return (
      <div className={classes.SearchResults}>
        <h2>Search Results</h2>
        <SearchResultsList
          results={this.props.recipes}
          loading={this.props.loading}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipe.recipes,
    loading: state.recipe.loading,
  };
};

export default connect(mapStateToProps)(SearchResults);
