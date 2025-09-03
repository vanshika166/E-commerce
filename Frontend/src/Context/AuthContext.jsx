import React, { createContext } from 'react'
export const authDatacontext = createContext()

const AuthContext = ({ children }) => {
    const serverURL = "https://e-commerce-backend-88fn.onrender.com"
    const value = {
        serverURL
    }
    return (
        <div>
            <authDatacontext.Provider value={value}>
                {children}
            </authDatacontext.Provider>
        </div>
    )
}

export default AuthContext
