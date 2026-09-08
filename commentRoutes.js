const router = require("express").Router();

const Comment = require("../models/Comment");

router.post("/add", async(req,res)=>{

    const comment = new Comment({

        postId:req.body.postId,

        text:req.body.text

    });

    await comment.save();

    res.send("Comment Added");
});

router.get("/:postId", async(req,res)=>{

    const comments = await Comment.find({
        postId:req.params.postId
    });

    res.json(comments);
});

module.exports = router;
