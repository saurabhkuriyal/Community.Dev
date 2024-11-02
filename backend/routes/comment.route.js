const express=require("express");

const router=express.Router();

const commetController=require("../controllers/Comment.controller");

router.route("/post/postcomments").post(commetController.postComment);

router.route("/get/getcomments/:id").get(commetController.getComments);

module.exports=router;
