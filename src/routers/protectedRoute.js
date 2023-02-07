import React from "react";
import { useAuth } from "../custom--hookes/useAuth";
import { Navigate } from "react-router-dom";

function protectedRoute({ children }) {
  const { currentUser } = useAuth();

  return currentUser ? children : <Navigate to="/login" />;
}

export default protectedRoute;
