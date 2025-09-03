import mongoose from "mongoose";

const userScehma = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String
    },
    cart:{
        type:Object,
        default:{}
    },
    wishList:{
        type:Array,
        default:[]
    }
},{timestamps:true, minimize:false});

const User = mongoose.model("User",userScehma);
export default User;