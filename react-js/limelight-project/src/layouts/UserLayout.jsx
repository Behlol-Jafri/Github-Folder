import UserNavbar from "../component/UserNavbar";


const UserLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <UserNavbar />
      <div className="p-6">{children}</div>
    </div>
  );
};

export default UserLayout;
