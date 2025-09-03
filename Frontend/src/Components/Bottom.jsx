
const Bottom = () => {
  return (
    <div className='h-[25rem] mt-8 w-full flex bg-[#F4F4F4]'>
            <div className='flex flex-col items-center justify-evenly h-full  w-[50%]'>
              <div className='flex flex-col items-center justify-center gap-y-3'>
                <i class="text-2xl fa-solid fa-truck-fast"></i>
                <h1 className='text-xl font-Satoshi font-medium'>Free shipping</h1>
                <h2 className='font-Satoshi font-medium'>Orders above ₹200</h2>
              </div>
              <div className='flex flex-col items-center justify-center gap-y-3'>
                <i class="text-2xl fa-solid fa-phone"></i>
                <h1 className='text-xl font-Satoshi font-medium'>Premium Support</h1>
                <h2 className='font-Satoshi font-medium'>Phone and email support</h2>
              </div>
            </div>
            <div className='flex flex-col items-center justify-evenly h-full  w-[50%]'>
              <div className='flex flex-col items-center justify-center gap-y-3'>
                <i class="text-2xl fa-solid fa-money-check"></i>
                <h1 className='text-xl font-Satoshi font-medium'>Money-back</h1>
                <h2 className='font-Satoshi font-medium'>30 day Guarantee </h2>
              </div>
              <div className='flex flex-col items-center justify-center gap-y-3'>
                <i class="text-2xl fa-solid fa-shield-halved"></i>
                <h1 className='text-xl font-Satoshi font-medium'>Secure Payments</h1>
                <h2 className='font-Satoshi font-medium'>Secured by Stripet</h2>
              </div>
            </div>
          </div>
  )
}

export default Bottom