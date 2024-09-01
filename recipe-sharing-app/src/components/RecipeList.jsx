// src/components/RecipeList.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecipeStore } from "../recipeStore";

const RecipeList = () => {
  const {
    filteredRecipes,
    filterRecipes,
    searchTerm,
    addFavorite,
    removeFavorite,
    favorites,
  } = useRecipeStore((state) => ({
    filteredRecipes: state.filteredRecipes,
    filterRecipes: state.filterRecipes,
    searchTerm: state.searchTerm,
    addFavorite: state.addFavorite,
    removeFavorite: state.removeFavorite,
    favorites: state.favorites,
  }));

  useEffect(() => {
    filterRecipes();
  }, [searchTerm, filterRecipes]);

  return (
    <div>
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>
              <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
            <button
              onClick={() =>
                favorites.includes(recipe.id)
                  ? removeFavorite(recipe.id)
                  : addFavorite(recipe.id)
              }
            >
              {favorites.includes(recipe.id)
                ? "Remove from Favorites"
                : "Add to Favorites"}
            </button>
          </div>
        ))
      ) : (
        <p>No recipes found</p>
      )}
    </div>
  );
};

export default RecipeList;
