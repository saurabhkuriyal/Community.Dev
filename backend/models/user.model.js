const mongoose=require('mongoose');
const { string, union, number } = require('zod');
const jwt=require("jsonwebtoken");
const secret=process.env.SECRET;

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        requred:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobileNo:{
        type:Number,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    userType:{
        type:String,
        default:"customer",
        enum:["admin","customer"]
    },
    userImage:{
        type:String
    }

})

// userSchema.methods.generateToken=async()=> {
//     try {
//         return jwt.sign({
//             userId:this._id.toString()
//         },
//         secret,
//         {
//             expiresIn:60*60,
//         }
//     );
//     } catch (error) {
//         return error;
//     }
// }

const User=mongoose.model("user",userSchema);

module.exports=User;