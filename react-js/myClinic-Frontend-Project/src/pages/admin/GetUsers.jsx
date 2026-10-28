import React, { useEffect, useState } from 'react'
import { useDataContext } from '../../components/contextApi';

const GetUsers = () => {
    const { getUsers, users } = useDataContext();
    useEffect(() => {
        getUsers();
    }, [])
    return (
        <>
            <table className="w-full text-left">
                <thead className='border'>
                    <tr >
                        <th className='border px-2 py-1'>No.</th>
                        <th className='border px-2'>Name</th>
                        <th className='border px-2'>Email</th>
                        <th className='border px-2'>Role</th>
                        <th className='border px-2'>Phone</th>
                        <th className='border px-2 text-center' colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody className='border'>
                    {
                        users.map((item, index) => (
                            <>
                                <tr className=''>
                                    <td className='border px-2 py-1'>{index + 1}</td>
                                    <td className='border px-2'>{item.name}</td>
                                    <td className='border px-2'>{item.email}</td>
                                    <td className='border px-2'>{item.role}</td>
                                    <td className='border px-2'>{item.phone}</td>
                                    <td className='border px-2'>
                                        <button>Update</button>
                                    </td>
                                    <td className='border px-2'>
                                        <button>Delete</button>
                                    </td>
                                </tr>
                            </>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default GetUsers