const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    likes:{
        type:Number,
        default:0,
    },
    userIds:[{
        type:String,
    }],
    postImage:{
        type:String
    },
    date: {
        type: String,
    },
    category:{
        type:String,
    }
    
})

const Post=mongoose.model("post",postSchema);

module.exports=Post;