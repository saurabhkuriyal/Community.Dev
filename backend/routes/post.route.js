const express=require("express");
const multer=require("multer");

const router=express.Router();
const postController=require("../controllers/post.controller");
const authMiddleware=require("../middlewares/auth.mw")
const upload=multer({
    storage:multer.diskStorage({}),
    limits:{fileSize:10*1025*1024},
  });

router.route("/write").get(postController.writepost)

router.route("/postBlog").post(upload.single('file'),postController.writeBlogs);

router.route("/getallPost").get(postController.getAllPosts);

router.route("/getPost/:id").get(postController.getSpecificPost);

router.route("/likedPost/:id").post(postController.likePost);

router.route("/edit/post/:id").patch(upload.single('file'),postController.editPost);

router.route("/delete/post/:id").delete(postController.deletePost);

router.route("/get/userpost").get([authMiddleware.verifyToken],postController.getPosts);

router.route("/add/bookmarks").post(postController.addBookmark)

router.route("/get/bookmarks/:id").get(postController.getBookmarks);

router.route("/delete/bookmark").delete(postController.deleteBookmark);
module.exports=router;