const mongoose=require("mongoose")

const commentSchema=new mongoose.Schema({
    userId:{
        type:String, ref:"user", required:true
    },
    postId:{
        type:String,ref:"post",required:true
    },
    postComment:{
        type:String, required:true
    },
    date:{
        type:String
    },
    name:{
        type:String, required:true
    }

})

module.exports=mongoose.model("comment",commentSchema);

