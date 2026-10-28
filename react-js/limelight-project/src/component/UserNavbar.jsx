import axios from "../api/axios";
import { useNavigate, Link } from "react-router-dom";

const UserNavbar = () => {
  const navigate = useNavigate();

  const logout = async () => {
    await axios.post("/logout");
    localStorage.clear();
    // navigate("/login");
  };

  return (
    <div className="bg-white shadow p-4 flex justify-between">
      <h2 className="font-bold">User Panel</h2>

      <div className="space-x-4">
        <Link to="/user">Dashboard</Link>
        <Link to="/user/profile">Profile</Link>
        <button onClick={logout} className="text-red-500">Logout</button>
      </div>
    </div>
  );
};

export default UserNavbar;
