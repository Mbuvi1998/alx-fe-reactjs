// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// function RecipeDetail() {
//   const { id } = useParams();
//   const [recipe, setRecipe] = useState(null);

//   // Fetch recipe data from the JSON file based on ID
//   useEffect(() => {
//     fetch('/data.json')
//       .then((response) => response.json())
//       .then((data) => {
//         const selectedRecipe = data.find((recipe) => recipe.id === parseInt(id));
//         setRecipe(selectedRecipe);
//       })
//       .catch((error) => console.error('Error fetching the data:', error));
//   }, [id]);

//   if (!recipe) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
//       <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover mb-6 rounded-lg shadow-md" />

//       <div className="mb-6">
//         <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
//         <ul className="list-disc list-inside">
//           {recipe.ingredients.map((ingredient, index) => (
//             <li key={index}>{ingredient}</li>
//           ))}
//         </ul>
//       </div>

//       <div>
//         <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
//         <ol className="list-decimal list-inside">
//           {recipe.instructions.map((step, index) => (
//             <li key={index} className="mb-2">{step}</li>
//           ))}
//         </ol>
//       </div>
//     </div>
//   );
// }

// export default RecipeDetail;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [recipe, setRecipe] = useState([]);
  useEffect(() => {
    async function fetchRecipes() {
      try {
        const response = await fetch("./src/data.json");
        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        console.error("Error loading recipe data:", error);
      }
    }
    fetchRecipes();
  }, []);

  return (
    <>
      <div className="container mx-auto p-4 h-screen">
        <h2 className="font-bold text-center my-3">RECIPES</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recipe.map((recipe) => (
            <div
              key={recipe.id}
              className="w-60 rounded overflow-hidden shadow-sm hover:shadow-md bg-white hover:bg-slate-100"
            >
              <Link to={`/recipe/${recipe.id}`}>
                <img className="w-full" src={recipe.image} alt={recipe.title} />
              </Link>{" "}
              <div className="px-6 py-4">
                <Link to={`/recipe/${recipe.id}`}>
                  <h2 className="font-bold text-base mb-2">{recipe.title}</h2>
                </Link>
                <p className="text-gray-700 text-sm">{recipe.summary}</p>
              </div>
            </div>
          ))}
          ;
        </div>
      </div>
    </>
  );
}

export default HomePage;