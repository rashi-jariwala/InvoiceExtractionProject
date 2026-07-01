import { Navigate, useLocation } from "react-router-dom";

import { getUsername } from "../utils/storage";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const username = getUsername();

  if (!username) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
