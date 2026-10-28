const Dashboard = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow">Total Users</div>
        <div className="bg-white p-6 rounded shadow">Active Users</div>
        <div className="bg-white p-6 rounded shadow">Admins</div>
      </div>
    </div>
  );
};

export default Dashboard;
