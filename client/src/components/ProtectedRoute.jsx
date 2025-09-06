
import { useEffect } from "react";
import { Navigate } from "react-router";
import { useAppContext } from "../context/AppContext";

const ProtectedRoute = ({ children }) => {
  const { user, isLoadingUser, setShowUserLogin } = useAppContext();

  useEffect(() => {
    if (!user) {
      setShowUserLogin(true);
    }
  }, [user, setShowUserLogin]);

  if (isLoadingUser) return null;

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
