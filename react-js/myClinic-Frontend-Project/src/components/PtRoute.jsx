import { Navigate, Outlet } from "react-router-dom";

const PtRoute = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token || !role) {
    return <Navigate to="/" replace />;
  }

  if (role !== "pt") {
    return <Navigate to={`/${role}`} replace />; 
  }

  return <Outlet />;
};

export default PtRoute;
