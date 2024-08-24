// UserContext.js
import React, { createContext } from 'react';

// Create a Context for user data
const UserContext = createContext();

// Export the context and a provider component
export const UserProvider = ({ children, value }) => (
  <UserContext.Provider value={value}>
    {children}
  </UserContext.Provider>
);

export default UserContext;
