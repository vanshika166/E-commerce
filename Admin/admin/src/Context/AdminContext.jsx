import React, { createContext, useContext } from 'react'
import { useState } from 'react'
import { authDataContext } from './AuthContext';
import axios from 'axios'
import { useEffect } from 'react';
import UpdateProduct from '../Components/UpdateProduct.jsx'

export const adminDataContext = createContext();

const AdminContext = ({ children }) => {
  const [adminData, setAdminData] = useState(null)
  const [allOrders, setAllOrders] = useState([]);
  const [productList, setProductList] = useState([])
  const [allUsers, setAllUsers] = useState([])
  let { serverURL } = useContext(authDataContext)

  useEffect(() => {
    getAdmin()
    handleAllOrders()
    handleGetAllProductData()
    handleAllUsers()
  }, [])

  const handleAllUsers = async () => {
    try {
      const result = await axios.post(serverURL + '/api/user/allusers', {}, { withCredentials: true })
      if (result.data) {
        setAllUsers(result.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleAllOrders = async () => {
    try {
      const result = await axios.post(serverURL + '/api/order/allorders', {}, { withCredentials: true });
      setAllOrders(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAdmin = async () => {
    try {
      let result = await axios.get(serverURL + '/api/user/admin', { withCredentials: true })
      setAdminData(result.data)
      console.log(result.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleGetAllProductData = async () => {
    try {
      const result = await axios.get(serverURL + '/api/product/allproducts', { withCredentials: true })
      setProductList(result.data)
    } catch (error) {
      console.log(error)
    }
  }


  const value = {
    adminData,
    setAdminData,
    getAdmin,
    handleGetAllProductData,
    productList,
    setProductList,
    allOrders,
    allUsers
  }
  return (
    <div>
      <adminDataContext.Provider value={value}>
        {children}
      </adminDataContext.Provider>
    </div>
  )
}

export default AdminContext
