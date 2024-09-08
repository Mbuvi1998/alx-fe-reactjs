// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';
// import { useAuth } from '../hooks/useAuth';

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//     const { isAuthenticated } = useAuth();

//     return (
//         <Route
//             {...rest}
//             element={isAuthenticated ? <Component /> : <Navigate to="/login" />}
//         />
//     );
// };

// export default ProtectedRoute;

import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = false; // Simulate authentication status

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
