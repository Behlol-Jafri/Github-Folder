import { useEffect, useState } from "react";
import axios from "../../api/axios";

const Profile = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get("/user").then(res => setUser(res.data));
  }, []);

  return (
    <div className="max-w-xl bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">My Profile</h2>

      <p><b>Name:</b> {user.name}</p>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Role:</b> {user.role}</p>
    </div>
  );
};

export default Profile;
