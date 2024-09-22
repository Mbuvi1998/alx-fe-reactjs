// import React, { useState } from 'react';

// function AddRecipeForm() {
//   const [title, setTitle] = useState('');
//   const [ingredients, setIngredients] = useState('');
//   const [steps, setSteps] = useState('');
//   const [errors, setErrors] = useState({});

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Simple validation
//     const newErrors = {};
//     if (!title) newErrors.title = 'Recipe title is required';
//     if (!ingredients) newErrors.ingredients = 'At least one ingredient is required';
//     if (!steps) newErrors.steps = 'At least one step is required';

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//     } else {
//       console.log('Form submitted:', { title, ingredients, steps });
//       // You can handle form submission here, like sending data to an API or adding to state
//       setTitle('');
//       setIngredients('');
//       setSteps('');
//       setErrors({});
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
//       <h2 className="text-2xl font-bold mb-6">Add New Recipe</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2" htmlFor="title">
//             Recipe Title
//           </label>
//           <input
//             type="text"
//             id="title"
//             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//           {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2" htmlFor="ingredients">
//             Ingredients
//           </label>
//           <textarea
//             id="ingredients"
//             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             value={ingredients}
//             onChange={(e) => setIngredients(e.target.value)}
//             rows="4"
//             placeholder="List each ingredient on a new line"
//           ></textarea>
//           {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2" htmlFor="steps">
//             Preparation Steps
//           </label>
//           <textarea
//             id="steps"
//             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             value={steps}
//             onChange={(e) => setSteps(e.target.value)}
//             rows="6"
//             placeholder="List each step on a new line"
//           ></textarea>
//           {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
//         </div>

//         <button
//           type="submit"
//           className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
//         >
//           Submit Recipe
//         </button>
//       </form>
//     </div>
//   );
// }

// export default AddRecipeForm;

import React, { useState } from "react";

const AddRecipeForm = () => {
  // State for form inputs
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");
  const [errors, setErrors] = useState({});

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Submit the form data (you could send it to a backend or update state here)
      const newRecipe = { title, ingredients, preparation };
      console.log("New Recipe Submitted:", newRecipe);

      // Reset form fields after submission
      setTitle("");
      setIngredients("");
      setPreparation("");
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  // Simple front-end validation
  const validateForm = () => {
    const errors = {};
    if (!title.trim()) errors.title = "Title is required";
    if (!ingredients.trim()) {
      errors.ingredients = "Ingredients are required";
    } else if (ingredients.split("\n").length < 2) {
      errors.ingredients = "Please include at least 2 ingredients";
    }
    if (!preparation.trim())
      errors.preparation = "Preparation steps are required";
    return errors;
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        {/* Recipe Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Recipe Title:
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter recipe title"
          />
          {errors.title && (
            <p className="text-red-500 text-xs italic">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label
            htmlFor="ingredients"
            className="block text-gray-700 font-bold mb-2"
          >
            Ingredients:
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter ingredients (one per line)"
            rows="4"
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-xs italic">{errors.ingredients}</p>
          )}
        </div>

        {/* Preparation Steps */}
        <div className="mb-4">
          <label
            htmlFor="preparation"
            className="block text-gray-700 font-bold mb-2"
          >
            Preparation Steps:
          </label>
          <textarea
            id="preparation"
            value={preparation}
            onChange={(e) => setPreparation(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter preparation steps"
            rows="6"
          ></textarea>
          {errors.preparation && (
            <p className="text-red-500 text-xs italic">{errors.preparation}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;