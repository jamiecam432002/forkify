import * as actionTypes from "./recipe.types";

const initialState = {
  recipes: [],
  activeRecipe: null,
  searchQuery: "",
  isFetching: false,
  errorMessage: "",
  loading: false,
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_RECIPES_START:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.FETCH_RECIPES_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case actionTypes.FETCH_RECIPES_SUCCESS:
      return {
        ...state,
        recipes: action.recipes,
        isFetching: false,
      };
    case actionTypes.FETCH_RECIPE_SUCCESS:
      return {
        ...state,
        recipe: action.recipe,
        isFetching: false,
      };
    case actionTypes.FETCH_RECIPE_START:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.FETCH_RECIPE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case actionTypes.UPDATE_QUERY:
      return {
        ...state,
        searchQuery: action.query,
      };
    default:
      return state;
  }
};

export default recipeReducer;
