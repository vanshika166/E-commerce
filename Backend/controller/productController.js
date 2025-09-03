import uploadOnCloudinary from "../config/cloudinary.js";
import product from "../model/productModel.js";



// function to create product:
export const addProduct = async (req, res) => {
    const { name, description, category, subCategory, price, bestSeller, sizes, inStock } = req.body;

    try {
        let image1, image2, image3, image4;
        if (req.files.image1?.[0]) {
            image1 = await uploadOnCloudinary(req.files.image1[0].path);
        }
        if (req.files.image2?.[0]) {
            image2 = await uploadOnCloudinary(req.files.image2[0].path);
        }
        if (req.files.image3?.[0]) {
            image3 = await uploadOnCloudinary(req.files.image3[0].path);
        }
        if (req.files.image4?.[0]) {
            image4 = await uploadOnCloudinary(req.files.image4[0].path);
        }

        const productData = {
            name,
            description,
            category,
            subCategory,
            price: Number(price),
            bestSeller: bestSeller === "true" ? true : false,
            inStock: inStock === "true" ? true : false,
            sizes: JSON.parse(sizes),
            date: Date.now(),
            image1,
            image2,
            image3,
            image4
        };

        const producthai = await product.create(productData);
        res.status(201).json(producthai);

    } catch (error) {
        console.error("Add Product Error:", error);
        res.status(500).json({ message: error.message });
    }
};


// function to gte all products:
export const getAllProducts = async (req, res) => {
    try {
        const products = await product.find({})
        res.status(200).json(products)
    } catch (error) {
        console.log("get Allproduct:", error)
        res.status(500).json(error.message)
    }
}


// function to remove a products from database:
export const removeProduct = async (req, res) => {
    try {
        const productsId = req.params.id
        const deleteProduct = await product.findByIdAndDelete(productsId)
        res.status(200).json(deleteProduct)
    } catch (error) {
        console.log("remove Product:", error)
        res.status(500).json(error.message)
    }
}


// function to update products:
// export const updateProduct = async(req,res)=>{
//     const id = req.params.id;
//     const updateData = req.body;
//     try {
//         const updateProduct = await product.findByIdAndUpdate(id,updateData,{new:true});
//         if(!updateProduct){
//             res.status(400).json({message:"product not found!"})
//         }
//         res.status(200).json(updateProduct)
//     } catch (error) {
//         console.log("update product:", error)
//         res.status(500).json({error:error.message})
//     }

// }


export const updateProduct = async (req, res) => {
    try {
        const { price, bestSeller, inStock, discount, totalPrice } = req.body;
        const productId = req.params.id;
        
        const foundProduct = await product.findByIdAndUpdate(productId,
            { price, bestSeller, inStock, discount, totalPrice },
            { new: true }
        )
        if (!foundProduct) {
            return res.status(400).json("Product not found")
        }
        return res.status(200).json(foundProduct)
    } catch (error) {
        console.log("update product:", error)
        return res.status(500).json({ error: error })
    }
}