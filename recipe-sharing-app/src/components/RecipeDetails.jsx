// src/components/RecipeDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { useRecipeStore } from "../recipeStore";

const RecipeDetails = () => {
  const { id } = useParams();
  const { recipes, addFavorite, removeFavorite, favorites } = useRecipeStore(
    (state) => ({
      recipes: state.recipes,
      addFavorite: state.addFavorite,
      removeFavorite: state.removeFavorite,
      favorites: state.favorites,
    })
  );

  const recipe = recipes.find((r) => r.id === parseInt(id));
  const isFavorite = favorites.includes(recipe.id);

  return (
    <div>
      {recipe ? (
        <>
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
          <button
            onClick={() =>
              isFavorite ? removeFavorite(recipe.id) : addFavorite(recipe.id)
            }
          >
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </>
      ) : (
        <p>Recipe not found</p>
      )}
    </div>
  );
};

export default RecipeDetails;
