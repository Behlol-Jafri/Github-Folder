import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './effectHook/Navbar'
import SubCategory from './effectHook/SubCategory'
import SecondSubCategory from './effectHook/SecondSubCategory'
import Footer from './effectHook/Footer'
import ThirdSubCategory from './effectHook/ThirdSubCategory'
import FormData from './form/FormData'
import PrivateRoute from './Auth/PrivateRoute'
import AdminLayout from './layouts/AdminLayout'
import Dashboard from './pages/admin/Dashboard'
import Users from './pages/admin/Users'
import UserLayout from './layouts/UserLayout'
import UserDashboard from './pages/user/UserDashboard'
import Profile from './pages/user/Profile'
// import Navbar from './component/Navbar'

function App() {
  return (
    <>
    {/* <BrowserRouter>
      <Routes>
        <Route
          path="/admin"
          element={
            <PrivateRoute role="admin">
              <AdminLayout>
                <Dashboard />
              </AdminLayout>
            </PrivateRoute>
          }
        />

        <Route
          path="/admin/users"
          element={
            <PrivateRoute role="admin">
              <AdminLayout>
                <Users />
              </AdminLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/user"
          element={
            <PrivateRoute role="user">
              <UserLayout>
                <UserDashboard />
              </UserLayout>
            </PrivateRoute>
          }
        />

        <Route
          path="/user/profile"
          element={
            <PrivateRoute role="user">
              <UserLayout>
                <Profile />
              </UserLayout>
            </PrivateRoute>
          }
        />
      </Routes>

</BrowserRouter>


 */}


      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<FormData />} />
          <Route path='/subCategory/:id' element={<SubCategory />} />
          <Route path='/secondSubCategory/:id' element={<SecondSubCategory />} />
          <Route path='/thirdSubCategory/:id' element={<ThirdSubCategory />} />
        </Routes>
         <Routes>
          <Route path='/admin' element={<Dashboard />} />
          {/* <Route path='/subCategory/:id' element={<SubCategory />} />
          <Route path='/secondSubCategory/:id' element={<SecondSubCategory />} />
          <Route path='/thirdSubCategory/:id' element={<ThirdSubCategory />} /> */}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
