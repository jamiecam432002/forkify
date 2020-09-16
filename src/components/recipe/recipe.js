import classes from "./recipe.module.scss";
import { connect } from "react-redux";
import React from "react";

const Recipe = ({ recipe }) => {
  let recipeHtml = (
    <div className={classes.NoRecipe}>
      <h2>Nothing Cooking?</h2>
      <h3>
        Use the search terms: broccoli, carrot, pumpkin, potato, chili, steak,
        hamburger OR chicken to test the API.
      </h3>
    </div>
  );
  if (recipe) {
    recipeHtml = (
      <div className={classes.Recipe}>
        <figure className={classes.RecipeFig}>
          <img
            alt={recipe.title}
            className={classes.RecipeImg}
            src={recipe.url}
          />
        </figure>
      </div>
    );
  }
  return <div className={classes.Recipe}>{recipeHtml}</div>;
};

const mapStateToProps = (state) => {
  return {
    recipe: state.recipe.activeRecipe,
  };
};

export default connect(mapStateToProps)(Recipe);
