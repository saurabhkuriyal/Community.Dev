const mongoose=require("mongoose");
const Comment=require("../models/comment.model");

async function postComment(req,res) {
    try {
        const {userId,postId,postComment,name}=req.body;
        // console.log(req.body);
        
        
        const commented=await Comment.create({userId,postId,postComment,name});

        res.status(201).json({msg:"succesfull",commented});

    } catch (error) {
        // console.log(error);
        res.status(500).json({msg:"Comment not posted",error});
        
        
    }
}

async function getComments(req,res) {
    try {

        const postId=req.params.id;

        const getcomments=await Comment.find({postId}).populate("userId");

        if(!getcomments){
            return res.status(404).json({msg:"not found"});
        }

        res.status(200).json({msg:"post sent successfully",getcomments})
        
    } catch (error) {
        // console.log(error);
        exports.status(300).json({msg:"Some error ocurred",error})
        
    }
}

module.exports={
    postComment,
    getComments
}