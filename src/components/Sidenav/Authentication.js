import React from "react";
import {useState, createContext,useContext } from "react";
const Authcontext =createContext(null)


export const AuthProvider =({children}) =>{
    const [user , setUser] = useState(null)
    const login = (user) => {
        setUser(user)
    }
    const logout = () =>{
        setUser(null)
    }
    return (<Authcontext.Provider value={{user , login , logout}}>
        {children}
        </Authcontext.Provider>)
}
export const useAuth =() => {
    return useContext(Authcontext)
}
