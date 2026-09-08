const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    postId:String,
    userId:String,
    text:String
},{
    timestamps:true
});

module.exports = mongoose.model("Comment", commentSchema);
