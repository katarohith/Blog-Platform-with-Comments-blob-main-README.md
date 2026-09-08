const router = require("express").Router();

const Post = require("../models/Post");

router.post("/create", async(req,res)=>{

    const post = new Post({

        title:req.body.title,

        content:req.body.content

    });

    await post.save();

    res.send("Post Created");
});

router.get("/", async(req,res)=>{

    const posts = await Post.find();

    res.json(posts);
});

router.delete("/:id", async(req,res)=>{

    await Post.findByIdAndDelete(req.params.id);

    res.send("Post Deleted");

});

router.put("/:id", async(req,res)=>{

    await Post.findByIdAndUpdate(

        req.params.id,

        {
            title:req.body.title,
            content:req.body.content
        }

    );

    res.send("Post Updated");

});

module.exports = router;
