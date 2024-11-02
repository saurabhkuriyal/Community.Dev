const jwt=require("jsonwebtoken");
const User = require("../models/user.model");

async function verifyToken(req,res,next) {
    const token=req.headers['x-access-token']
    //console.log("hello from verifiy",token);
    
    if(!token){
        //console.log("hello from verifiy !token");
        return res.status(403).json({
            msg:"Unauthorised access:No token found"
        })
    }


    try {
        const response=jwt.verify(token,process.env.SECRET);

        //console.log(response);

        const user= await User.findOne({name:response.name});

        if(!user){
            return res.status(400).json({
                msg:"Unauthorised! this user doesn't exist"
            })
        }

        req.user=user;
        next();
        
        
    } catch (error) {
        //console.log("token error is ",error);
        res.status(404).json({msg:"invalid token",error})
        
        
    }
    // jwt.verify(token,process.env.SECRET,async(err,decoded)=>{

    //     console.log("hello from verifiy jwt");
        
    //     if(err){
    //         return res.status(401).json({
    //             msg:"Unauthorised"
    //         })

    //     }

    //     const user= await User.findOne({_id:decoded.userId});

    //     if(!user){
    //         return res.status(400).json({
    //             msg:"Unauthorised! this user doesn't exist"
    //         })
    //     }


        
    //     next();
    // }


//)
    
//Doubts position of next and inclusion o req.user
}

module.exports={
    verifyToken
}