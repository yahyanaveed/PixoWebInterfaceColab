// ProtectedRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const access_token = localStorage.getItem('access_token');

  return access_token ? <Outlet /> : <Navigate to="/login" replace />;
  // return (
  //   <Route
  //     {...rest}
  //     element={access_token ? <Element /> : <Navigate to="/login" replace />}
  //   />
  // );
};

export default ProtectedRoute;
