const Post = require("../models/post.model");
const cloudinary = require("cloudinary").v2;
const Bookmark = require("../models/bookmark.model")

async function writepost(req, res) {

    res.render("write.ejs");
}

async function writeBlogs(req, res) {
    try {
        const thatPost = JSON.parse(req.body.post);

        const { title, content, author, category } = thatPost;
        //console.log("This is file", req.file)

        let postImage = "";
        if (req.file) {
            cloudinary.config({
                cloud_name: "deuofkrkf",
                api_key: "862572375618953",
                api_secret: "vrtWkACC1-Tra5I0WzJ6tIsstLw"
            });

            const result = await cloudinary.uploader.upload(req.file.path);
            //console.log(result.secure_url, 'uploaded.secure_url');
            postImage = result.secure_url;
        }

        const post = await Post.create({ title, content, author, date: new Date(), postImage: postImage, category });

        //console.log(post);

        res.status(201).json({msg:"post created succesfully"});
    } catch (error) {
        //console.log(error);
        res.status(500).json({msg:"Some error occurred",error});

    }
}

async function getPosts(req, res) {
    try {
        //console.log("user is ", req.user);
        const userPosts = await Post.find({ author: req.user.name });
        //console.log(userPosts);

        res.status(200).json({ msg: "successful", userPosts });


    } catch (error) {
        //console.log(error);
        res.status(400).json({msg:"not found",error});

    }
}

async function getSpecificPost(req, res) {
    try {
        const id = req.params.id;
        const post = await Post.findById(id);


        res.status(201).json({ msg: "send successfully", post });
    } catch (error) {
        res.status(400).json(error)
        //console.log(error);

    }
}

// async function likePost(req, res) {
//     try {
//         const id = req.params.id;
//         const userId=req.body.userid;
//         const post = await Post.findById(id);
//         post.likes = post.likes + 1;


//         if (post.userIds.includes(userId)){

//             console.log("reached here");

//             post.userIds = post.userIds.filter(id => id !== userId);
//             post.likes--;

//             await post.save();
//             return res.status(200).json({msg:"already liked"})
//         }
//         post.userIds.push(userId);

//         post.likes = post.likes + 1;
//         await post.save();

//         console.log("LIKES", post.likes);
//         res.status(200).json({msg:"liked",post});

//     } catch (error) {
//         console.log(error);

//         res.status(500).json({msg:"not submitted",error});
//     }
// }

async function likePost(req, res) {
    try {
        const id = req.params.id;
        const userId = req.body.userid;

        const post = await Post.findById(id);

        if (!post) {
            return res.status(404).json({ msg: 'Post not found' });
        }

        const hasLiked = post.userIds.includes(userId);

        if (hasLiked) {
            post.userIds = post.userIds.filter(id => id !== userId);
            post.likes--;
        } else {
            post.userIds.push(userId);
            post.likes++;
        }

        await post.save();

        res.status(200).json({ msg: hasLiked ? 'Unliked' : 'Liked', post });
    } catch (error) {
        //console.error(error);
        res.status(500).json({ msg: 'Internal server error' });
    }
}

async function editPost(req, res) {
    try {
        const id = req.params.id;

        const editPost = JSON.parse(req.body.update);
        //console.log("this is edit post", editPost);


        const { title, content, author, category } = editPost;


        const thatPost = await Post.findById({ _id: id })

        if (!thatPost) {
            return res.status(404).json({ msg: "Post not found" })
        }



        thatPost.title = title || thatPost.title,
            thatPost.content = content || thatPost.content,
            thatPost.author = author || thatPost.author,
            thatPost.category = category || thatPost.category,

            await thatPost.save();

        res.status(200).json({ msg: "successful" })

    } catch (error) {
        //console.log(error);

        res.status(400).json({ error, msg: "failed to update" })
    }

}

async function deletePost(req, res) {
    const id = req.params.id;
    try {
        //console.log("hello from delete");

        const deleted = await Post.findOneAndDelete({ _id: id });

        if (!deleted) {
            res.status(404).json({ msg: "post not found" });
        } else {
            res.status(200).json({ msg: "deleted" });
        }


    } catch (error) {
        //console.log(error);
        res.status(500).json({ error, msg: "Some error occurred" })

    }
}

async function getAllPosts(res, res) {
    try {
        const allPost = await Post.find({});
        res.status(201).json(allPost);
    } catch (error) {
        res.status(404).json({ msg: "some error occurred" });
    }
}

async function addBookmark(req, res) {
    try {
        const { userId, postId } = req.body;


        const bookmarkUser = await Bookmark.findOne({ userId });

        if (bookmarkUser) {
            if (bookmarkUser.postIds.includes(postId)) {
                //console.log("at already bookmark");

                return res.status(200).json({ msg: "already bookmarked" })
            } else {
                //console.log("at bookmarking post");

                bookmarkUser.postIds.push(postId);
                await bookmarkUser.save();
                return res.status(201).json({ msg: "bokmarked successfully", })
            }
        }
        const bookmarked = await Bookmark.create({ userId, postIds: [postId] });

        res.status(201).json({ msg: "bokmarked successfully", bookmarked })

    } catch (error) {
       // console.log(error);
        res.status(500).json({ msg: "fail to bookmark", error })

    }
}

async function getBookmarks(req, res) {
    try {
        const userId = req.params.id;
        //console.log(userId);

        const bookmarks = await Bookmark.find({ userId })
            .populate({
                path: 'postIds',
            });


        //console.log("Bookmarked item", bookmarks);

        res.status(200).json({ msg: "successful", bookmarks });


    } catch (error) {
        //console.log(error);
        res.status(400).json({ msg: "some error occurred", error })


    }
}

async function deleteBookmark(req, res) {
    try {
        const { userId, postId } = req.query;

        const bookmark = await Bookmark.findOne({ userId });

        if (!bookmark) {
            return res.status(404).json({ message: 'Bookmark not found' });
        }
        //Remove the post id
        bookmark.postIds = bookmark.postIds.filter(id => id !== postId);

        // Save the updated bookmark
        await bookmark.save()

        res.status(200).json({ msg: "deleted successfully" })

    } catch (error) {
        //console.log(error);
        res.status(404).json({ msg: "Not deleted", error })

    }
}

module.exports = {
    writeBlogs,
    writepost,
    getPosts,
    getSpecificPost,
    likePost,
    editPost,
    deletePost,
    getAllPosts,
    addBookmark,
    getBookmarks,
    deleteBookmark
}