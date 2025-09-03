import React, { useContext, useState } from 'react';
import { authDataContext } from '../Context/AuthContext';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { adminDataContext } from '../Context/AdminContext';


const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [show, setShow] = useState(false)
  const {serverURL} = useContext(authDataContext)
  const navigate = useNavigate()
  const {adminData,getAdmin} = useContext(adminDataContext)

  const handleLogin = async(e)=>{
   e.preventDefault()
    try {
       await axios.post(serverURL+'/api/auth/adminlogin',{email,password},{withCredentials:true})
      // console.log(result.data)
        getAdmin()
      navigate("/")
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className='h-screen w-full bg-[#EDEEE9] flex'>
      {/* carousel */}
      <div className='h-full relative w-[50%] p-2'>

        <div className='h-full w-full rounded-2xl relative overflow-hidden'>
          <img src="/pic34.png" alt="" className='h-[140%] w-full object-cover rounded-2xl' />
          <h1 className='absolute bottom-16 left-[25%] text-4xl font-semibold text-white'> Style in your own way</h1>
          {/* <Carousel/> */}
        </div>
        <div className='absolute h-full w-full p-4 inset-0 rounded-2xl'>
          <div className='w-full items-center justify-between flex'>
            <h1 className='text-3xl font-medium'>HE & SHE</h1>
          </div>
        </div>
      </div>

      {/* login form  */}
      <div className='h-full w-[50%] flex flex-col items-center justify-evenly'>
        <form onSubmit={handleLogin} className='h-[80%] w-full cursor-default flex flex-col text-black justify-center items-center [4rem] p-[3rem] gap-y-8'>
          <div className='flex flex-col items-center justify-center gap-y-3'>
            <h1 className='text-3xl font-semibold cursor-default'>Welcome to HE&SHE</h1>
            <h3 className='font-Satoshi text-black/50 text-xl'>please login to your Admin panel</h3>
          </div>


          {/* inputs */}
          <div className='w-full flex flex-col relative items-center gap-y-5'>

            <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" placeholder='EMAIL' className='border-[1px] border-gray-500 text-black font-Satoshi h-[3rem] px-2 w-[70%] bg-white rounded-sm' />
            <div className='w-full relative flex items-center justify-center'>
              <input onChange={(e) => setPassword(e.target.value)} value={password} type={show ? "text" : "password"} placeholder='PASSWORD' className='border-[1px] border-gray-500 text-black font-Satoshi h-[3rem] px-2 w-[70%] bg-white rounded-sm' />
              {!show && (<i onClick={() => setShow(prev => !prev)} className="fa-solid fa-eye absolute bottom-4 right-[17%] text-gray-500 text-xl"></i>)}
              {show && (<i onClick={() => setShow(prev => !prev)} className="fa-solid fa-eye-slash absolute bottom-4 right-[17%] text-gray-500 text-xl"></i>)}
            </div>

            <div className='flex relative right-[4.2rem] items-center gap-x-2 font-Satoshi'>
              <input type="checkbox" name="" id="" className='h-[20px] w-[20px] rounded-xl' />
              <p>I agree to the <span className='underline font-medium text-blue-500 cursor-pointer'>Terms and conditions</span></p>
            </div>
          </div>

          <button className=' w-[70%] p-2 rounded-sm bg-[#AC9C8D] text-black font-medium'>Login in </button>
        </form>

      </div>

    </div>
  )
}

export default Login
