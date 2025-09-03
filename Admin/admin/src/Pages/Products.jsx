import axios from 'axios'
import { useContext,useEffect, useState  } from 'react';
import { authDataContext } from '../Context/AuthContext';
import { adminDataContext } from '../Context/AdminContext';
import UpdateProduct from '../Components/UpdateProduct';


const Products = () => {
  const {serverURL} = useContext(authDataContext)
  const {productList,handleGetAllProductData} = useContext(adminDataContext)
const [update, setUpdate] = useState(null)
  useEffect(() => {
    handleGetAllProductData()
  }, [])
  

  console.log(productList)

// function to delete the product from the server:
const handleDeleteProduct = async(id)=>{
  try {
    const result = await axios.post(`${serverURL}/api/product/removeproduct/${id}`,{},{withCredentials:true})
    if(result.data){
      handleGetAllProductData()
    }else{
      console.log("failed to remove item!")
    }
  } catch (error) {
    console.log(error)
  }
}


  return (
    <div className="p-6 relative">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Products (Admin)</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productList.map((item,id) => (
          <div
            key={id}
            className="bg-white rounded-xl shadow-md border border-gray-200 p-5 flex flex-col items-center hover:shadow-xl transition-transform transform hover:-translate-y-1 hover:scale-[1.02] duration-300 min-h-[380px]"
          >
            <img
              src={item.image1}
              alt={`Product ${id + 1}`}
              className="w-full h-[250px] object-cover object-top-left rounded-md mb-4 shadow-sm"
            />
            <h3 className="text-lg font-semibold text-center text-gray-800 mb-1">
               {item.name}
            </h3>
            <p className="text-sm text-gray-500 text-center mb-2">
               {item.description}.
            </p>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-blue-600 font-bold text-lg">₹{item.price}</span>
              {/* <span className="line-through text-gray-400 text-sm">$59.99</span> */}
            </div>
            <div className="flex gap-3 mt-auto">
              <button onClick={()=>setUpdate(item)} className="bg-blue-600 hover:bg-blue-800 text-white font-semibold px-4 py-1.5 rounded-md transition-colors duration-200">
                Edit
              </button>
              <button onClick={()=>handleDeleteProduct(item._id)} className="bg-red-500 hover:bg-red-700 text-white font-semibold px-4 py-1.5 rounded-md transition-colors duration-200">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {update?<UpdateProduct update = {update} setUpdate={setUpdate}/>:null}
    </div>
  );
};

export default Products;
