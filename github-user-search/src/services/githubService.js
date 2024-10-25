// src/services/githubService.js

import axios from 'axios';

const fetchUserData = async (username, location, minRepos, page = 1) => {
  let query = '';
  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>${minRepos} `;

  const url = `https://api.github.com/search/users?q=${query.trim()}&page=${page}&per_page=10`; // Sets 10 results per page

  try {
    const response = await axios.get(url);
    return response.data; // Returns `items` array
  } catch (error) {
    throw new Error('Users not found');
  }
};

export default fetchUserData;
