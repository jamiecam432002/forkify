import { combineReducers } from "redux";

import recipeReducer from "./recipes/recipe.reducer";

const rootReducer = combineReducers({
  recipe: recipeReducer,
});

export default rootReducer;
