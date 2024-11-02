const User = require("../models/user.model")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;
const cloudinary = require("cloudinary").v2;

async function loginPage(req, res) {
    res.render('login.ejs')
}

async function registration(req, res) {
    try {

        const thatUser=JSON.parse(req.body.initial)
        const { name, email, mobileNo, username, password } = thatUser;

        //console.log("This is ",thatUser);
        
        let securedPassword = bcrypt.hashSync(password, 10);

        //console.log("This is file", req.file)

        let userImage="";

        if (req.file) {
            cloudinary.config({
                cloud_name: "deuofkrkf",
                api_key: "862572375618953",
                api_secret: "vrtWkACC1-Tra5I0WzJ6tIsstLw"
            });

            const result = await cloudinary.uploader.upload(req.file.path);
            //console.log(result.secure_url, 'uploaded.secure_url');
            userImage = result.secure_url;
        }


        const userCreated = await User.create({ name, email, mobileNo, username, password: securedPassword,userImage });

        //console.log(userCreated);

        res.status(200).json("successfull");

    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"Some error occurred",error});

    }
}

async function authLogin(req, res) {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username: username });
        
        if (user==null) {
            return res.status(400).json({msg:"not found"});
        }

        const ispasswd =bcrypt.compareSync(password, user.password);
        
        if (!ispasswd) {
            return res.status(400).json({msg:"wrong password"})
                
        }

        const token = await jwt.sign({ userId: user._id, name:user.name }, secret, {
            expiresIn: '1h',
        });

        res.json({
            msg: "Authentication successful",
            token: token,
            userId:user._id,
            name:user.name,
            userType:user.userType,
            userImage:user.userImage
        });

    } catch (error) {
        res.status(500).json({msg:"internal server error",error});

    }
}

async function getAllUSer(req,res) {
    try {
        const user = await User.find({});

        res.status(200).json({msg:"successfully sent",user});
        

    } catch (error) {
        console.log(error);
        res.status(404).json({msg:"not found",error});
        
    }
}

module.exports = {
    loginPage,
    registration,
    authLogin,
    getAllUSer
}