const router = require("express").Router();

const User = require("../models/User");

router.post("/register", async(req,res)=>{

    const user = new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    });

    await user.save();

    res.send("User Registered");
});

router.post("/login", async(req,res)=>{

    const user = await User.findOne({
        email:req.body.email
    });

    if(!user){
        return res.send("User Not Found");
    }

    if(user.password !== req.body.password){
        return res.send("Wrong Password");
    }

    res.send("Login Success");
});

module.exports = router;
