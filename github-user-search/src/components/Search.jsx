// src/components/Search.jsx

import React, { useState } from 'react';
import fetchUserData from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1); // Current page state

  const handleSearch = async (e) => {
    e.preventDefault();
    setPage(1); // Reset to first page on new search
    await fetchResults(1);
  };

  const fetchResults = async (page) => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchUserData(username, location, minRepos, page);
      setUserData(data.items);
    } catch (err) {
      setError("Looks like we can't find any users");
    } finally {
      setLoading(false);
    }
  };

  const handleNextPage = () => {
    setPage((prevPage) => {
      const newPage = prevPage + 1;
      fetchResults(newPage);
      return newPage;
    });
  };

  const handlePreviousPage = () => {
    setPage((prevPage) => {
      const newPage = Math.max(prevPage - 1, 1);
      fetchResults(newPage);
      return newPage;
    });
  };

  return (
    <div className="search-container max-w-lg mx-auto p-4">
      <form onSubmit={handleSearch} className="space-y-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="GitHub Username"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Minimum Repositories"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData.length > 0 && (
        <div className="results mt-4 space-y-4">
          {userData.map((user) => (
            <div key={user.id} className="user-info flex items-center space-x-4">
              <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
              <div>
                <h3 className="text-lg font-semibold">{user.login}</h3>
                <p>{user.location || 'No location provided'}</p>
                <p>{user.public_repos || 'Repo count not available'}</p>
                <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                  View Profile
                </a>
              </div>
            </div>
          ))}
          <div className="pagination-buttons flex justify-between mt-4">
            <button
              onClick={handlePreviousPage}
              disabled={page === 1}
              className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={handleNextPage}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
