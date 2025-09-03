import React, { createContext, useState } from 'react'

export const authDataContext = createContext()

const AuthContext = ({ children }) => {
  let serverURL = "https://e-commerce-backend-88fn.onrender.com";
  const value = {
    serverURL
  }

  return (
    <div>
      <authDataContext.Provider value={value}>
        {children}
      </authDataContext.Provider>
    </div>
  )
}

export default AuthContext
