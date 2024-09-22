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


// import React, { useState, useEffect } from 'react';

// function HomePage() {
//   const [recipes, setRecipes] = useState([]);

//   // Fetch recipe data from the JSON file
//   useEffect(() => {
//     fetch('/data.json')
//       .then((response) => response.json())
//       .then((data) => setRecipes(data))
//       .catch((error) => console.error('Error fetching the data:', error));
//   }, []);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold text-center mb-8">Recipe Sharing Platform</h1>

//       {/* Grid Layout for Recipe Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {recipes.map((recipe) => (
//           <div key={recipe.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
//             <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
//             <div className="p-4">
//               <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
//               <p className="text-gray-600">{recipe.summary}</p>
//               <a
//                 href={`/recipes/${recipe.id}`}
//                 className="inline-block mt-4 text-blue-500 hover:underline"
//               >
//                 View Recipe
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default HomePage;

