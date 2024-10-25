// src/services/githubService.js

import axios from 'axios';

const fetchUserData = async (username) => {
  const url = `https://api.github.com/users/${username}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error('User not found');
  }
};

export default fetchUserData;
