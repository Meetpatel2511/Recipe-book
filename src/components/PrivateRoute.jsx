// src/components/PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "./firebase";  // import your firebase auth

export default function PrivateRoute({ children }) {
  const user = auth.currentUser; // get current user

  if (!user) {
    // Not logged in → go to login page
    return <Navigate to="/login" replace />;
  }

  // Logged in → allow access
  return children;
}
