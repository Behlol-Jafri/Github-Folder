import { Navigate, Outlet } from "react-router-dom";

const ClinicRoute = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token || !role) {
    return <Navigate to="/" replace />;
  }

  if (role !== "clinic") {
    return <Navigate to={`/${role}`} replace />; 
  }

  return <Outlet />;
};

export default ClinicRoute;
