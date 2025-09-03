import { useContext, useEffect, useState } from "react";
import { productDataContext } from "../Context/ProductContext.jsx";
const OrderSummary = () => {
  const { userCartList,getAmount,totalAmount,deliveryFee,taxTotalAmount } = useContext(productDataContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    userCartList.forEach((elem) => {
      const value =
        elem?.discount > 0
          ? elem.price - (elem.price * elem.discount) / 100
          : elem.price;

      setTotal((prev) => prev + value * elem.quantity); // quantity bhi add kar li
    });
  }, []);

  const finalprice = taxTotalAmount.toLocaleString("en-IN",{style:"currency",currency:'INR'})

  return (
    <div className="min-h-[100%] p-2 sm:w-[30%] w-full flex flex-col pt-8 gap-y-5 items-center">
      <h1 className="text-2xl w-[90%] font-semibold text-gray-700">
        ORDER SUMMARY
      </h1>

      <div className="sm:h-[50rem] h-[20rem] text-gray-500 border-t-[1px] border-gray-300  font-Satoshi w-[90%] flex flex-col gap-y-2 p-2">
        {userCartList.map((item, index) => {
          return (
            <div key={index} className="w-full p-2 ">
              <div className="w-full flex items-center justify-between">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <h2>
                  qty: <span>{item.quantity}</span>
                </h2>
              </div>
              <div className="w-full flex items-center justify-between">
                <h2>Size:{Object.keys(item.sizes).join(", ")}</h2>
                <h2 className="font-semibold">
                  ₹{" "}
                  {item?.discount > 0
                    ? item.price - (item.price * item.discount) / 100
                    : item.price}
                  .00
                </h2>
              </div>
              <div className="h-[0.5px] w-full  bg-gray-300 mt-6"></div>
            </div>
          );
        })}

        <div className="w-full">
          <div className="flex w-full items-center justify-between">
            <h2>SubTotal</h2>
            <p className="font-semibold">₹{totalAmount}</p>
          </div>

          <div className="flex w-full items-center justify-between">
            <h2>Shipping</h2>
            <p className="font-semibold">₹{deliveryFee}</p>
          </div>

          <div className="flex w-full items-center justify-between">
            <h2>Tax</h2>
            <p className="font-semibold">0.12%</p>
          </div>

          <div className="flex w-full items-center justify-between">
            <h2>Total</h2>
           
            <p className="font-semibold text-xl">{finalprice}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
