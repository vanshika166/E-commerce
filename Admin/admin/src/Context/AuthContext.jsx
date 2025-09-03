import React, { createContext, useState } from 'react'

export const authDataContext = createContext()

const AuthContext = ({ children }) => {
  let serverURL = "http://localhost:8000";
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
