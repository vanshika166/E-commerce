import axios from 'axios';
import { useContext } from 'react';
import { authDataContext } from '../Context/AuthContext.jsx';
import { toast } from 'react-toastify';


const UpdateProduct = ({ update, setUpdate }) => {
    const { serverURL } = useContext(authDataContext);

const notify = () => {
    toast.success("🎉 Data Saved Successfully!", {
      position: "top-right",
      autoClose: 3000, // milliseconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored", // "light", "dark", "colored"
    });
  };



    const handleOnchange = (e) => {
        const { name, type, checked, value } = e.target;
        setUpdate(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
            totalPrice: update.price - (update.price * update.discount / 100)

        }))
    }

    const handleSubmitUpdate = async (e) => {
        e.preventDefault()
        try {
            const result = await axios.put(`${serverURL}/api/product/updateproduct/${update._id}`,
                {
                    price: update.price,
                    bestSeller: update.bestSeller,
                    inStock: update.inStock,
                    discount: update.discount,
                    totalPrice:update.totalPrice
                },
                { withCredentials: true })
            console.log("product is updated: ", result.data)
            notify()
        } catch (error) {
            console.log(error)
        }
    }


    console.log(update)
    return (
        <div className='h-full w-full bg-black/50 backdrop-blur-md fixed inset-0'>
            <div className='h-[25rem]  w-[50rem] left-[20%] top-[10rem] z-10 bg-white rounded-2xl shadow-xl fixed inset-0'>
                <i onClick={() => setUpdate(false)} class="fa-solid fa-xmark absolute right-5 top-3 text-xl hover:text-gray-500 p-2 rounded-md"></i>
                <form className="flex flex-col gap-4 p-8">
                    <label className="flex flex-col">
                        Price
                        <input
                            type="number"
                            name="price"
                            onChange={handleOnchange}
                            value={update.price}
                            className="border rounded px-2 py-1 mt-1"
                            min="0"
                            step="0.01"
                        />
                    </label>
                    <div className='w-full flex items-center gap-x-10'>
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                onChange={handleOnchange}
                                name="bestSeller"
                                checked={update.bestSeller}
                                className="accent-blue-600"
                            />
                            Best Seller
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                name="inStock"
                                onChange={handleOnchange}
                                checked={update.inStock}
                                className="accent-blue-600"
                            />
                            In Stock
                        </label>
                    </div>

                    <label className="flex flex-col">
                        Discount
                        <input
                            type="number"
                            name="discount"
                            onChange={handleOnchange}
                            value={update.discount}
                            className="border rounded px-2 py-1 mt-1"
                            min="0"
                            step="0.01"
                        />
                    </label>
                    <label className="flex flex-col">
                        Total Price
                        <h2 className='h-[2.3rem] rounded px-2 py-1 border mt-1 w-full'>
                            {update.totalPrice}
                        </h2>
                    </label>
                    <button
                        onClick={handleSubmitUpdate}
                        type="submit"
                        className="bg-blue-600 text-white rounded px-4 py-2 mt-4 hover:bg-blue-700"
                    >
                        Update Product
                    </button>
                </form>
            </div>

        </div>

    )
}

export default UpdateProduct
