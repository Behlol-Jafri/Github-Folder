import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import LogoutButton from '../components/LogoutButton'

const AdminLayout = () => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2 bg-red-400 flex flex-col overflow-y-auto h-screen">
          <Link to={'users'}>Users</Link>
        </div>
        <div className="col-span-10">
          <div className="flex justify-between items-center bg-black p-3">
            <h1 className='text-white font-bold text-xl'>Admin Dashboard</h1>
            <LogoutButton />
          </div>
        <div className="p-4">
          <Outlet/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLayout