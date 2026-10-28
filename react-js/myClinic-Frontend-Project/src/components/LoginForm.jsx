import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDataContext } from './contextApi';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginForm = () => {
    const navigate = useNavigate();
    const { login } = useDataContext();
    const [data, setData] = useState({ email: '', password: '' })
    const [showPassword, setShowPassword] = useState('password');
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const role  = await login(data);
        navigate(`/${role}`)
    }
    return (
        <>
            <div className="h-screen flex justify-center items-center">
                <form action="#" onSubmit={handleSubmit} className='w-100 mx-auto border border-gray-500 p-2 rounded-md'>
                    <h1 className='bg-blue-700 mb-2 text-white font-bold p-2 rounded-md'>Login</h1>
                    <div className="">
                        <label className='px-2 w-full text-sm font-semibold'>Enter Email</label>
                        <input
                            type="email"
                            name='email'
                            value={data.email}
                            onChange={handleOnChange}
                            placeholder='Enter Email'
                            className='text-sm my-2 w-full bg-gray-200 p-2 outline-blue-300 border border-gray-500 rounded-md'
                        />
                    </div>
                    <div className="">
                        <label className='px-2 text-sm w-full font-semibold'>Enter Password</label>
                        <div className=' flex justify-between items-center my-2 w-full bg-gray-200 p-2 focus-within:outline focus-within:outline-blue-300 border border-gray-500 rounded-md'>
                            <input
                            type={showPassword}
                            name='password'
                            value={data.password}
                            onChange={handleOnChange}
                            placeholder='Enter Password'
                            className='text-sm w-full border-0 outline-0'
                        />
                        {
                            showPassword == 'password' ?
                            <FaEyeSlash onClick={()=>{setShowPassword('text')}} />
                            :
                            <FaEye onClick={()=>{setShowPassword('password')}}/>
                        }
                        </div>
                    </div>
                    <div className="flex justify-between gap-2">
                        <button className='bg-gray-300 w-1/2 my-2 text-center p-2 rounded-md border font-semibold'>Cancle</button>
                        <button type='submit' className='bg-blue-500 text-white w-1/2 my-2 text-center p-2 rounded-md border font-semibold '>Login</button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default LoginForm