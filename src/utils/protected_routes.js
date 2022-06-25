import { Outlet, Navigate } from "react-router-dom";
import auth from "../auth";

export const ProtectedRoute = () => {
  if (!auth.loggedIn()) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
