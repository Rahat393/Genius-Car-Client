import React, { useContext } from "react";
import Login from "../Pages/Login/Login";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <p className="text-4xl">Loading....</p>;
  }
  if (!user?.email) {
    return <Login></Login>;
  } else {
    return children;
  }
  return <div></div>;
};

export default PrivateRoute;
