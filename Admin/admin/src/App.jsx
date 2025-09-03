import React, { useContext } from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import { adminDataContext } from './Context/AdminContext.jsx';
import {ToastContainer} from 'react-toastify';

const App = () => {
const {adminData} = useContext(adminDataContext)

  return (
    <>
      {!adminData?<Login/>:<> 
      <ToastContainer>

      </ToastContainer>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
      </Routes>
      </>
}
    </>
  )
}

export default App;
