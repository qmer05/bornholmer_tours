import { Navigate } from "react-router";

const ProtectedRoute = ({ user, allowedRoles, children }) => {
  if (!user || !allowedRoles.some((role) => user.roles.includes(role))) {
    return <Navigate to="/login" />; // Redirect to /login if unauthorized
  }

  // Using children allows ProtectedRoute to be reusable.
  // Instead of hardcoding the protected component
  // (like <Admin />) inside ProtectedRoute
  return children;
};

export default ProtectedRoute;
