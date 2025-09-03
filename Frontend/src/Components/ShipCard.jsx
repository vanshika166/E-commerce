import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { productDataContext } from '../Context/ProductContext'
import axios from 'axios'
import { authDatacontext } from '../Context/AuthContext'

const ShipCard = () => {
  const {cartItems,userCartList,setCartItems, totalAmount, productList,deliveryFee} = useContext(productDataContext)
  const {serverURL} = useContext(authDatacontext)
  const navigate = useNavigate()
  const [shipData, setShipData] = useState({
    fullName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    country:"",
    pinCode:"",
    phone:"",
  })
  const [completeData, setcompleteData] = useState([])


  const formHandler = (e)=>{
    const name = e.target.name
    const value = e.target.value
    setShipData(data=> ({...data,[name]:value}))
  }

     const onSubmitHandler = async(e)=>{
      e.preventDefault()
      try {
        let orderItems =[]
        for (const items in cartItems) {
          let groupedItems = {
            ...structuredClone(productList.find(product=> product._id === items)),
            sizes:[],
            quantity:0
          }
          for (const size in cartItems[items]) {
            const quantity = cartItems[items][size];
            if(quantity>0){
              groupedItems.sizes.push(size);
              groupedItems.quantity +=quantity
            }
          }
          if(groupedItems.sizes.length>0){
            orderItems.push(groupedItems)
          }
        }

        let orderData = {
          address:shipData,
          items:orderItems,
          amount:totalAmount + deliveryFee
        }
        
        const result = await axios.post(serverURL+ '/api/order/placeorder',orderData,{withCredentials:true})
        setCartItems({})
        console.log(result.data)
      } catch (error) {
        console.log(error)
      }

    }




  return (
    <div className='min-h-[100%] p-2 sm:w-[70%] w-full flex flex-col pt-8 gap-y-5 items-center text-teal-500'>
    <h1 className='text-2xl w-[90%] font-semibold text-gray-700'>SHIPPING ADDRESS</h1>

<form onSubmit={onSubmitHandler} className='sm:min-h-[50rem] min-h-[50rem] shadow-md text-gray-500  font-Satoshi sm:w-[90%] w-full flex flex-col gap-y-6 bg-white p-8'>
  {/* Full Name */}
  <div className='w-full flex flex-col gap-y-2'>
    <label htmlFor='fullname' className='font-bold text-lg'>Full Name</label>
    <input onChange={formHandler} name='fullName' value={shipData.fullName} type='text' id='fullname' className='focus:outline-none p-2 bg-white rounded-lg border border-gray-300' placeholder='Enter your full name' />
  </div>

  {/* Email Address */}
    <div className='w-full flex flex-col gap-y-2'>
    <label htmlFor='email' className='font-bold text-lg'>Email Address</label>
    <input onChange={formHandler} name='email' value={shipData.email} type='email' id='email' className='focus:outline-none p-2 bg-white rounded-lg border border-gray-300' placeholder='Enter your full name' />
  </div>

  {/* Street Address */}
  <div className='w-full flex flex-col gap-y-2'>
    <label htmlFor='address' className='font-bold text-lg'>Street Address</label>
    <input onChange={formHandler} name='street' value={shipData.street} type='text' id='address' className='focus:outline-none p-2 bg-white rounded-lg border border-gray-300' placeholder='123 Main St' />
  </div>

  {/* City & State */}
  <div className='w-full flex flex-col md:flex-row gap-4'>
    <div className='w-full md:w-1/2 flex flex-col gap-y-2'>
      <label htmlFor='city' className='font-bold text-lg'>City</label>
      <input onChange={formHandler} name='city' value={shipData.city} type='text' id='city' className='focus:outline-none p-2 bg-white rounded-lg border border-gray-300' placeholder='City' />
    </div>

    <div className='w-full md:w-1/2 flex flex-col gap-y-2'>
      <label htmlFor='state' className='font-bold text-lg'>State</label>
      <input onChange={formHandler} name='state' value={shipData.state} type='text' id='state' className='focus:outline-none p-2 bg-white rounded-lg border border-gray-300' placeholder='State' />
    </div>
  </div>

  {/* Country & Zip Code */}
  <div className='w-full flex flex-col md:flex-row gap-4'>
    <div className='w-full md:w-1/2 flex flex-col gap-y-2'>
      <label htmlFor='country' className='font-bold text-lg'>Country</label>
      <input onChange={formHandler} name='country' value={shipData.country} type='text' id='country' className='focus:outline-none p-2 bg-white rounded-lg border border-gray-300' placeholder='Country' />
    </div>

    <div className='w-full md:w-1/2 flex flex-col gap-y-2'>
      <label htmlFor='zipcode' className='font-bold text-lg'>Pin Code</label>
      <input onChange={formHandler} name='pinCode' value={shipData.pinCode} type='text' id='zipcode' className='focus:outline-none p-2 bg-white rounded-lg border border-gray-300' placeholder='ZIP / Postal Code' />
    </div>
  </div>

  {/* Phone Number */}
  <div className='w-full flex flex-col gap-y-2'>
    <label htmlFor='phone' className='font-bold text-lg'>Phone Number</label>
    <input onChange={formHandler} name='phone' value={shipData.phone} type='text' id='phone' className='focus:outline-none p-2 bg-white rounded-lg border border-gray-300' placeholder='e.g. +91 1234567890' />
  </div>

 <button
 onClick={()=>navigate("/confirmation")}
 type='submit'
 className='w-full p-2 bg-[#AC9C8D]/70 hover:bg-[#AC9C8D] shadow-md transition duration-200 text-white rounded-md'>Submit</button>
</form>

    </div>
  )
}

export default ShipCard