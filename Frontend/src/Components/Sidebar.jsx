import React from 'react'

const Sidebar = () => {
    return (
        <div className='h-full w-[20%] relative flex flex-col gap-y-2 p-2 border-r-[2px] border-gray-400/20'>
            <div className='flex items-center gap-x-2 border-b-[1px] border-gray-500/20'>
                <img src="/H.png" alt="" className='h-[2.5rem] w-[2.5rem] object-cover rounded-lg' />
                <h1 className='titlename text-3xl font-medium'>HE & SHE</h1>
            </div>

            <div className='flex items-center w-full p-2 gap-x-5 text-lg rounded-md font-Satoshi'>
                <i class="fa-solid fa-house"></i>
                <h1>Dashboard</h1>
            </div>
            <div className='flex items-center w-full p-2 gap-x-5 text-lg  rounded-md font-Satoshi'>
                <i class="fa-solid fa-scale-balanced"></i>
                <h1>Orders</h1>
            </div>
            <div className='flex items-center w-full p-2 gap-x-5 text-lg  rounded-md font-Satoshi'>
               <i class="fa-solid fa-cart-shopping"></i>
                <h1>Products</h1>
            </div>
            <div className='flex absolute bottom-4 border-t-[1px] border-gray-400/20 items-center w-full p-2 gap-x-5 text-lg font-Satoshi left-0'>
               <i class="fa-solid fa-angles-right"></i>
                <h1>Hide</h1>
            </div>
        </div>
    )
}

export default Sidebar