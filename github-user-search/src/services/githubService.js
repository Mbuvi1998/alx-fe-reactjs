import axios from 'axios';

const githubAPI = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}`
  }
});

export const fetchUser = async (username) => {
  const response = await githubAPI.get(`/users/${username}`);
  return response.data;
};
