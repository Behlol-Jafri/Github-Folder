import { useEffect, useState } from "react";
import axios from "../../api/axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/admin/users").then(res => setUsers(res.data));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Users</h2>

      <table className="w-full bg-white rounded shadow">
        <thead>
          <tr>
            <th className="p-3">Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="border-t">
              <td className="p-3">{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
