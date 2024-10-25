// src/App.jsx

import React from 'react';
import Search from './components/Search';

const App = () => {
  return (
    <div className="App min-h-screen bg-gray-100 p-4">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold text-blue-600">GitHub User Search</h1>
        <p className="text-gray-600">Find GitHub profiles based on username, location, and more</p>
      </header>
      <main>
        <Search />
      </main>
    </div>
  );
};

export default App;
