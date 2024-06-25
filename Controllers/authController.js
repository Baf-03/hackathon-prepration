import userModel from "../models/userSchema.js";
import jwt from "jsonwebtoken"


const signupController = async(req,res)=>{
    console.log("howa hit")
    try{
        const {name,email,password}=req.body;

        if(!name || !email || !password){
            return res.status(400).json({
                data:null,
                status:false,
                message:"required fields are missing"
            })
        }
        
        const userExist = await userModel.find({email:email});

        if(userExist.length){
            return res.status(400).json({
                data:null,
                message:"email already exist",
                status:false
            })
        }

        await userModel.create({name,email,password})

        res.json({
            data:null,
            message:"user created XDD",
            status:true
        })

    }catch(err){
        console.log(err)
        res.status(500).json("something went wrong")
    }
   
    
}


const loginController =async(req,res)=>{
    const {email,password} = req.body;

    if(!email || !password){
        return res.json({
            data:null,
            status:false,
            message:"required fields are missing"
        })
    }

    const userExist = await userModel.findOne({email:email})

    if(!userExist){
        console.log("usr nahi hae")
        return res.status(400).json({
            data:null,
            status:false,
            message:"email do not exist"
        })
    }
    console.log(password,userExist)
    if(userExist.password!==password){
        return res.status(400).json({
            data:null,
            status:false,
            messsage:"password incorrect"
        })
    }

    const token = jwt.sign({email},process.env.TOKEN_KEY,{
        expiresIn: '5hr',
      })
    
      res.json({
        data:userExist,
        token,
        status:true
      })
}


const verify = async(req,res)=>{
    res.json("user verified")
}


export {
    signupController,loginController,verify
}