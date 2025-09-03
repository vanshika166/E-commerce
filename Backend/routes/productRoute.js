import express from 'express';
import { addProduct, getAllProducts, removeProduct, updateProduct } from '../controller/productController.js';
import upload from '../middleware/multer.js';
import isAdmin from '../middleware/adminAuth.js'



const productRoute = express.Router()

productRoute.post("/addproduct", upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 }]), addProduct)

 productRoute.get("/allproducts",getAllProducts);
 productRoute.post("/removeproduct/:id",isAdmin,removeProduct); 
 productRoute.put("/updateproduct/:id",isAdmin,updateProduct)

export default productRoute;