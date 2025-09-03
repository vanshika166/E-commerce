import React from 'react';

const ViewOrder = ({ orderDetails, handleOrderDetails }) => {
  console.log(orderDetails);

  // Calculate total items and total price
  const totalItems = orderDetails.items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = orderDetails.items.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div className='absolute top-3 text-gray-700 gap-y-3 right-2 min-h-full p-1 flex flex-col w-[40%] rounded-lg border-[1px] border-gray-300 shadow-4xl bg-white z-10'>

      {/* Header */}
      <div className='p-2 flex items-center px-3 justify-between border-b-[1px] border-gray-300'>
        <div>
          <h1 className='text-xl font-medium'>Order ID: {orderDetails._id || "N/A"}</h1>
          <h2 className='text-md'>Order details</h2>
        </div>
        <i onClick={() => handleOrderDetails()} className="fa-solid fa-xmark text-2xl cursor-pointer"></i>
      </div>

      {/* Items */}
      <div className='flex w-full flex-col gap-y-2 p-2'>
        <h1 className='text-xl ml-4'>Items</h1>
        {orderDetails.items.map((item, index) => (
          <div key={index} className='flex items-center justify-between border-b-[1px] border-gray-200 p-2'>
            <div className='flex items-center gap-x-3 px-3'>
              <img src={item.image1} alt="" className='shadow-md h-[4rem] w-[4rem] object-cover rounded-md' />
              <div>
                <h2 className='text-xl text-black'>{item.name}</h2>
                <h3 className='text-md text-gray-500'>{item.category}</h3>
              </div>
            </div>
            <div className='flex flex-col gap-y-1'>
              <h2>{item.quantity} pcs</h2>
              <h2 className='text-gray-500'>Sizes: <span className='text-black'>{item.sizes.join(", ")}</span></h2>
            </div>
            <h2 className='text-black'>₹{item.price * item.quantity}.00</h2>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className='flex flex-col gap-y-1 border-b border-gray-300 px-9 py-2'>
        <div className='flex justify-between'>
          <p className='font-medium'>Total Items</p>
          <p>{totalItems}</p>
        </div>
        <div className='flex justify-between'>
          <p className='font-medium'>Total Price</p>
          <p className='text-black font-semibold'>₹{totalPrice}.00</p>
        </div>
      </div>

      {/* Order Info */}
      <div className='flex flex-col gap-y-1 border-b border-gray-300 px-9 py-2'>
        <div className='flex justify-between'>
          <p>Created at</p>
          <p className='text-black'>{orderDetails.createdAt.slice(0,10)}</p>
        </div>
        <div className='flex justify-between'>
          <p>Payment method</p>
          <p className='text-black'>{orderDetails.paymentMethod}</p>
        </div>
        <div className='flex justify-between'>
          <p>Payment Status</p>
          <p className='text-black'>{orderDetails.paymentStatus || "Unpaid"}</p>
        </div>
        <div className='flex justify-between'>
          <p>Order Status</p>
          <p className={`px-2 py-1 rounded-full text-sm font-semibold ${
            orderDetails.status === "Delivered" ? "bg-green-100 text-green-700" :
            orderDetails.status === "Pending" ? "bg-yellow-100 text-yellow-700" :
            orderDetails.status === "Cancelled" ? "bg-red-100 text-red-700" :
            "bg-gray-100 text-gray-700"
          }`}>
            {orderDetails.status}
          </p>
        </div>
        <div className='flex justify-between'>
          <p>Estimated Delivery</p>
          <p className='text-black'>{orderDetails.estimatedDelivery || "Not available"}</p>
        </div>
      </div>

      {/* Customer Info */}
      <div className='flex flex-col gap-y-2 px-9 py-4'>
        <div className='flex justify-between'>
          <p>Customer name</p>
          <p className='text-black'>{orderDetails.address.fullName}</p>
        </div>
        <div className='flex justify-between'>
          <p>Email</p>
          <p className='text-blue-700'>{orderDetails.address.email}</p>
        </div>
        <div className='flex justify-between'>
          <p>Phone</p>
          <p className='text-black'>({orderDetails.address.phone.slice(0,3)}) {orderDetails.address.phone.slice(3)}</p>
        </div>
        <div className='flex items-start justify-between'>
          <p>Address</p>
          <div className='text-right'>
            <p className='text-black'>{orderDetails.address.street}</p>
            <p className='text-black'>{orderDetails.address.city}, {orderDetails.address.state} - {orderDetails.address.pinCode}</p>
            <p className='text-black'>{orderDetails.address.country}</p>
          </div>
        </div>
      </div>

      {/* Customer Notes */}
      {orderDetails.customerNote && (
        <div className='flex flex-col gap-y-1 px-9 py-4'>
          <h2 className='text-md font-semibold'>Customer Notes</h2>
          <p className='text-gray-600'>{orderDetails.customerNote}</p>
        </div>
      )}

    </div>
  );
};

export default ViewOrder;
