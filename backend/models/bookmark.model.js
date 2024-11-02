const mongoose=require("mongoose")

const newbookmarkSchema=new mongoose.Schema({
    userId: { type: String, ref: 'user', required: true },
    postIds: [{ type: String, ref: 'post', required: true}],
    bookmarkedAt: { type: Date, default: Date.now },
})

module.exports=mongoose.model("UserBookmark",newbookmarkSchema)