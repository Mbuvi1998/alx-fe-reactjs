import React from 'react';
import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  const { data, error, isLoading, isError, refetch } = useQuery('posts', fetchPosts, {
    staleTime: 60000, // Data is considered fresh for 1 minute
    cacheTime: 900000, // Cache the data for 15 minutes
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <button onClick={() => refetch()} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">
        Refresh Posts
      </button>
      <ul>
        {data.map(post => (
          <li key={post.id} className="mb-4 p-4 border rounded shadow">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
