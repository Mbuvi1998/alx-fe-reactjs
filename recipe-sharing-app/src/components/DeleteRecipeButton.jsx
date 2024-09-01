// src/components/DeleteRecipeButton.jsx
// import React from 'react';
// import useRecipeStore from './recipeStore';

// const DeleteRecipeButton = ({ recipeId }) => {
//   const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

//   const handleClick = () => {
//     deleteRecipe(recipeId);
//   };

//   return (
//     <button onClick={handleClick}>Delete Recipe</button>
//   );
// };

// export default DeleteRecipeButton;
// src/components/DeleteRecipeButton.jsx
// import { useRecipeStore } from "./recipeStore";
// import { useNavigate } from "react-router-dom";

// const DeleteRecipeButton = ({ recipeId }) => {
//   const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
//   const navigate = useNavigate(); // useNavigate hook for redirecting

//   const handleDelete = () => {
//     deleteRecipe(recipeId);
//     navigate("/"); // Redirect to home after deletion
//   };

//   return <button onClick={handleDelete}>Delete Recipe</button>;
// };

// export default DeleteRecipeButton;
// src/components/DeleteRecipeButton.jsx
import { useRecipeStore } from "../store/recipeStore";
import { useNavigate } from "react-router-dom";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate(); // useNavigate hook for redirecting

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate("/"); // Redirect to home after deletion
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
