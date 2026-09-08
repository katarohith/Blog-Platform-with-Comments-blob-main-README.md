const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/users",
require("./routes/userRoutes"));

app.use("/api/posts",
require("./routes/postRoutes"));

app.use("/api/comments",
require("./routes/commentRoutes"));

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.listen(5000, ()=>{
    console.log("Server running");
});
