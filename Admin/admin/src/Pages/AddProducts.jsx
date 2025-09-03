import React, { useContext, useState } from 'react';
import { authDataContext } from '../Context/AuthContext.jsx';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddProducts = () => {
  const [image1, setimage1] = useState(false)
  const [image2, setimage2] = useState(false)
  const [image3, setimage3] = useState(false)
  const [image4, setimage4] = useState(false)
  const [name, setName] = useState('')
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("Men")
  const [subCategory, setSubCategory] = useState("Topwaer")
  const [price, setPrice] = useState("")
  const [sizes, setsizes] = useState([])
  const [bestSeller, setBestSeller] = useState(false)
  const [inStock, setInStock] = useState(false)

  const { serverURL } = useContext(authDataContext)

  const notify = () => {
      toast.success("🎉 Product added Successfully!", {
        position: "top-right",
        autoClose: 3000, // milliseconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored", // "light", "dark", "colored"
      });
    };

  const handleAddProductForm = async (e) => {
    e.preventDefault();
    try {
      console.log("Form submission started");

      const formData = new FormData();
      formData.append("name", name)
      formData.append("description", description)
      formData.append("category", category)
      formData.append("subCategory", subCategory)
      formData.append("price", price)
      formData.append("sizes", JSON.stringify(sizes))
      formData.append("bestSeller", bestSeller)
      formData.append("inStock", inStock)
      formData.append("image1", image1)
      formData.append("image2", image2)
      formData.append("image3", image3)
      formData.append("image4", image4)

      const result = await axios.post(serverURL + '/api/product/addproduct', formData, { withCredentials: true })

      if (result.data) {
        console.log("Server response:", result.data);
        notify()

        // Clear form fields
        setName("")
        setDescription("")
        setCategory("Men")
        setSubCategory("Topwear")
        setsizes([])
        setPrice("")
        setBestSeller(false)
        setInStock(false)
        setimage1(false)
        setimage2(false)
        setimage3(false)
        setimage4(false)
      }

    } catch (error) {
      console.log("Error in form submission:", error.message)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Product</h2>

        <form onSubmit={handleAddProductForm} className="space-y-6">

          {/* Name */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">Product Name</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              placeholder="Enter product name"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">Price (₹)</label>
            <input
              type="number"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              placeholder="Enter price"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">Description</label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              rows="4"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              placeholder="Enter product description"
            ></textarea>
          </div>

          {/* Category */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">Category</label>
            <select
              onChange={(e) => setCategory(e.target.value)}
              value={category}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white"
            >
              <option value="Men">Men</option>
              <option value="Women">Women</option>
            </select>
          </div>

          {/* Subcategory */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">Sub category</label>
            <select
              onChange={(e) => setSubCategory(e.target.value)}
              value={subCategory}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white"
            >
              <option value="topwear">topwear</option>
              <option value="bottomwear">bottomwear</option>
              <option value="winterwear">winterwear</option>
              <option value="summerwear">summerwear</option>
              <option value="dresses">dresses</option>
              <option value="casuals">casuals</option>

            </select>
          </div>

          {/* Sizes */}
          <div className='w-full flex items-center p-2 gap-x-5'>
            {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
              <div
                key={size}
                onClick={() => {
                  setsizes(prev =>
                    prev.includes(size)
                      ? prev.filter(s => s !== size)
                      : [...prev, size]
                  );
                }}
                className={`px-4 py-2 border rounded-lg cursor-pointer transition
                ${sizes.includes(size)
                    ? 'bg-[#AC9C8D] text-white border-[#AC9C8D]'
                    : 'bg-white text-gray-800 border-gray-300'}`}
              >
                {size}
              </div>
            ))}
          </div>

          {/* Checkbox */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name="bestSeller"
              id='bestSeller'
              checked={bestSeller}
              onChange={() => setBestSeller(prev => !prev)}
              className="h-5 w-5"
            />
            <label htmlFor='bestSeller' className="text-gray-700">Best Seller</label>
            <input
              type="checkbox"
              name="inStock"
              id='inStock'
              checked={inStock}
              onChange={() => setInStock(prev => !prev)}
              className="h-5 w-5"
            />
            <label htmlFor='bestSeller' className="text-gray-700">In Stock</label>
          </div>

          {/* Image Uploads */}
          <div className='w-full p-2'>
            <label className="block font-medium text-gray-700 mb-1">Product Images</label>
            <div className='flex items-center gap-x-8'>
              {[image1, image2, image3, image4].map((img, index) => (
                <label key={index} htmlFor={`image${index + 1}`} className='h-[3.5rem] w-[3.5rem] cursor-pointer'>
                  <img src={!img ? "/upload.png" : URL.createObjectURL(img)} alt="" className='h-full w-full rounded-sm border object-cover' />
                  <input
                    type="file"
                    id={`image${index + 1}`}
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (index === 0) setimage1(file);
                      else if (index === 1) setimage2(file);
                      else if (index === 2) setimage3(file);
                      else if (index === 3) setimage4(file);
                    }}
                    hidden
                  />
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-[#AC9C8D] text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
