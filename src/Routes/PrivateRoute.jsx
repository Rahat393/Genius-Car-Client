import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <p className="text-4xl">Loading....</p>;
  }
  if (!user?.email) {
    return (
      <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
    );
  } else {
    return children;
  }
  return <div></div>;
};

export default PrivateRoute;
