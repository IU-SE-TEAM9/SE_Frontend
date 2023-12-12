/* eslint-disable no-unused-vars */

// AuthContext.js
import { createContext, useContext, useEffect, useState } from 'react';

// Create the context
const AuthContext = createContext();

// Create a provider component
export function AuthProvider({ children }) {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [authUser,setAuthUser] = useState(localStorage.getItem('user'));

    useEffect(() => {
        if(token){
            localStorage.setItem('token', token)
        }else{
            localStorage.removeItem('token')
        }
    },[token])

    useEffect(() => {
        if(authUser){
            localStorage.setItem('user', authUser)
        }else{
            localStorage.removeItem('user')
        }
    },[authUser])

    // Function to set the token
    const setAuthToken = (newToken) => {
        setToken(newToken);
    };

    const setUser = (newUser) =>{
        setAuthUser(newUser)
    }

    return (
        <AuthContext.Provider value={{ token, setAuthToken, authUser, setAuthUser }}>
            {children}
        </AuthContext.Provider>
    );
}

// Custom hook to use the context
export function useAuth() {
    return useContext(AuthContext);
}
