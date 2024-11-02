require("dotenv").config();
const express=require('express');
const { connect } = require("mongoose");
const connection = require("./utils/db");
const user=require("./routes/auth.route");
const bodyParser = require("body-parser");
const cors=require("cors");
const post=require("./routes/post.route");
const comment=require("./routes/comment.route");

const app=express();
const port=3000;


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//route middleware
app.use(user);
app.use(post);
app.use(comment);

connection().then(() => {
    app.listen(port,()=>{
        console.log("BlogApp server is running");
    });
})
