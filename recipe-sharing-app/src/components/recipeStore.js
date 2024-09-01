// src/recipeStore.js
import create from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [], // Store user's favorite recipe IDs
  recommendations: [], // Store recommended recipes

  // Action to set or update the recipes list
  setRecipes: (recipes) => set({ recipes }),

  // Action to add a recipe to favorites
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),

  // Action to remove a recipe from favorites
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Action to generate recommendations
  generateRecommendations: () =>
    set((state) => {
      // Mock implementation: recommend recipes based on favorites
      const recommended = state.recipes.filter(
        (recipe) => state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),

  // Action to add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
      // Generate recommendations when a new recipe is added
      recommendations: state.favorites.includes(newRecipe.id)
        ? state.recipes.filter(
            (recipe) =>
              state.favorites.includes(recipe.id) && Math.random() > 0.5
          )
        : state.recommendations,
    })),

  // Action to update a recipe
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
      recommendations: state.recommendations,
    })),

  // Action to delete a recipe
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
      filteredRecipes: state.recipes
        .filter((recipe) => recipe.id !== id)
        .filter((recipe) =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      // Remove from favorites if deleted
      favorites: state.favorites.filter((favoriteId) => favoriteId !== id),
      recommendations: state.recommendations.filter(
        (recipe) => recipe.id !== id
      ),
    })),

  // State for search term and filtering
  searchTerm: "",
  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: [],
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),
}));

export { useRecipeStore };
