import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { authDatacontext } from '../Context/AuthContext'
import axios from 'axios'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../utils/Firebase'
import UserContext, { userDataContext } from '../Context/UserContext'
import { motion } from 'framer-motion'

const Authentication = () => {
  const navigate = useNavigate()
  const [login, setsetLogin] = useState(false)
  const [show, setShow] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { serverURL } = useContext(authDatacontext)
  const { getCurrentUser, setUserData, userData } = useContext(userDataContext)

  // functions for signup login
  const handleSignup = async (e) => {
    e.preventDefault()
    try {
      const result = await axios.post(serverURL + '/api/auth/signup', { name, email, password }, { withCredentials: true })
      console.log("signup succesfully", result.user)
      getCurrentUser()
      setUserData(result.user)
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const result = await axios.post(serverURL + '/api/auth/login', { email, password }, { withCredentials: true })
      console.log("login succesfully", result.user)
      getCurrentUser()
      setUserData(result.user)
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  // .function to signup with google
  const GoogleSignup = async () => {
    try {
      const response = await signInWithPopup(auth, provider)
      const user = response.user
      const name = user.displayName
      const email = user.email

      const result = await axios.post(serverURL + '/api/auth/googlesignup', { name, email }, { withCredentials: true })
      console.log("google login successful", result.data)
      getCurrentUser()
      setUserData(result.user)
      navigate("/")
    } catch (error) {
      console.log(error)
    }

  }

  const handleForm = () => {
    setsetLogin(!login)
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, }}
      transition={{ duration: 0.5 }}
      className='h-screen w-full bg-[#EDEEE9] flex'>
      {/* carousel */}
      <div className='h-full relative lg:block hidden w-[50%] p-2'>

        <div className='h-full w-full rounded-2xl relative overflow-hidden'>
          <img src="pic33.png" alt="" className='h-[140%] w-full object-cover rounded-2xl' />
          <h1 className='absolute bottom-16 left-[25%] text-4xl font-semibold text-white'> Style in your own way</h1>
          {/* <Carousel/> */}
        </div>
        <div className='absolute h-full w-full p-4 inset-0 rounded-2xl'>
          <div className='w-full items-center justify-between flex'>
            <h1 className='text-3xl font-medium'>HE & SHE</h1>
            <button onClick={() => navigate("/")} className=' p-2 bg-white/20 font-Satoshi text-white backdrop-blur-2xl rounded-full px-4 font-medium hover:bg-white/50 transition-all duration-200 hover:text-black'>back to website <span className='animate-pulse'>→</span></button>
          </div>
        </div>
      </div>

      {/*signup login form  */}
      <div className='h-full lg:w-[50%] w-full flex flex-col items-center sm:justify-evenly justify-center'>
        <form onSubmit={!login ? handleSignup : handleLogin} className='h-[80%] w-full cursor-default flex flex-col text-black justify-center items-center [4rem] p-[3rem] gap-y-8'>
          <div className='flex flex-col items-center'>
            <h1 className='sm:text-[2.5rem] text-3xl font-semibold cursor-default'>Create an account</h1>
            <h3 className='font-Satoshi lg:text-[16px] md:text-2xl text-black/50'>{login ? "don't have account" : "Already have an account?"} <span onClick={() => handleForm()} className='underline cursor-pointer text-blue-500 hover:text-blue-800'>{login ? "Sign up" : "Log in"}</span></h3>
          </div>


          {/* inputs */}
          <div className='w-full flex flex-col relative items-center gap-y-5'>
            {!login ? <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder='USERNAME' className='border-[1px] border-gray-500 text-black font-Satoshi h-[3rem] px-2 sm:w-[70%] w-full bg-white rounded-sm' /> : null}
            <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" placeholder='EMAIL' className='border-[1px] border-gray-500 text-black font-Satoshi h-[3rem] px-2 sm:w-[70%] w-full bg-white rounded-sm' />
            <div className='w-full relative flex items-center justify-center'>
              <input onChange={(e) => setPassword(e.target.value)} value={password} type={show ? "text" : "password"} placeholder='PASSWORD' className='border-[1px] border-gray-500 text-black font-Satoshi h-[3rem] px-2 sm:w-[70%] w-full bg-white rounded-sm' />
              {!show && (<i onClick={() => setShow(prev => !prev)} class="fa-solid fa-eye absolute bottom-4 right-[17%] text-gray-500 text-xl"></i>)}
              {show && (<i onClick={() => setShow(prev => !prev)} class="fa-solid fa-eye-slash absolute bottom-4 right-[17%] text-gray-500 text-xl"></i>)}
            </div>

            <div className='flex relative  sm:right-[4.2rem] right-0 items-center gap-x-2 font-Satoshi'>
              <input type="checkbox" name="" id="" className='h-[20px] w-[20px] rounded-xl' />
              <p>I agree to the <span className='underline font-medium text-blue-500 cursor-pointer'>Terms and conditions</span></p>
            </div>
          </div>

          <button className='sm:w-[70%] w-full p-2 rounded-sm bg-[#AC9C8D] text-black font-medium'>{login ? "Sign in" : "Create Account"}</button>

          <div className='sm:w-[70%] w-full flex items-center justify-between'>
            <div className='h-[0.025rem] w-[33%] bg-gray-700/50 rounded-xl'></div>
            <h2 className='text-gray-700 font-Satoshi text-center'>or register with</h2>
            <div className='h-[0.025rem] w-[33%] bg-gray-700/50 rounded-xl'></div>
          </div>
        </form>

        <button onClick={() => GoogleSignup()} className='sm:w-[60%] w-[75%] cursor-pointer border-[1px] border-gray-500 rounded-sm flex items-center justify-center hover:rounded-full transition-all duration-200'>
          <img src="google.png" alt="" className='h-[3rem] w-[3rem] ' />
          <h2 className='font-medium'>Google</h2>
        </button>
      </div>

    </motion.div>
  )
}

export default Authentication
