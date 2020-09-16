import * as actionTypes from "./recipe.types";
import axios from "axios";

export const fetchRecipesStart = () => {
  return {
    type: actionTypes.FETCH_RECIPES_START,
  };
};

export const fetchRecipesSuccess = (recipes) => {
  return {
    type: actionTypes.FETCH_RECIPES_SUCCESS,
    recipes: recipes,
  };
};

export const fetchRecipesFailure = (errorMessage) => {
  return {
    type: actionTypes.FETCH_RECIPES_FAILURE,
    payload: errorMessage,
  };
};

export const fetchRecipeStart = () => {
  return {
    type: actionTypes.FETCH_RECIPE_START,
  };
};

export const fetchRecipeSuccess = (recipe) => {
  return {
    type: actionTypes.FETCH_RECIPE_SUCCESS,
    recipe: recipe,
  };
};

export const fetchRecipeFailure = (errorMessage) => {
  return {
    type: actionTypes.FETCH_RECIPE_FAILURE,
    payload: errorMessage,
  };
};

export const fetchRecipesStartAsync = (query) => {
  return (dispatch) => {
    dispatch(fetchRecipesStart());
    axios
      .get(`http://forkify-api.herokuapp.com/api/search?q=${query}`)
      //.then((res) => res.json())
      .then((res) => {
        dispatch(fetchRecipesSuccess(res.data.recipes));
      })
      .catch((err) => dispatch(fetchRecipesFailure(err)));
  };
};

export const fetchRecipeStartAsync = (recipeId) => {
  console.log("starting fetch recipe async");
  return (dispatch) => {
    dispatch(fetchRecipeStart());
    axios
      .get(`https://forkify-api.herokuapp.com/api/get?rId=${recipeId}`)
      //.then((res) => res.json())
      .then((res) => {
        console.log(res);
        //dispatch(fetchRecipesSuccess(res.data.recipes));
      })
      .catch((err) => dispatch(fetchRecipesFailure(err)));
  };
};

export const updateQuery = (query) => {
  return {
    type: actionTypes.UPDATE_QUERY,
    query: query,
  };
};
