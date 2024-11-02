const express=require('express');
const userController=require('../controllers/user.controller')
const multer=require("multer");

const router=express.Router();
const upload=multer({
    storage:multer.diskStorage({}),
    limits:{fileSize:10*1025*1024},
  });

router.route("/registration").get(userController.loginPage);

router.route("/submit").post(upload.single('file'),userController.registration);

router.route("/login").post(userController.authLogin);

router.route("/getalluser").get(userController.getAllUSer);



module.exports=router;