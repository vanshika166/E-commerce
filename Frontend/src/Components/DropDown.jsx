import React, {useContext} from 'react'

import axios from 'axios'
import { authDatacontext } from '../Context/AuthContext.jsx'
import { userDataContext } from '../Context/UserContext.jsx'
import { pageDataContext } from '../Context/pageContext.jsx'
import { useNavigate } from 'react-router-dom'

const DropDown = () => {
 const{serverURL} = useContext(authDatacontext);
 const {getCurrentUser} = useContext(userDataContext);
 const {dropMenu, setDropMenu} = useContext(pageDataContext);
 const navigate = useNavigate()

 
  const handleLogout = async()=>{
    try {
      const result = await axios.get(serverURL+'/api/auth/logout',{withCredentials:true})
      console.log(result.data)
      getCurrentUser()
      setDropMenu(!dropMenu)
    } catch (error) {
      console.log(error.message)
    }
  }
  

  return (
    <>
     {dropMenu? <div className={`h-[11.5rem] w-[10rem] backdrop-blur-sm bg-black/50 flex flex-col fixed justify-center rounded-md right-[8rem] top-[3rem] z-[1000]`}>
        <button onClick={()=>handleLogout()} className='p-2 text-start font-medium text-lg w-full hover:rounded-sm transition-all duration-100 hover:bg-black text-white'>Logout</button>
        <button onClick={()=>navigate("/check")} className='p-2 text-start font-medium text-lg w-full hover:rounded-sm transition-all duration-100 hover:bg-black text-white'>Orders</button>
        <button onClick={()=>navigate("/about")} className='p-2 text-start font-medium text-lg w-full hover:rounded-sm transition-all duration-100 hover:bg-black text-white'>About</button>
        <button onClick={()=>navigate("/wishlist")} className='p-2 text-start font-medium text-lg w-full hover:rounded-sm transition-all duration-100 hover:bg-black text-white'>Wishlist</button>
    </div>:null}
    </>
  
  )
}

export default DropDown
