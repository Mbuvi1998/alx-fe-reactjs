// src/App.jsx
// import React from 'react';
// import RecipeList from './components/RecipeList';
// import AddRecipeForm from './components/AddRecipeForm';

// const App = () => {
//   return (
//     <div>
//       <h1>Recipe Sharing App</h1>
//       <AddRecipeForm />
//       <RecipeList />
//     </div>
//   );
// };

// export default App;
// src/App.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// import RecipeList from './components/RecipeList';
// import AddRecipeForm from './components/AddRecipeForm';

// const App = () => {
//   return (
//     <div>
//       <h1>Recipe Sharing App</h1>
//       <AddRecipeForm />
//       <RecipeList />
//       <Link to="/recipe/1">Go to Recipe 1 Details</Link>
//     </div>
//   );
// };

// export default App;
// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";

const App = () => {
  return (
    <Router>
      <div>
        <header>
          <h1>Recipe App</h1>
          <SearchBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/add" element={<AddRecipeForm />} />
            <Route path="/recipes/:id" element={<RecipeDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
