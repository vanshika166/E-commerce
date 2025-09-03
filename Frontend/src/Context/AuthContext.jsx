import React, { createContext } from 'react'
export const authDatacontext = createContext()

const AuthContext = ({ children }) => {
    const serverURL = "http://localhost:8000"
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
