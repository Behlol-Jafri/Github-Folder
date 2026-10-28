import axios from "axios";
import { createContext, useContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [users,setUsers] = useState([]);
    const login = async (data) => {
        const response = await axios.post('http://127.0.0.1:8000/api/login', data);
        console.log('response = ', response.data)
        const token = response.data.token;
        const role = response.data.user.role;
        localStorage.setItem('token', token);
        localStorage.setItem('role', role);

        // setUserRole(role)
        return role;
    }

    const getUsers = async () => {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://127.0.0.1:8000/api/users', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log('response = ', response.data)
        setUsers(response.data);
    }
    return (
        <Context.Provider value={{ login,getUsers,users }}>
            {children}
        </Context.Provider>
    )
}

export const useDataContext = () => {
    return useContext(Context);
}