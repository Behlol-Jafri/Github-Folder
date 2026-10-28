import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import PtDashboard from './pages/pt/PtDashboard'
import AdminDashboard from './pages/admin/AdminDashboard'
import ClinicDashboard from './pages/clinic/ClinicDashboard'
import LoginForm from './components/LoginForm'
import PtLayout from './layout/PtLayout'
import AdminLayout from './layout/AdminLayout'
import ClinicLayout from './layout/ClinicLayout'
import AdminRoute from './components/AdminRoute'
import PtRoute from './components/PtRoute'
import ClinicRoute from './components/ClinicRoute'
import PublicRoute from './components/PublicRoute'
import GetUsers from './pages/admin/GetUsers'

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/" element={<LoginForm />} />
          </Route>
          <Route element={<PtRoute />}>
            <Route path="/pt" element={<PtLayout />}>
              <Route index element={<PtDashboard />} />
            </Route>
          </Route>

          <Route element={<ClinicRoute />}>
            <Route path="/clinic" element={<ClinicLayout />}>
              <Route index element={<ClinicDashboard />} />
            </Route>
          </Route>

          <Route element={<AdminRoute />}>
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path='users' element={<GetUsers />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>






    </>
  )
}

export default App
