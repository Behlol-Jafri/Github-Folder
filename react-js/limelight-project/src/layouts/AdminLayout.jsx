import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";


const AdminLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-100">
        <Navbar />
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
