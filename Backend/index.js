import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import cors from "cors"
import authRoutes from './routes/authRoute.js';
import userRoute from './routes/userRoute.js';
import cookieParser from 'cookie-parser';
import productRoute from './routes/productRoute.js';
import cartRoute from './routes/cartRoute.js';
import orderRoute from './routes/orderRoute.js';
import wishRoute from './routes/wishListRoute.js';
dotenv.config();

const port = process.env.PORT || 5000;
let app = express();

app.use(express.json())
app.use(cookieParser())
app.use(cors({
     origin:["https://e-commerce-frontend-61hc.onrender.com","http://localhost:5174"],
     credentials:true
}))

app.use("/api/auth",authRoutes)
app.use("/api/user",userRoute)
app.use("/api/product",productRoute)
app.use("/api/cart",cartRoute)
app.use("/api/order",orderRoute)
app.use("/api/wish",wishRoute)

app.get("/",(req,res)=>{
    res.send("hello from server")
})


app.listen(port,()=>{
    console.log(`server is running on port: http://localhost:${port}`)
    connectDB()
})
