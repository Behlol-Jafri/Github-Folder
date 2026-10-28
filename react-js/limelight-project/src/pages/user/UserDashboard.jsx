const UserDashboard = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Welcome 👋</h2>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded shadow">My Orders</div>
        <div className="bg-white p-6 rounded shadow">Account Status</div>
      </div>
    </div>
  );
};

export default UserDashboard;
