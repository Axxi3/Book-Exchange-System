const express = require('express'); 
const { body, validationResult } = require('express-validator');
const router = express.Router();
const cors = require('cors');  
const User=require("../models/User")    
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtSecret="myguitar'snameistrisha@123"

router.post("/createuser",cors(),async(req,res)=>{    

  let email=req.body.email;
  let pass=req.body.pass  
  console.log(pass)
    const saltRounds = await bcrypt.genSalt(10);  
    let secPass=await bcrypt.hash(pass,saltRounds)
    try {   
      const user = await User.findOne({ email });
      if (user) {
        return res.json({ success: false, message: "User Already Exists, Please Try to login" });
      }
        await User.create({    
          pfp:req.body.pfp, 
            name:req.body.name,
            email:req.body.email,   
            class:req.body.class,
            password:secPass
        })  
        res.json({success:true,message:"Account successfully created"})
    } catch (error) {
        console.log("-----", error);
      res.json({ success: false ,message:"Something went wrong"});
    }
})    




router.post("/loginuser", cors(), async (req, res) => {
    const { email, pass } = req.body;
  
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.json({ success: false, message: "Email not found" });
      }
  
      const isPasswordValid = await bcrypt.compare(pass, user.password);
      if (isPasswordValid) {  
        const data={ 
            user: { 
              id:user.id, 
              name:user.name,
              class:user.class, 
              pfp:user.pfp
            }
          }   
          const auth=jwt.sign(data,jwtSecret)
          return res.json({success:true,auth:auth,message: "Successfully signed in"})  
      
      } else {
        return res.json({ success: false, message: "Wrong password" });
      }
    } catch (error) {
      console.log("Error:", error);
      res.json({ success: false, message: "An error occurred" });
    }
  });
  


module.exports = router;