
import { useNavigate } from 'react-router-dom'

const Payment = () => {
  const navigate = useNavigate()
  return (
    <div className='min-h-[100%]  p-2 sm:w-[70%] w-full flex flex-col pt-8 gap-y-5 items-center'>
      <h1 className='text-2xl w-[90%] font-semibold text-gray-700'>PAYMENT</h1>
      <form action="" className='sm:min-h-[50rem] min-j-[50rem] shadow-md text-gray-500  font-Satoshi sm:w-[90%] w-full flex flex-col gap-y-6 bg-white p-8'>
        <div className='flex items-center  justify-between'>
          <h2 className='sm:text-2xl text-xl font-semibold'>Credit Card information</h2>
          <div className='flex items-center gap-x-2 '>
            <i class="fa-solid fa-lock"></i>
            <h3>Secure Server</h3>
          </div>
        </div>

        <div className=' flex flex-col gap-y-6'>
          <div className='w-full flex flex-col gap-y-3'>
            <label htmlFor="" className='font-bold text-lg'>Name on card</label>
            <input type="text" className='focus:outline-none p-2 bg-white rounded-lg border-[1px] border-gray-300' />
          </div>

          <div className=' w-full flex flex-col gap-y-3'>
            <label htmlFor="" className='font-bold text-lg'>Email</label>
            <div className='flex w-full justify-between items-center'>
              <input type="email" className='focus:outline-none w-[70%] p-2 bg-white rounded-lg border-[1px] border-gray-300' />
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* Expiration Date */}
            <div className="w-full md:w-[70%] flex flex-col">
              <label className="font-bold text-lg mb-2">Expiration Date</label>
              <div className="flex justify-between gap-4">
                <select className="w-1/2 p-2 bg-white rounded-md border border-gray-300">
                  {["Month", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((elem, index) => (
                    <option key={index} value={elem}>{elem}</option>
                  ))}
                </select>
                <select className="w-1/2 p-2 bg-white rounded-md border border-gray-300">
                  {["Year", 2025, 2026, 2027, 2028, 2029].map((elem, index) => (
                    <option key={index} value={elem}>{elem}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* CVC */}
            <div className="w-full md:w-[30%] flex flex-col">
              <div className="flex justify-between items-center mb-2">
                <label className="font-bold text-lg">CVC</label>
                <i className="fa-solid fa-circle-info text-lg text-gray-400"></i>
              </div>
              <input
                type="text"
                className="focus:outline-none w-full p-2 bg-white rounded-lg border border-gray-300"
                placeholder="Enter CVC"
              />
            </div>
          </div>

          <div className='flex w-full items-center gap-x-4'>
            <input type="checkbox" name="" id="" className='h-5 w-5' />
            <h1 className='text-lg font-medium'>Save credit card info for the next time</h1>
          </div>

          <h2 className='text-2xl font-semibold'>Billing Address</h2>
                  <div className='flex w-full items-center gap-x-4'>
            <input type="checkbox" name="" id="" className='h-5 w-5' />
            <h1 className='text-lg font-medium'>Same as shipping address</h1>
          </div>

                  <div className=''>
                    <h2 className='text-xl font-medium'>Min Ping</h2>
                    <p>24 new market</p>
                    <p>abc street</p>
                    <p>Bijieng ,china</p>
                    <p>cina</p>
                  </div>
        </div>

        <button onClick={()=>navigate("/confirmation")} className='w-full p-2 bg-[#AC9C8D]/70 hover:bg-[#AC9C8D] shadow-md transition duration-200 text-white rounded-md'>Place Order</button>
      </form>
    </div>
  )
}

export default Payment
