import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = async () => {
    await axios.post("/logout");
    localStorage.clear();
    // navigate("/login");
  };

  return (
    <div className="bg-white shadow p-4 flex justify-between">
      <h1 className="font-semibold">Admin Dashboard</h1>
      <button onClick={logout} className="text-red-500">Logout</button>
    </div>
  );
};

export default Navbar;
