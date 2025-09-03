import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import{ authDatacontext } from './AuthContext.jsx'
import axios from 'axios'
import { useEffect } from 'react'

export const userDataContext = createContext()

const UserContext = ({children}) => {
const [userData, setUserData] = useState({})
const {serverURL} = useContext(authDatacontext)

    const getCurrentUser = async()=>{
        try {
           const result = await axios.get(serverURL+"/api/user/getcurrentuser",{withCredentials:true}) 
           setUserData(result.data)
        } catch (error) {
            setUserData({})
            console.log(error)
        }
    }

    useEffect(() => {
     getCurrentUser()
    }, [])
    
    let value = {
            userData,
            setUserData,
            getCurrentUser
    }

  return (
    <div>
      <userDataContext.Provider value={value}>
        {children}
      </userDataContext.Provider>
    </div>
  )
}

export default UserContext;
