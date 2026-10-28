import React from 'react'
import { useNavigate } from 'react-router-dom'

const LogoutButton = () => {
    const navigate = useNavigate();

    const handleLogout = ()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('role');

        navigate('/');
    }

  return (
    <>
    <button className='bg-blue-600 text-white rounded-md border border-gray-300 py-2 px-3 font-semibold' onClick={handleLogout}>Logout</button>
    </>
  )
}

export default LogoutButton