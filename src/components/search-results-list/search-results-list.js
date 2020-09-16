import React from "react";
import { connect } from "react-redux";
import classes from "./search-results-list.module.scss";
import SearchResultItem from "../search-result-item/search-result-item";
import { fetchRecipeStartAsync } from "../../store/recipes/recipe.actions";
import Spinner from "../../components/spinner/spinner";

const SearchResultsList = (props) => {
  let searchRes = null;
  if (props.results.length !== 0) {
    console.log(props.results);
    searchRes = props.results.map((result) => (
      <SearchResultItem
        publisher={result.publisher}
        title={result.title}
        image={result.image_url}
        key={result.recipe_id}
        onClick={() => props.onResultClick()}
      />
    ));
  }
  return <div>{searchRes}</div>;
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onResultClick: (id) => dispatch(fetchRecipeStartAsync(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsList);
