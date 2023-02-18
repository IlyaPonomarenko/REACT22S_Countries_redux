import { Navigate, Outlet } from "react-router-dom";

import React from "react";

const ProtectedRoute = ({ user, children }) => {
    const allowedRoles = ["ADMIN", "USER"]
  if (!user) {
    return <Navigate to="/login" replace />; //navigates forcibly to a route 
  }
  return <Outlet />;
};

export default ProtectedRoute;
